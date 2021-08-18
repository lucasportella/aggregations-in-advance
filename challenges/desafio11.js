db.trips.aggregate([
  { $group: { _id: { $dayOfWeek: "$startTime" }, total2: { $sum: 1 } } },
  { $project: { diaDaSemana: "$_id", total2: 1, _id: 0 } },
  { $project: { _id: 0, diaDaSemana: 1, total: "$total2" } }, // nunca vi isso, o teste quer que a chave diaDaSemana venha antes da chave total, desrespeitanto totalmente a lei que objetos são desordenados, por isso tive q fazer gambiarra para forçar que o diaDaSemana viesse primeiro
  { $sort: { total: -1 } },
  { $limit: 1 },
]);
