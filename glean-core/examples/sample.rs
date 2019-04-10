use glean_core::metrics::{BooleanMetric, StringMetric};
use glean_core::{storage, CommonMetricData, Lifetime, Glean};
use lazy_static::lazy_static;

lazy_static! {
    pub static ref GLOBAL_METRIC: BooleanMetric = BooleanMetric::new(CommonMetricData {
        name: "global_metric".into(),
        category: "global".into(),
        send_in_pings: vec!["default".into()],
        lifetime: Lifetime::Ping,
        disabled: false,
    });
}

fn main() {
    Glean::initialize();
    assert!(Glean::singleton().is_initialized());

    let local_metric: StringMetric = StringMetric::new(CommonMetricData {
        name: "local_metric".into(),
        category: "local".into(),
        send_in_pings: vec!["default".into()],
        lifetime: Lifetime::Ping,
        disabled: false,
    });

    GLOBAL_METRIC.set(true);
    local_metric.set("I can set this");

    println!("{}", storage::StorageManager.dump());
}
