db.trips.aggregate([
  { $match:
        { birthYear: { $exists: 1, $ne: "" } },
  },
  { $project: {
    _id: 0,
    treated_birthday: { $toInt: "$birthYear" } } },
  { $group: {
    _id: null,
    maiorAnoNascimento: { $max: "$treated_birthday" },
    menorAnoNascimento: { $min: "$treated_birthday" },
  } },
  { $project: { maiorAnoNascimento: 1, menorAnoNascimento: 1, _id: 0 } },
]);
