import { program } from 'commander'
import * as fs from 'fs'

function processJson(data: any): any {
  if (Array.isArray(data)) {
    return data.map((item) => processJson(item))
  } else if (typeof data === 'object' && data !== null) {
    const returnValue: any = {}
    const keys = Object.keys(data)
    keys.forEach((key) => {
      if (key === '201' && Object.keys(data[key]).length === 1 && data[key].description === 'Created') return
      returnValue[key] = processJson(data[key])
    })
    if (returnValue.type === 'integer' && returnValue.format === 'int64') {
      returnValue.type = 'string'
      delete returnValue.format
    }
    return returnValue
  } else {
    return data
  }
}

async function main(jsonUrl: string, outputPath = './.next/cache/open-api.json') {
  try {
    const data = await fetch(jsonUrl).then((data) => data.json())
    const returnValue = processJson(data)

    fs.writeFileSync(outputPath, JSON.stringify(returnValue, null, 4), { encoding: 'utf8' })
    console.log(`Processed JSON file has been saved to ${outputPath}`)
  } catch (error) {
    console.error('Error fetching or processing the JSON file:', error)
  }
}

program
  .version('1.0.0')
  .description('Download and process JSON from a given URL')
  .argument('<url>', 'URL to fetch JSON from')
  .argument('[outputPath]', 'Path to save the processed JSON (optional)')
  .action(main)

program.parse(process.argv)
