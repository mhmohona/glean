var N=null,E="",T="t",U="u",searchIndex={};
var R=["string","commonmetricdata","as_str","dynamic_label","glean","option","test_get_value","Test-only API (exported for FFI purposes).","histogram","Public facing API for setting the metric to a date/time…","datetime","test_get_value_as_json_string","Create a new memory distribution metric.","accumulate_samples_signed","Accumulates the provided signed samples in the metric.","timeunit","duration","set_start","Start tracking time for the provided metric.","timerid","functional","Set to the specified value.","should_record","glean_core","jsonvalue","Collect a snapshot for the given ping from storage and…","pingtype","Snapshot the given store and optionally clear it.","database","result","Create and initialize a new Glean object.","configuration","snapshot","hashmap","try_from","try_into","borrow_mut","to_owned","clone_into","type_id","borrow","typeid","glean_core::metrics","dataerror","to_bytes","glean_core::ping","glean_core::storage","meta_mut","errorkind","lifetime","histogramtype","labeledmetric","memoryunit","default","formatter","errortype","serialize","deserialize","backtrace","CommonMetricData","Configuration","Lifetime","ErrorType","PingType","HistogramType","MemoryUnit","TimeUnit","BooleanMetric","CounterMetric","CustomDistributionMetric","DatetimeMetric","EventMetric","LabeledMetric","MemoryDistributionMetric","QuantityMetric","StringMetric","StringListMetric","TimespanMetric","TimingDistributionMetric","UuidMetric","MetricType","PingMaker","StorageManager","Glean is a modern approach for recording and sending…","The common set of data shared across all different metric…","The metric's name.","category","The metric's category.","send_in_pings","List of ping names to include this metric in.","The metric's lifetime.","disabled","Whether or not the metric is disabled.","Dynamic label. When a LabeledMetric factory creates the…","A specialized [`Error`] type for this crate's operations.","The object holding meta information about a Glean instance.","The supported metrics' lifetimes.","The metric is reset with each sent ping","Application","The metric is reset on application restart","The metric is reset with each user profile","A specialized [`Result`] type for this crate's operations.","The Glean configuration.","upload_enabled","Whether upload should be enabled.","data_path","Path to a directory to store all data in.","application_id","The application ID (will be sanitized during…","max_events","The maximum number of events to store before sending a…","delay_ping_lifetime_io","Whether Glean should delay persistence of data from…","set_upload_enabled","Set whether upload is enabled or not.","is_upload_enabled","Determine whether upload is enabled.","register_ping_type","Register a new `PingType`.","submit_ping","Collect and submit a ping for eventual uploading.","submit_ping_by_name","Collect and submit a ping for eventual uploading by name.","submit_pings_by_name","The different metric types supported by the Glean SDK to…","Stores information about a ping.","Create a new ping type for the given name, whether to…","glean_preview","to_string","glean_preview::metrics","storeerror","handleerror","infallible","Create a new metadata object.","Whether this metric should be recorded.","storage_names","The list of storages this metric should be recorded into.","Access the [`ErrorKind`] member.","utf8_error","Return a new UTF-8 error","with_sequence_numbers","randomstate","on_ready_to_submit_pings","Called when Glean is initialized to the point where it can…","get_application_id","Get the application ID as specified on instantiation.","get_data_path","Get the data path of this instance.","Get a handle to the database.","event_storage","Get a handle to the event database.","eventdatabase","get_max_events","Get the maximum number of events to store before sending a…","Take a snapshot for the given store and optionally clear it.","Collect and submit a ping by name for eventual uploading.","get_ping_by_name","Get a `PingType` by name.","set_experiment_active","Indicate that an experiment is running. Glean will then…","set_experiment_inactive","Indicate that an experiment is no longer running.","persist_ping_lifetime_data","Persist Lifetime::Ping data that might be in memory in…","test_is_experiment_active","test_get_experiment_data_as_json","test_clear_all_stores","String representation of the lifetime.","ClientInfoMetrics","glean_ffi","FfiConfiguration"];
searchIndex["glean_core"]={"doc":R[83],"i":[[3,R[59],R[23],R[84],N,N],[12,"name",E,R[85],0,N],[12,R[86],E,R[87],0,N],[12,R[88],E,R[89],0,N],[12,R[49],E,R[90],0,N],[12,R[91],E,R[92],0,N],[12,R[3],E,R[93],0,N],[3,"Error",E,R[94],N,N],[3,R[60],E,R[102],N,N],[12,R[103],E,R[104],1,N],[12,R[105],E,R[106],1,N],[12,R[107],E,R[108],1,N],[12,R[109],E,R[110],1,N],[12,R[111],E,R[112],1,N],[3,"Glean",E,R[95],N,N],[4,R[61],E,R[96],N,N],[13,"Ping",E,R[97],2,N],[13,R[98],E,R[99],2,N],[13,"User",E,R[100],2,N],[4,R[62],E,"The possible error types for metric recording. Note: the…",N,N],[13,"InvalidValue",E,"For when the value to be recorded does not match the…",3,N],[13,"InvalidLabel",E,"For when the label of a labeled metric does not match the…",3,N],[13,"InvalidState",E,"For when the metric caught an invalid state while recording",3,N],[13,"InvalidOverflow",E,"For when the value to be recorded overflows the…",3,N],[5,"test_get_num_recorded_errors",E,"Get the number of recorded errors for the given metric and…",N,[[[R[5],["str"]],["str"],[R[1]],[R[4]],[R[55]]],[[R[29],["i32",R[0]]],[R[0]],["i32"]]]],[0,"ac_migration",E,"A module containing glean-core code for supporting data…",N,N],[11,R[2],E,R[167],2,[[],["str"]]],[11,"new",E,R[133],0,[[["into",[R[0]]],[R[0]]],[R[1]]]],[11,R[22],E,R[134],0,[[["self"]],["bool"]]],[11,R[135],E,R[136],0,[[["self"]]]],[11,"kind",E,R[137],4,[[["self"]],[R[48]]]],[11,R[138],E,R[139],4,[[],["error"]]],[11,R[2],E,"The error type's metric name",3,[[["self"]],["str"]]],[0,"metrics",E,R[124],N,N],[3,R[67],R[42],"A boolean metric.",N,N],[3,R[68],E,"A counter metric.",N,N],[3,R[70],E,"A datetime metric.",N,N],[3,R[71],E,"An event metric.",N,N],[3,R[69],E,"A custom distribution metric.",N,N],[3,R[72],E,"A labeled metric.",N,N],[3,R[73],E,"A memory distribution metric.",N,N],[3,R[63],E,R[125],N,N],[12,"name",E,"The name of the ping.",5,N],[12,"include_client_id",E,"Whether the ping should include the client ID.",5,N],[12,"send_if_empty",E,"Whether the ping should be sent if it is empty",5,N],[3,R[74],E,"A quantity metric.",N,N],[3,R[75],E,"A string metric.",N,N],[3,R[76],E,"A string list metric.",N,N],[3,R[77],E,"A timespan metric.",N,N],[3,R[78],E,"A timing distribution metric.",N,N],[3,R[79],E,"An UUID metric.",N,N],[4,R[64],E,"Different kinds of histograms.",N,N],[13,"Linear",E,"A histogram with linear distributed buckets.",6,N],[13,"Exponential",E,"A histogram with exponential distributed buckets.",6,N],[4,R[65],E,"Different resolutions supported by the memory related…",N,N],[13,"Byte",E,E,7,N],[13,"Kilobyte",E,E,7,N],[13,"Megabyte",E,E,7,N],[13,"Gigabyte",E,E,7,N],[4,R[66],E,"Different resolutions supported by the time related metric…",N,N],[13,"Nanosecond",E,"Truncate to nanosecond precision.",8,N],[13,"Microsecond",E,"Truncate to microsecond precision.",8,N],[13,"Millisecond",E,"Truncate to millisecond precision.",8,N],[13,"Second",E,"Truncate to second precision.",8,N],[13,"Minute",E,"Truncate to minute precision.",8,N],[13,"Hour",E,"Truncate to hour precision.",8,N],[13,"Day",E,"Truncate to day precision.",8,N],[4,"Metric",E,"The available metrics.",N,N],[13,"Boolean",E,"A boolean metric. See `BooleanMetric` for more information.",9,N],[13,"Counter",E,"A counter metric. See `CounterMetric` for more information.",9,N],[13,"CustomDistributionExponential",E,"A custom distribution with precomputed exponential…",9,N],[13,"CustomDistributionLinear",E,"A custom distribution with precomputed linear bucketing.…",9,N],[13,"Datetime",E,"A datetime metric. See `DatetimeMetric` for more…",9,N],[13,"Experiment",E,"An experiment metric. See `ExperimentMetric` for more…",9,N],[13,"Quantity",E,"A quantity metric. See `QuantityMetric` for more…",9,N],[13,"String",E,"A string metric. See `StringMetric` for more information.",9,N],[13,"StringList",E,"A string list metric. See `StringListMetric` for more…",9,N],[13,"Uuid",E,"A UUID metric. See `UuidMetric` for more information.",9,N],[13,"Timespan",E,"A timespan metric. See `TimespanMetric` for more…",9,N],[13,"TimingDistribution",E,"A timing distribution. See `TimingDistributionMetric` for…",9,N],[13,"MemoryDistribution",E,"A memory distribution. See `MemoryDistributionMetric` for…",9,N],[5,"combine_base_identifier_and_label",E,"Combines a metric's base identifier and label",N,[[["str"]],[R[0]]]],[5,R[3],E,"Validate a dynamic label, changing it to OTHER_LABEL if…",N,[[["str"],[R[1]],[R[4]]],[R[0]]]],[5,"strip_label",E,"Strips the label off of a complete identifier",N,[[["str"]],["str"]]],[11,"new",E,"Create a new boolean metric.",10,[[[R[1]]],["self"]]],[11,"set",E,"Set to the specified boolean value.",10,[[["bool"],["self"],[R[4]]]]],[11,R[6],E,R[7],10,[[["str"],["self"],[R[4]]],[[R[5],["bool"]],["bool"]]]],[11,"new",E,"Create a new counter metric.",11,[[[R[1]]],["self"]]],[11,"add",E,"Increase the counter by `amount`.",11,[[["i32"],["self"],[R[4]]]]],[11,R[6],E,R[7],11,[[["str"],["self"],[R[4]]],[[R[5],["i32"]],["i32"]]]],[11,"new",E,R[12],12,[[[R[50]],[R[1]],["u64"]],["self"]]],[11,R[13],E,R[14],12,[[["i64"],["vec",["i64"]],["self"],[R[4]]]]],[11,R[6],E,R[7],12,[[["str"],["self"],[R[4]]],[[R[5],[R[8]]],[R[8],["box"]]]]],[11,R[11],E,R[7],12,[[["str"],["self"],[R[4]]],[[R[0]],[R[5],[R[0]]]]]],[11,"new",E,"Create a new datetime metric.",13,[[[R[1]],[R[15]]],["self"]]],[11,"set_with_details",E,R[9],13,[[["u32"],["i32"],["self"],[R[4]]]]],[11,"set",E,R[9],13,[[[R[4]],[R[5],[R[10]]],["self"],[R[10],["fixedoffset"]]]]],[11,"test_get_value_as_string",E,R[7],13,[[["str"],["self"],[R[4]]],[[R[0]],[R[5],[R[0]]]]]],[11,"new",E,"Create a new event metric.",14,[[[R[1]],[R[0]],["vec",[R[0]]]],["self"]]],[11,"record",E,"Record an event.",14,[[[R[4]],["into",[R[5]]],[R[5],[R[33]]],["u64"],["self"]]]],[11,"test_has_value",E,R[7],14,[[["str"],["self"],[R[4]]],["bool"]]],[11,R[6],E,R[7],14,[[["str"],["self"],[R[4]]],[[R[5],["vec"]],["vec",["recordedeventdata"]]]]],[11,R[11],E,R[7],14,[[["str"],["self"],[R[4]]],[R[0]]]],[11,"new",E,"Create a new labeled metric from the given metric instance…",15,[[[R[5],["vec"]],[T],["vec",[R[0]]]],[R[51]]]],[11,"get",E,"Get a specific metric for a given label.",15,[[["str"],["self"]],[T]]],[11,"get_submetric",E,"Get the template submetric.",15,[[["self"]],[T]]],[11,"new",E,R[12],16,[[[R[52]],[R[1]]],["self"]]],[11,"accumulate",E,"Accumulates the provided sample in the metric.",16,[[["u64"],["self"],[R[4]]]]],[11,R[13],E,R[14],16,[[["i64"],["vec",["i64"]],["self"],[R[4]]]]],[11,R[6],E,R[7],16,[[["str"],["self"],[R[4]]],[[R[8],[R[20]]],[R[5],[R[8]]]]]],[11,R[11],E,R[7],16,[[["str"],["self"],[R[4]]],[[R[0]],[R[5],[R[0]]]]]],[11,"as_bytes",E,"Convert a value in the given unit to bytes.",7,[[["u64"]],["u64"]]],[11,"new",E,R[126],5,[[["into",[R[0]]],[R[0]],["bool"]],["self"]]],[11,"submit",E,"Submit the ping for eventual uploading",5,[[["self"],[R[4]]],[[R[29],["bool"]],["bool"]]]],[11,"new",E,"Create a new quantity metric.",17,[[[R[1]]],["self"]]],[11,"set",E,"Set the value. Must be non-negative.",17,[[["i64"],["self"],[R[4]]]]],[11,R[6],E,R[7],17,[[["str"],["self"],[R[4]]],[[R[5],["i64"]],["i64"]]]],[11,"new",E,"Create a new string metric.",18,[[[R[1]]],["self"]]],[11,"set",E,R[21],18,[[["into",[R[0]]],[R[0]],["self"],[R[4]]]]],[11,R[6],E,R[7],18,[[["str"],["self"],[R[4]]],[[R[0]],[R[5],[R[0]]]]]],[11,"new",E,"Create a new string list metric.",19,[[[R[1]]],["self"]]],[11,"add",E,"Add a new string to the list.",19,[[["into",[R[0]]],[R[0]],["self"],[R[4]]]]],[11,"set",E,"Set to a specific list of strings.",19,[[[R[0]],["vec",[R[0]]],["self"],[R[4]]]]],[11,R[6],E,R[7],19,[[["str"],["self"],[R[4]]],[[R[5],["vec"]],["vec",[R[0]]]]]],[11,R[11],E,R[7],19,[[["str"],["self"],[R[4]]],[[R[0]],[R[5],[R[0]]]]]],[11,"format_pattern",E,"How to format the given TimeUnit, truncating the time if…",8,[[],["str"]]],[11,"duration_convert",E,"Convert a duration to the requested time unit.",8,[[[R[16]]],["u64"]]],[11,"as_nanos",E,"Convert a duration in the given unit to nanoseconds.",8,[[["u64"]],["u64"]]],[11,"new",E,"Create a new timespan metric.",20,[[[R[1]],[R[15]]],["self"]]],[11,R[17],E,R[18],20,[[["self"],[R[4]],["u64"]]]],[11,"set_stop",E,"Stop tracking time for the provided metric. Sets the…",20,[[["self"],[R[4]],["u64"]]]],[11,"cancel",E,"Abort a previous `start` call. No error is recorded if no…",20,[[["self"]]]],[11,"set_raw",E,"Explicitly set the timespan value.",20,[[["bool"],[R[16]],["self"],[R[4]]]]],[11,R[6],E,R[7],20,[[["str"],["self"],[R[4]]],[[R[5],["u64"]],["u64"]]]],[11,"new",E,"Create a new timing distribution metric.",21,[[[R[1]],[R[15]]],["self"]]],[11,R[17],E,R[18],21,[[["self"],["u64"]],[R[19]]]],[11,"set_stop_and_accumulate",E,"Stop tracking time for the provided metric and associated…",21,[[[R[19]],["self"],[R[4]],["u64"]]]],[11,"cancel",E,"Abort a previous `set_start` call. No error is recorded if…",21,[[["self"],[R[19]]]]],[11,R[13],E,R[14],21,[[["i64"],["self"],[R[4]],["vec",["i64"]]]]],[11,R[6],E,R[7],21,[[["str"],["self"],[R[4]]],[[R[8],[R[20]]],[R[5],[R[8]]]]]],[11,R[11],E,R[7],21,[[["str"],["self"],[R[4]]],[[R[0]],[R[5],[R[0]]]]]],[11,"new",E,"Create a new UUID metric",22,[[[R[1]]],["self"]]],[11,"set",E,R[21],22,[[["uuid"],["self"],[R[4]]]]],[11,"generate_and_set",E,"Generate a new random UUID and set the metric to it.",22,[[["self"],[R[4]]],["uuid"]]],[11,R[6],E,R[7],22,[[["str"],["self"],[R[4]]],[[R[0]],[R[5],[R[0]]]]]],[6,"TimerId",E,"Identifier for a running timer.",N,N],[8,R[80],E,"A `MetricType` describes common behavior across all metrics.",N,N],[10,"meta",E,"Access the stored metadata",23,[[["self"]],[R[1]]]],[10,R[47],E,"Access the stored metadata mutable",23,[[["self"]],[R[1]]]],[11,R[22],E,"Whether this metric should currently be recorded",23,[[["self"],[R[4]]],["bool"]]],[11,"ping_section",E,"The ping section the metric fits into.",9,[[["self"]],["str"]]],[11,"as_json",E,"The JSON representation of the metric's data",9,[[["self"]],[R[24]]]],[0,"ping",R[23],"Ping collection, assembly & submission.",N,N],[3,R[81],R[45],"Collect a ping's data, assemble it into its full payload…",N,N],[11,"new",E,"Create a new PingMaker.",24,[[],["self"]]],[11,"collect",E,R[25],24,[[[R[26]],["self"],[R[4]]],[[R[24]],[R[5],[R[24]]]]]],[11,"collect_string",E,R[25],24,[[[R[26]],["self"],[R[4]]],[[R[0]],[R[5],[R[0]]]]]],[11,"store_ping",E,"Store a ping to disk in the pings directory.",24,[[["str"],[R[24]],["path"],["self"]],[R[29]]]],[11,"clear_pending_pings",E,"Clear any pending pings in the queue.",24,[[["path"],["self"]],[R[29]]]],[0,"storage",R[23],"Storage snapshotting.",N,N],[3,R[82],R[46],"Snapshot metrics from the underlying database.",N,N],[11,R[32],E,R[27],25,[[["str"],[R[28]],["self"],["bool"]],[[R[0]],[R[5],[R[0]]]]]],[11,"snapshot_as_json",E,R[27],25,[[["str"],[R[28]],["self"],["bool"]],[[R[24]],[R[5],[R[24]]]]]],[11,"snapshot_metric",E,"Get the current value of a single metric identified by name.",25,[[["str"],[R[28]],["self"]],[["metric"],[R[5],["metric"]]]]],[11,"snapshot_experiments_as_json",E,"Snapshot the experiments.",25,[[["str"],[R[28]],["self"]],[[R[24]],[R[5],[R[24]]]]]],[6,"Result",R[23],R[101],N,N],[11,"new",E,R[30],26,[[[R[31]]],[R[29]]]],[11,R[140],E,R[30],26,[[[R[0]],["i32"],[R[31]],[R[33],[R[0],"i32"]]],[R[29]]]],[11,R[142],E,R[143],26,[[["self"]],["bool"]]],[11,R[113],E,R[114],26,[[["self"],["bool"]],["bool"]]],[11,R[115],E,R[116],26,[[["self"]],["bool"]]],[11,R[144],E,R[145],26,[[["self"]],["str"]]],[11,R[146],E,R[147],26,[[["self"]],["path"]]],[11,"storage",E,R[148],26,[[["self"]],[R[28]]]],[11,R[149],E,R[150],26,[[["self"]],[R[151]]]],[11,R[152],E,R[153],26,[[["self"]],["usize"]]],[11,R[32],E,R[154],26,[[["str"],["self"],["bool"]],[R[0]]]],[11,R[119],E,R[120],26,[[[R[26]],["self"]],[[R[29],["bool"]],["bool"]]]],[11,R[123],E,R[122],26,[[["self"]],["bool"]]],[11,R[121],E,R[155],26,[[["str"],["self"]],[[R[29],["bool"]],["bool"]]]],[11,R[156],E,R[157],26,[[["str"],["self"]],[[R[5],[R[26]]],[R[26]]]]],[11,R[117],E,R[118],26,[[[R[26]],["self"]]]],[11,R[158],E,R[159],26,[[[R[5],[R[33]]],[R[0]],["self"],[R[33],[R[0],R[0]]]]]],[11,R[160],E,R[161],26,[[[R[0]],["self"]]]],[11,R[162],E,R[163],26,[[["self"]],[R[29]]]],[11,R[164],E,R[7],26,[[[R[0]],["self"]],["bool"]]],[11,R[165],E,R[7],26,[[[R[0]],["self"]],[[R[0]],[R[5],[R[0]]]]]],[11,R[166],E,R[7],26,[[["self"]]]],[11,"into",E,E,0,[[],[U]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[37],E,E,0,[[["self"]],[T]]],[11,R[38],E,E,0,[[["self"],[T]]]],[11,R[34],E,E,0,[[[U]],[R[29]]]],[11,R[35],E,E,0,[[],[R[29]]]],[11,R[40],E,E,0,[[["self"]],[T]]],[11,R[36],E,E,0,[[["self"]],[T]]],[11,R[39],E,E,0,[[["self"]],[R[41]]]],[11,"vzip",E,E,0,[[],["v"]]],[11,"into",E,E,4,[[],[U]]],[11,"from",E,E,4,[[[T]],[T]]],[11,R[128],E,E,4,[[["self"]],[R[0]]]],[11,R[34],E,E,4,[[[U]],[R[29]]]],[11,R[35],E,E,4,[[],[R[29]]]],[11,R[40],E,E,4,[[["self"]],[T]]],[11,R[36],E,E,4,[[["self"]],[T]]],[11,R[39],E,E,4,[[["self"]],[R[41]]]],[11,"vzip",E,E,4,[[],["v"]]],[11,"as_fail",E,E,4,[[["self"]],["fail"]]],[11,"into",E,E,1,[[],[U]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[37],E,E,1,[[["self"]],[T]]],[11,R[38],E,E,1,[[["self"],[T]]]],[11,R[34],E,E,1,[[[U]],[R[29]]]],[11,R[35],E,E,1,[[],[R[29]]]],[11,R[40],E,E,1,[[["self"]],[T]]],[11,R[36],E,E,1,[[["self"]],[T]]],[11,R[39],E,E,1,[[["self"]],[R[41]]]],[11,"vzip",E,E,1,[[],["v"]]],[11,"into",E,E,26,[[],[U]]],[11,"from",E,E,26,[[[T]],[T]]],[11,R[34],E,E,26,[[[U]],[R[29]]]],[11,R[35],E,E,26,[[],[R[29]]]],[11,R[40],E,E,26,[[["self"]],[T]]],[11,R[36],E,E,26,[[["self"]],[T]]],[11,R[39],E,E,26,[[["self"]],[R[41]]]],[11,"vzip",E,E,26,[[],["v"]]],[11,"into",E,E,2,[[],[U]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[37],E,E,2,[[["self"]],[T]]],[11,R[38],E,E,2,[[["self"],[T]]]],[11,R[34],E,E,2,[[[U]],[R[29]]]],[11,R[35],E,E,2,[[],[R[29]]]],[11,R[40],E,E,2,[[["self"]],[T]]],[11,R[36],E,E,2,[[["self"]],[T]]],[11,R[39],E,E,2,[[["self"]],[R[41]]]],[11,"vzip",E,E,2,[[],["v"]]],[11,"into",E,E,3,[[],[U]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[34],E,E,3,[[[U]],[R[29]]]],[11,R[35],E,E,3,[[],[R[29]]]],[11,R[40],E,E,3,[[["self"]],[T]]],[11,R[36],E,E,3,[[["self"]],[T]]],[11,R[39],E,E,3,[[["self"]],[R[41]]]],[11,"vzip",E,E,3,[[],["v"]]],[11,"into",R[42],E,6,[[],[U]]],[11,"from",E,E,6,[[[T]],[T]]],[11,R[37],E,E,6,[[["self"]],[T]]],[11,R[38],E,E,6,[[["self"],[T]]]],[11,R[34],E,E,6,[[[U]],[R[29]]]],[11,R[35],E,E,6,[[],[R[29]]]],[11,R[40],E,E,6,[[["self"]],[T]]],[11,R[36],E,E,6,[[["self"]],[T]]],[11,R[39],E,E,6,[[["self"]],[R[41]]]],[11,"vzip",E,E,6,[[],["v"]]],[11,R[44],E,E,6,[[["self"]],[[R[29],["vec",R[43]]],["vec",["u8"]],[R[43]]]]],[11,"into",E,E,10,[[],[U]]],[11,"from",E,E,10,[[[T]],[T]]],[11,R[37],E,E,10,[[["self"]],[T]]],[11,R[38],E,E,10,[[["self"],[T]]]],[11,R[34],E,E,10,[[[U]],[R[29]]]],[11,R[35],E,E,10,[[],[R[29]]]],[11,R[40],E,E,10,[[["self"]],[T]]],[11,R[36],E,E,10,[[["self"]],[T]]],[11,R[39],E,E,10,[[["self"]],[R[41]]]],[11,"vzip",E,E,10,[[],["v"]]],[11,"into",E,E,11,[[],[U]]],[11,"from",E,E,11,[[[T]],[T]]],[11,R[37],E,E,11,[[["self"]],[T]]],[11,R[38],E,E,11,[[["self"],[T]]]],[11,R[34],E,E,11,[[[U]],[R[29]]]],[11,R[35],E,E,11,[[],[R[29]]]],[11,R[40],E,E,11,[[["self"]],[T]]],[11,R[36],E,E,11,[[["self"]],[T]]],[11,R[39],E,E,11,[[["self"]],[R[41]]]],[11,"vzip",E,E,11,[[],["v"]]],[11,"into",E,E,13,[[],[U]]],[11,"from",E,E,13,[[[T]],[T]]],[11,R[34],E,E,13,[[[U]],[R[29]]]],[11,R[35],E,E,13,[[],[R[29]]]],[11,R[40],E,E,13,[[["self"]],[T]]],[11,R[36],E,E,13,[[["self"]],[T]]],[11,R[39],E,E,13,[[["self"]],[R[41]]]],[11,"vzip",E,E,13,[[],["v"]]],[11,"into",E,E,14,[[],[U]]],[11,"from",E,E,14,[[[T]],[T]]],[11,R[37],E,E,14,[[["self"]],[T]]],[11,R[38],E,E,14,[[["self"],[T]]]],[11,R[34],E,E,14,[[[U]],[R[29]]]],[11,R[35],E,E,14,[[],[R[29]]]],[11,R[40],E,E,14,[[["self"]],[T]]],[11,R[36],E,E,14,[[["self"]],[T]]],[11,R[39],E,E,14,[[["self"]],[R[41]]]],[11,"vzip",E,E,14,[[],["v"]]],[11,"into",E,E,12,[[],[U]]],[11,"from",E,E,12,[[[T]],[T]]],[11,R[34],E,E,12,[[[U]],[R[29]]]],[11,R[35],E,E,12,[[],[R[29]]]],[11,R[40],E,E,12,[[["self"]],[T]]],[11,R[36],E,E,12,[[["self"]],[T]]],[11,R[39],E,E,12,[[["self"]],[R[41]]]],[11,"vzip",E,E,12,[[],["v"]]],[11,"into",E,E,15,[[],[U]]],[11,"from",E,E,15,[[[T]],[T]]],[11,R[37],E,E,15,[[["self"]],[T]]],[11,R[38],E,E,15,[[["self"],[T]]]],[11,R[34],E,E,15,[[[U]],[R[29]]]],[11,R[35],E,E,15,[[],[R[29]]]],[11,R[40],E,E,15,[[["self"]],[T]]],[11,R[36],E,E,15,[[["self"]],[T]]],[11,R[39],E,E,15,[[["self"]],[R[41]]]],[11,"vzip",E,E,15,[[],["v"]]],[11,"into",E,E,16,[[],[U]]],[11,"from",E,E,16,[[[T]],[T]]],[11,R[34],E,E,16,[[[U]],[R[29]]]],[11,R[35],E,E,16,[[],[R[29]]]],[11,R[40],E,E,16,[[["self"]],[T]]],[11,R[36],E,E,16,[[["self"]],[T]]],[11,R[39],E,E,16,[[["self"]],[R[41]]]],[11,"vzip",E,E,16,[[],["v"]]],[11,"into",E,E,5,[[],[U]]],[11,"from",E,E,5,[[[T]],[T]]],[11,R[37],E,E,5,[[["self"]],[T]]],[11,R[38],E,E,5,[[["self"],[T]]]],[11,R[34],E,E,5,[[[U]],[R[29]]]],[11,R[35],E,E,5,[[],[R[29]]]],[11,R[40],E,E,5,[[["self"]],[T]]],[11,R[36],E,E,5,[[["self"]],[T]]],[11,R[39],E,E,5,[[["self"]],[R[41]]]],[11,"vzip",E,E,5,[[],["v"]]],[11,"into",E,E,17,[[],[U]]],[11,"from",E,E,17,[[[T]],[T]]],[11,R[37],E,E,17,[[["self"]],[T]]],[11,R[38],E,E,17,[[["self"],[T]]]],[11,R[34],E,E,17,[[[U]],[R[29]]]],[11,R[35],E,E,17,[[],[R[29]]]],[11,R[40],E,E,17,[[["self"]],[T]]],[11,R[36],E,E,17,[[["self"]],[T]]],[11,R[39],E,E,17,[[["self"]],[R[41]]]],[11,"vzip",E,E,17,[[],["v"]]],[11,"into",E,E,18,[[],[U]]],[11,"from",E,E,18,[[[T]],[T]]],[11,R[37],E,E,18,[[["self"]],[T]]],[11,R[38],E,E,18,[[["self"],[T]]]],[11,R[34],E,E,18,[[[U]],[R[29]]]],[11,R[35],E,E,18,[[],[R[29]]]],[11,R[40],E,E,18,[[["self"]],[T]]],[11,R[36],E,E,18,[[["self"]],[T]]],[11,R[39],E,E,18,[[["self"]],[R[41]]]],[11,"vzip",E,E,18,[[],["v"]]],[11,"into",E,E,19,[[],[U]]],[11,"from",E,E,19,[[[T]],[T]]],[11,R[37],E,E,19,[[["self"]],[T]]],[11,R[38],E,E,19,[[["self"],[T]]]],[11,R[34],E,E,19,[[[U]],[R[29]]]],[11,R[35],E,E,19,[[],[R[29]]]],[11,R[40],E,E,19,[[["self"]],[T]]],[11,R[36],E,E,19,[[["self"]],[T]]],[11,R[39],E,E,19,[[["self"]],[R[41]]]],[11,"vzip",E,E,19,[[],["v"]]],[11,"into",E,E,20,[[],[U]]],[11,"from",E,E,20,[[[T]],[T]]],[11,R[34],E,E,20,[[[U]],[R[29]]]],[11,R[35],E,E,20,[[],[R[29]]]],[11,R[40],E,E,20,[[["self"]],[T]]],[11,R[36],E,E,20,[[["self"]],[T]]],[11,R[39],E,E,20,[[["self"]],[R[41]]]],[11,"vzip",E,E,20,[[],["v"]]],[11,"into",E,E,21,[[],[U]]],[11,"from",E,E,21,[[[T]],[T]]],[11,R[34],E,E,21,[[[U]],[R[29]]]],[11,R[35],E,E,21,[[],[R[29]]]],[11,R[40],E,E,21,[[["self"]],[T]]],[11,R[36],E,E,21,[[["self"]],[T]]],[11,R[39],E,E,21,[[["self"]],[R[41]]]],[11,"vzip",E,E,21,[[],["v"]]],[11,"into",E,E,22,[[],[U]]],[11,"from",E,E,22,[[[T]],[T]]],[11,R[37],E,E,22,[[["self"]],[T]]],[11,R[38],E,E,22,[[["self"],[T]]]],[11,R[34],E,E,22,[[[U]],[R[29]]]],[11,R[35],E,E,22,[[],[R[29]]]],[11,R[40],E,E,22,[[["self"]],[T]]],[11,R[36],E,E,22,[[["self"]],[T]]],[11,R[39],E,E,22,[[["self"]],[R[41]]]],[11,"vzip",E,E,22,[[],["v"]]],[11,"into",E,E,7,[[],[U]]],[11,"from",E,E,7,[[[T]],[T]]],[11,R[37],E,E,7,[[["self"]],[T]]],[11,R[38],E,E,7,[[["self"],[T]]]],[11,R[34],E,E,7,[[[U]],[R[29]]]],[11,R[35],E,E,7,[[],[R[29]]]],[11,R[40],E,E,7,[[["self"]],[T]]],[11,R[36],E,E,7,[[["self"]],[T]]],[11,R[39],E,E,7,[[["self"]],[R[41]]]],[11,"vzip",E,E,7,[[],["v"]]],[11,R[44],E,E,7,[[["self"]],[[R[29],["vec",R[43]]],["vec",["u8"]],[R[43]]]]],[11,"into",E,E,8,[[],[U]]],[11,"from",E,E,8,[[[T]],[T]]],[11,R[37],E,E,8,[[["self"]],[T]]],[11,R[38],E,E,8,[[["self"],[T]]]],[11,R[34],E,E,8,[[[U]],[R[29]]]],[11,R[35],E,E,8,[[],[R[29]]]],[11,R[40],E,E,8,[[["self"]],[T]]],[11,R[36],E,E,8,[[["self"]],[T]]],[11,R[39],E,E,8,[[["self"]],[R[41]]]],[11,"vzip",E,E,8,[[],["v"]]],[11,R[44],E,E,8,[[["self"]],[[R[29],["vec",R[43]]],["vec",["u8"]],[R[43]]]]],[11,"into",E,E,9,[[],[U]]],[11,"from",E,E,9,[[[T]],[T]]],[11,R[37],E,E,9,[[["self"]],[T]]],[11,R[38],E,E,9,[[["self"],[T]]]],[11,R[34],E,E,9,[[[U]],[R[29]]]],[11,R[35],E,E,9,[[],[R[29]]]],[11,R[40],E,E,9,[[["self"]],[T]]],[11,R[36],E,E,9,[[["self"]],[T]]],[11,R[39],E,E,9,[[["self"]],[R[41]]]],[11,"vzip",E,E,9,[[],["v"]]],[11,R[44],E,E,9,[[["self"]],[[R[29],["vec",R[43]]],["vec",["u8"]],[R[43]]]]],[11,"into",R[45],E,24,[[],[U]]],[11,"from",E,E,24,[[[T]],[T]]],[11,R[34],E,E,24,[[[U]],[R[29]]]],[11,R[35],E,E,24,[[],[R[29]]]],[11,R[40],E,E,24,[[["self"]],[T]]],[11,R[36],E,E,24,[[["self"]],[T]]],[11,R[39],E,E,24,[[["self"]],[R[41]]]],[11,"vzip",E,E,24,[[],["v"]]],[11,"into",R[46],E,25,[[],[U]]],[11,"from",E,E,25,[[[T]],[T]]],[11,R[34],E,E,25,[[[U]],[R[29]]]],[11,R[35],E,E,25,[[],[R[29]]]],[11,R[40],E,E,25,[[["self"]],[T]]],[11,R[36],E,E,25,[[["self"]],[T]]],[11,R[39],E,E,25,[[["self"]],[R[41]]]],[11,"vzip",E,E,25,[[],["v"]]],[11,"meta",R[42],E,10,[[["self"]],[R[1]]]],[11,R[47],E,E,10,[[["self"]],[R[1]]]],[11,"meta",E,E,11,[[["self"]],[R[1]]]],[11,R[47],E,E,11,[[["self"]],[R[1]]]],[11,"meta",E,E,12,[[["self"]],[R[1]]]],[11,R[47],E,E,12,[[["self"]],[R[1]]]],[11,"meta",E,E,13,[[["self"]],[R[1]]]],[11,R[47],E,E,13,[[["self"]],[R[1]]]],[11,"meta",E,E,14,[[["self"]],[R[1]]]],[11,R[47],E,E,14,[[["self"]],[R[1]]]],[11,"meta",E,E,16,[[["self"]],[R[1]]]],[11,R[47],E,E,16,[[["self"]],[R[1]]]],[11,"meta",E,E,17,[[["self"]],[R[1]]]],[11,R[47],E,E,17,[[["self"]],[R[1]]]],[11,"meta",E,E,18,[[["self"]],[R[1]]]],[11,R[47],E,E,18,[[["self"]],[R[1]]]],[11,"meta",E,E,19,[[["self"]],[R[1]]]],[11,R[47],E,E,19,[[["self"]],[R[1]]]],[11,"meta",E,E,20,[[["self"]],[R[1]]]],[11,R[47],E,E,20,[[["self"]],[R[1]]]],[11,"meta",E,E,21,[[["self"]],[R[1]]]],[11,R[47],E,E,21,[[["self"]],[R[1]]]],[11,"meta",E,E,22,[[["self"]],[R[1]]]],[11,R[47],E,E,22,[[["self"]],[R[1]]]],[11,"from",R[23],E,4,[[["context",[R[48]]],[R[48]]],["error"]]],[11,"from",E,E,4,[[[R[131]]],["error"]]],[11,"from",E,E,4,[[["error"]],["error"]]],[11,"from",E,E,4,[[[R[130]]],["error"]]],[11,"from",E,E,4,[[["error"]],["error"]]],[11,"from",E,E,4,[[["osstring"]],["error"]]],[11,"from",E,E,4,[[[R[132]]],["error"]]],[11,"clone",E,E,2,[[["self"]],[R[49]]]],[11,"clone",E,E,0,[[["self"]],[R[1]]]],[11,"clone",R[42],E,6,[[["self"]],[R[50]]]],[11,"clone",E,E,10,[[["self"]],["booleanmetric"]]],[11,"clone",E,E,11,[[["self"]],["countermetric"]]],[11,"clone",E,E,14,[[["self"]],["eventmetric"]]],[11,"clone",E,E,15,[[["self"]],[R[51]]]],[11,"clone",E,E,7,[[["self"]],[R[52]]]],[11,"clone",E,E,5,[[["self"]],[R[26]]]],[11,"clone",E,E,17,[[["self"]],["quantitymetric"]]],[11,"clone",E,E,18,[[["self"]],["stringmetric"]]],[11,"clone",E,E,19,[[["self"]],["stringlistmetric"]]],[11,"clone",E,E,8,[[["self"]],[R[15]]]],[11,"clone",E,E,22,[[["self"]],["uuidmetric"]]],[11,"clone",E,E,9,[[["self"]],["metric"]]],[11,"clone",R[23],E,1,[[["self"]],[R[31]]]],[11,R[53],E,E,2,[[],["self"]]],[11,R[53],E,E,0,[[],[R[1]]]],[11,R[53],R[45],E,24,[[],["self"]]],[11,"eq",R[23],E,2,[[["self"],[R[49]]],["bool"]]],[11,"fmt",E,E,4,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,2,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,0,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,4,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,3,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",R[42],E,6,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,10,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,11,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,12,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,13,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,14,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,15,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,16,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,7,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,5,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,17,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,18,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,19,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,8,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,20,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,21,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,22,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,9,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",R[23],E,1,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,26,[[["self"],[R[54]]],[R[29]]]],[11,R[34],E,E,2,[[["i32"]],[[R[29],[R[49]]],[R[49]]]]],[11,R[34],E,E,3,[[["i32"]],[[R[55]],[R[29],[R[55]]]]]],[11,R[34],R[42],E,6,[[["i32"]],[[R[29],[R[50]]],[R[50]]]]],[11,R[34],E,E,7,[[["i32"]],[[R[52]],[R[29],[R[52]]]]]],[11,R[34],E,E,8,[[["i32"]],[[R[29],[R[15]]],[R[15]]]]],[11,R[56],E,E,6,[[["self"],["__s"]],[R[29]]]],[11,R[56],E,E,7,[[["self"],["__s"]],[R[29]]]],[11,R[56],E,E,8,[[["self"],["__s"]],[R[29]]]],[11,R[56],E,E,9,[[["self"],["__s"]],[R[29]]]],[11,R[57],E,E,6,[[["__d"]],[R[29]]]],[11,R[57],E,E,7,[[["__d"]],[R[29]]]],[11,R[57],E,E,8,[[["__d"]],[R[29]]]],[11,R[57],E,E,9,[[["__d"]],[R[29]]]],[11,"cause",R[23],E,4,[[["self"]],[[R[5],["fail"]],["fail"]]]],[11,R[58],E,E,4,[[["self"]],[[R[58]],[R[5],[R[58]]]]]]],"p":[[3,R[59]],[3,R[60]],[4,R[61]],[4,R[62]],[3,"Error"],[3,R[63]],[4,R[64]],[4,R[65]],[4,R[66]],[4,"Metric"],[3,R[67]],[3,R[68]],[3,R[69]],[3,R[70]],[3,R[71]],[3,R[72]],[3,R[73]],[3,R[74]],[3,R[75]],[3,R[76]],[3,R[77]],[3,R[78]],[3,R[79]],[8,R[80]],[3,R[81]],[3,R[82]],[3,"Glean"]]};
searchIndex["glean_ffi"]={"doc":E,"i":[[3,R[170],R[169],"Configuration over FFI.",N,N],[12,"data_dir",E,E,0,N],[12,"package_name",E,E,0,N],[12,R[103],E,E,0,N],[12,R[109],E,E,0,N],[12,R[111],E,E,0,N],[5,"glean_enable_logging",E,"Initialize the logging system based on the target…",N,[[]]],[5,"glean_initialize",E,"Safety",N,[[],["u64"]]],[5,"glean_initialize_migration",E,"Safety",N,[[["i32"]],["u64"]]],[5,"glean_on_ready_to_submit_pings",E,E,N,[[["u64"]],["u8"]]],[5,"glean_is_upload_enabled",E,E,N,[[["u64"]],["u8"]]],[5,"glean_set_upload_enabled",E,E,N,[[["u64"],["u8"]]]],[5,"glean_submit_pings_by_name",E,E,N,[[["i32"],["u64"]],["u8"]]],[5,"glean_ping_collect",E,E,N,[[["u64"]]]],[5,"glean_set_experiment_active",E,E,N,[[["i32"],["ffistr"],["u64"]]]],[5,"glean_set_experiment_inactive",E,E,N,[[["ffistr"],["u64"]]]],[5,"glean_experiment_test_is_active",E,E,N,[[["ffistr"],["u64"]],["u8"]]],[5,"glean_experiment_test_get_data",E,E,N,[[["ffistr"],["u64"]]]],[5,"glean_test_clear_all_stores",E,E,N,[[["u64"]]]],[5,"glean_destroy_glean",E,E,N,[[["u64"]]]],[5,"glean_str_free",E,"Public destructor for strings managed by the other side of…",N,[[]]],[0,"ping_type",E,E,N,N],[5,"glean_destroy_ping_type","glean_ffi::ping_type",E,N,[[["u64"]]]],[5,"glean_new_ping_type",E,E,N,[[["ffistr"],["u8"]],["u64"]]],[5,"glean_test_has_ping_type",E,E,N,[[["ffistr"],["u64"]],["u8"]]],[5,"glean_register_ping_type",E,E,N,[[["u64"]]]],[14,"define_infallible_handle_map_deleter",R[169],E,N,N],[14,"define_metric",E,"Define the global handle map, constructor and destructor…",N,N],[11,"into",E,E,0,[[],[U]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[34],E,E,0,[[[U]],[R[29]]]],[11,R[35],E,E,0,[[],[R[29]]]],[11,R[40],E,E,0,[[["self"]],[T]]],[11,R[36],E,E,0,[[["self"]],[T]]],[11,R[39],E,E,0,[[["self"]],[R[41]]]],[11,"vzip",E,E,0,[[],["v"]]]],"p":[[3,R[170]]]};
searchIndex["glean_preview"]={"doc":R[83],"i":[[3,R[59],R[127],R[84],N,N],[12,"name",E,R[85],0,N],[12,R[86],E,R[87],0,N],[12,R[88],E,R[89],0,N],[12,R[49],E,R[90],0,N],[12,R[91],E,R[92],0,N],[12,R[3],E,R[93],0,N],[3,"Error",E,R[94],N,N],[3,"Glean",E,R[95],N,N],[4,R[61],E,R[96],N,N],[13,"Ping",E,R[97],1,N],[13,R[98],E,R[99],1,N],[13,"User",E,R[100],1,N],[6,"Result",E,R[101],N,N],[3,R[60],E,R[102],N,N],[12,R[103],E,R[104],2,N],[12,R[105],E,R[106],2,N],[12,R[107],E,R[108],2,N],[12,R[109],E,R[110],2,N],[12,R[111],E,R[112],2,N],[12,"channel",E,"The release channel the application is on, if known.",2,N],[3,R[168],E,"Metrics included in every ping as `client_info`.",N,N],[12,"app_build",E,"The build identifier generated by the CI system (e.g.…",3,N],[12,"app_display_version",E,"The user visible version string (e.g. \"1.0.3\").",3,N],[5,"initialize",E,R[30],N,[[[R[31]],["clientinfometrics"]],[R[29]]]],[5,R[113],E,R[114],N,[[["bool"]],["bool"]]],[5,R[115],E,R[116],N,[[],["bool"]]],[5,R[117],E,R[118],N,[[[R[26]]]]],[5,R[119],E,R[120],N,[[[R[26]]],["bool"]]],[5,R[121],E,R[122],N,[[["str"]],["bool"]]],[5,R[123],E,"Collect and submit multiple pings by name for eventual…",N,[[],["bool"]]],[11,"unknown",E,"Create the client info with dummy values for all.",3,[[],["self"]]],[0,"metrics",E,R[124],N,N],[3,R[63],R[129],R[125],N,N],[11,"new",E,R[126],4,[[["into",[R[0]]],[R[0]],["bool"]],["self"]]],[11,"submit",E,"Submit the ping.",4,[[["self"]],["bool"]]],[11,"into",R[127],E,0,[[],[U]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[37],E,E,0,[[["self"]],[T]]],[11,R[38],E,E,0,[[["self"],[T]]]],[11,R[34],E,E,0,[[[U]],[R[29]]]],[11,R[35],E,E,0,[[],[R[29]]]],[11,R[40],E,E,0,[[["self"]],[T]]],[11,R[36],E,E,0,[[["self"]],[T]]],[11,R[39],E,E,0,[[["self"]],[R[41]]]],[11,"vzip",E,E,0,[[],["v"]]],[11,"into",E,E,5,[[],[U]]],[11,"from",E,E,5,[[[T]],[T]]],[11,R[128],E,E,5,[[["self"]],[R[0]]]],[11,R[34],E,E,5,[[[U]],[R[29]]]],[11,R[35],E,E,5,[[],[R[29]]]],[11,R[40],E,E,5,[[["self"]],[T]]],[11,R[36],E,E,5,[[["self"]],[T]]],[11,R[39],E,E,5,[[["self"]],[R[41]]]],[11,"as_fail",E,E,5,[[["self"]],["fail"]]],[11,"vzip",E,E,5,[[],["v"]]],[11,"into",E,E,6,[[],[U]]],[11,"from",E,E,6,[[[T]],[T]]],[11,R[34],E,E,6,[[[U]],[R[29]]]],[11,R[35],E,E,6,[[],[R[29]]]],[11,R[40],E,E,6,[[["self"]],[T]]],[11,R[36],E,E,6,[[["self"]],[T]]],[11,R[39],E,E,6,[[["self"]],[R[41]]]],[11,"vzip",E,E,6,[[],["v"]]],[11,"into",E,E,1,[[],[U]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[37],E,E,1,[[["self"]],[T]]],[11,R[38],E,E,1,[[["self"],[T]]]],[11,R[34],E,E,1,[[[U]],[R[29]]]],[11,R[35],E,E,1,[[],[R[29]]]],[11,R[40],E,E,1,[[["self"]],[T]]],[11,R[36],E,E,1,[[["self"]],[T]]],[11,R[39],E,E,1,[[["self"]],[R[41]]]],[11,"vzip",E,E,1,[[],["v"]]],[11,"into",E,E,2,[[],[U]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[37],E,E,2,[[["self"]],[T]]],[11,R[38],E,E,2,[[["self"],[T]]]],[11,R[34],E,E,2,[[[U]],[R[29]]]],[11,R[35],E,E,2,[[],[R[29]]]],[11,R[40],E,E,2,[[["self"]],[T]]],[11,R[36],E,E,2,[[["self"]],[T]]],[11,R[39],E,E,2,[[["self"]],[R[41]]]],[11,"vzip",E,E,2,[[],["v"]]],[11,"into",E,E,3,[[],[U]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[34],E,E,3,[[[U]],[R[29]]]],[11,R[35],E,E,3,[[],[R[29]]]],[11,R[40],E,E,3,[[["self"]],[T]]],[11,R[36],E,E,3,[[["self"]],[T]]],[11,R[39],E,E,3,[[["self"]],[R[41]]]],[11,"vzip",E,E,3,[[],["v"]]],[11,"into",R[129],E,4,[[],[U]]],[11,"from",E,E,4,[[[T]],[T]]],[11,R[37],E,E,4,[[["self"]],[T]]],[11,R[38],E,E,4,[[["self"],[T]]]],[11,R[34],E,E,4,[[[U]],[R[29]]]],[11,R[35],E,E,4,[[],[R[29]]]],[11,R[40],E,E,4,[[["self"]],[T]]],[11,R[36],E,E,4,[[["self"]],[T]]],[11,R[39],E,E,4,[[["self"]],[R[41]]]],[11,"vzip",E,E,4,[[],["v"]]],[11,"cause",R[127],E,5,[[["self"]],[[R[5],["fail"]],["fail"]]]],[11,R[58],E,E,5,[[["self"]],[[R[5],[R[58]]],[R[58]]]]],[11,"clone",E,E,1,[[["self"]],[R[49]]]],[11,"clone",E,E,0,[[["self"]],[R[1]]]],[11,R[34],E,E,1,[[["i32"]],[[R[49]],[R[29],[R[49]]]]]],[11,"fmt",E,E,5,[[[R[54]],["self"]],[["error"],[R[29],["error"]]]]],[11,R[53],E,E,0,[[],[R[1]]]],[11,R[53],E,E,1,[[],[R[49]]]],[11,"from",E,E,5,[[[R[130]]],["error"]]],[11,"from",E,E,5,[[["error"]],["error"]]],[11,"from",E,E,5,[[["osstring"]],["error"]]],[11,"from",E,E,5,[[["context",[R[48]]],[R[48]]],["error"]]],[11,"from",E,E,5,[[[R[131]]],["error"]]],[11,"from",E,E,5,[[["error"]],["error"]]],[11,"from",E,E,5,[[[R[48]]],["error"]]],[11,"from",E,E,5,[[[R[132]]],["error"]]],[11,"fmt",E,E,5,[[[R[54]],["self"]],[["error"],[R[29],["error"]]]]],[11,"fmt",E,E,1,[[[R[54]],["self"]],[["error"],[R[29],["error"]]]]],[11,"fmt",E,E,0,[[[R[54]],["self"]],[["error"],[R[29],["error"]]]]],[11,"fmt",E,E,6,[[[R[54]],["self"]],[["error"],[R[29],["error"]]]]],[11,"eq",E,E,1,[[[R[49]],["self"]],["bool"]]],[11,"clone",E,E,2,[[["self"]],[R[31]]]],[11,"clone",R[129],E,4,[[["self"]],[R[26]]]],[11,"fmt",R[127],E,2,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",E,E,3,[[["self"],[R[54]]],[R[29]]]],[11,"fmt",R[129],E,4,[[["self"],[R[54]]],[R[29]]]],[11,"new",R[127],R[133],0,[[["a"],["c"],["b"]],[R[1]]]],[11,R[22],E,R[134],0,[[["self"]],["bool"]]],[11,R[135],E,R[136],0,[[["self"]]]],[11,"kind",E,R[137],5,[[["self"]],[R[48]]]],[11,R[138],E,R[139],5,[[],["error"]]],[11,"new",E,R[30],6,[[[R[31]]],[[R[29],[R[4],"error"]],[R[4]],["error"]]]],[11,R[140],E,R[30],6,[[[R[31]],[R[33],[R[0],"i32",R[141]]],["i32"],[R[0]],[R[141]]],[[R[29],[R[4],"error"]],[R[4]],["error"]]]],[11,R[142],E,R[143],6,[[["self"]],["bool"]]],[11,R[113],E,R[114],6,[[["self"],["bool"]],["bool"]]],[11,R[115],E,R[116],6,[[["self"]],["bool"]]],[11,R[144],E,R[145],6,[[["self"]],["str"]]],[11,R[146],E,R[147],6,[[["self"]],["path"]]],[11,"storage",E,R[148],6,[[["self"]],[R[28]]]],[11,R[149],E,R[150],6,[[["self"]],[R[151]]]],[11,R[152],E,R[153],6,[[["self"]],["usize"]]],[11,R[32],E,R[154],6,[[["str"],["self"],["bool"]],[R[0]]]],[11,R[119],E,R[120],6,[[[R[26]],["self"]],[["error"],[R[29],["bool","error"]],["bool"]]]],[11,R[123],E,R[122],6,[[["self"]],["bool"]]],[11,R[121],E,R[155],6,[[["str"],["self"]],[["error"],[R[29],["bool","error"]],["bool"]]]],[11,R[156],E,R[157],6,[[["str"],["self"]],[[R[5],[R[26]]],[R[26]]]]],[11,R[117],E,R[118],6,[[[R[26]],["self"]]]],[11,R[158],E,R[159],6,[[[R[33],[R[0],R[0],R[141]]],[R[5],[R[33]]],[R[0]],["self"]]]],[11,R[160],E,R[161],6,[[[R[0]],["self"]]]],[11,R[162],E,R[163],6,[[["self"]],[["error"],[R[29],["error"]]]]],[11,R[164],E,R[7],6,[[[R[0]],["self"]],["bool"]]],[11,R[165],E,R[7],6,[[[R[0]],["self"]],[[R[5],[R[0]]],[R[0]]]]],[11,R[166],E,R[7],6,[[["self"]]]],[11,R[2],E,R[167],1,[[],["str"]]]],"p":[[3,R[59]],[4,R[61]],[3,R[60]],[3,R[168]],[3,R[63]],[3,"Error"],[3,"Glean"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);