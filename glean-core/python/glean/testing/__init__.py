# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


"""
Utilities for writing unit tests involving Glean.
"""


import gzip
from pathlib import Path
from typing import List, Optional, Tuple


from glean import Configuration
from .error_type import ErrorType  # noqa
from ..net import base_uploader, ping_uploader


def reset_glean(
    *,
    application_id: str,
    application_version: str,
    configuration: Optional[Configuration] = None,
    clear_stores: bool = True
) -> None:
    """
    Resets the Glean singleton.

    Args:
        application_id (str): The application id to use when sending pings.
        application_version (str): The version of the application sending
            Glean data.
        configuration (glean.config.Configuration): (optional) An object with
            global settings.
    """
    from glean import Glean
    from glean._dispatcher import Dispatcher

    data_dir: Optional[Path] = None
    if not clear_stores:
        Glean._destroy_data_dir = False
        data_dir = Glean._data_dir

    Glean._reset()

    # `_testing_mode` should be changed *after* `Glean._reset()` is run, so
    # that `Glean` properly joins on the worker thread when `_testing_mode` is
    # False.
    Dispatcher._testing_mode = True

    Glean.initialize(
        application_id=application_id,
        application_version=application_version,
        upload_enabled=True,
        configuration=configuration,
        data_dir=data_dir,
    )


class _RecordingUploader(base_uploader.BaseUploader):
    """
    A ping uploader that saves the results to disk for later inspection.

    This is used for testing only, but it needs to be importable from the Glean
    package since it runs in the ping upload worker subprocess.
    """

    def __init__(self, file_path):
        self.file_path = file_path

    def do_upload(
        self,
        path: str,
        data: bytes,
        headers: List[Tuple[str, str]],
        config: "Configuration",
    ) -> ping_uploader.UploadResult:
        is_gzipped = (
            len([h for h in headers if h[0] == "Content-Encoding" and h[1] == "gzip"])
            == 1
        )

        uncompressed_data = gzip.decompress(data) if is_gzipped else data
        with self.file_path.open("w") as fd:
            fd.write(str(path) + "\n")
            fd.write(uncompressed_data.decode("utf-8") + "\n")

        return ping_uploader.HttpResponse(status_code=200)


__all__ = ["reset_glean", "ErrorType"]
