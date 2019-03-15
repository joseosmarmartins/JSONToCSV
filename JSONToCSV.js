toCSV (json) {
  const replacer = (key, value) => value == null ? '' : value
  const header = Object.keys(json[0])
  let csv = json.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
  csv.unshift(header.join(','))
  csv = csv.join('\r\n')

  return csv
}
