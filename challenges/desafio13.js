db.trips.aggregate([
  { $addFields: { startSimpleDate: { $dateToString: { format: "%d-%m-%Y", date: "$startTime" } } } },
  { $match: { startSimpleDate: "10-03-2016" } },
  { $group: { _id: null, media: { $avg: { $subtract: ["$stopTime", "$startTime"] } } } },
  { $project: { _id: 0, duracaoMediaEmMinutos: { $ceil: { $divide: ["$media", 1000 * 60] } } } },
]);
// https://stackoverflow.com/questions/38039705/convert-iso-date-to-yyyy-mm-dd-format
