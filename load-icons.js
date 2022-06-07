const fs = require('fs')
const { execSync } = require('child_process')

const iconsComponentDir = './src/icons'

const getReactCode = (componentName, svg) => `
import React from 'react'
import { IconConfig } from '../types'
const ${componentName}: React.FC<IconConfig> = ({
    size = 24,
    color = '#000',
    weight = 1.5
}) => {
    return (
        ${svg}
    )
}

export default ${componentName}
`

let importFileContent = ''
const exportArray = []

const getImportStatement = (moduleName) =>
    `export {default as ${moduleName}} from './${moduleName}'`

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const getReactFilename = (filename) => {
    const filenameWithoutExt = filename.split('.svg')[0]
    reactFilename = filenameWithoutExt
        .split(',')
        .map((str) => capitalize(str))
        .join('')
        .split('-')
        .map((str) => capitalize(str))
        .join('')
        .split(' ')
        .map((str) => capitalize(str))
        .join('')
    return reactFilename
}

const makeDynamic = (svgString) => {
    const svgStringWithReactProps = svgString
        .replace(/stroke-width/gi, 'strokeWidth')
        .replace(/stroke-linecap/gi, 'strokeLinecap')
        .replace(/stroke-linejoin/gi, 'strokeLinejoin')
        .replace(/stroke-dasharray/gi, 'strokeDasharray')
        .replace(/fill-opacity/gi, 'fillOpacity')
        .replace(/stroke-opacity/gi, 'strokeOpacity')
        .replace(/clip-rule/gi, 'clipRule')
        .replace(/fill-rule/gi, 'fillRule')
        .replace(/fill-opacity/gi, 'fillOpacity')
    if (!svgStringWithReactProps.includes('<mask id=')) {
        return svgStringWithReactProps
            .replace(/width="24"/gi, 'width={`${size || 24}`}')
            .replace(/height="24"/gi, 'height={`${size || 24}`}')
            .replace(/fill="white"/gi, 'fill={color||white}')
            .replace(/fill="#fff"/gi, 'fill={color||white}')
            .replace(/fill="black"/gi, 'fill={color}')
            .replace(/fill="#000"/gi, 'fill={color}')
            .replace(/stroke="black"/gi, 'stroke={color}')
            .replace(/stroke="white"/gi, 'stroke={`${color || colors.white}`}')
            .replace(/stroke="#080808"/gi, 'stroke={color}')
            .replace(/strokeWidth="2"/gi, 'strokeWidth={`${weight || 1.5}`}')
            .replace(/strokeWidth="1.5"/gi, 'strokeWidth={`${weight || 1.5}`}')
    } else {
        return svgStringWithReactProps
            .replace(/fill="white" mask=/gi, 'fill={`${colors.primary}`} mask=')
            .replace(/width="24"/gi, 'width={`${size || 24}`}')
            .replace(/height="24"/gi, 'height={`${size || 24}`}')
    }
}

function copyToReactFile(filepath) {
    try {
        const svgContent = fs.readFileSync(filepath)
        const componentName = getReactFilename(filepath.split('/').pop())
        const componentFilepath = `${iconsComponentDir}/${componentName}.tsx`
        const reactCode = getReactCode(
            componentName,
            makeDynamic(svgContent.toString())
        )
        fs.writeFileSync(componentFilepath, reactCode, {
            flag: 'w'
        })
        exportArray.push(componentName)
    } catch (e) {
        console.log(e)
    }
}

async function ls(path) {
    let count = 0
    exportArray.push(...['Github', 'Figma'])
    // log export array
    console.log(exportArray)
    const dir = await fs.promises.opendir(path)
    for await (const dirent of dir) {
        if (dirent.name === '.DS_Store') {
            console.log('no ds')
            continue
        }
        count++
        console.log(count, ': copying to react file', dirent.name)
        copyToReactFile(`${path}/${dirent.name}`)
    }

    console.log('\n\n::: done writing icons to react files :::\n\n')
    let exportCount = 0
    exportArray.forEach((moduleName) => {
        importFileContent += `\n${getImportStatement(moduleName)}`
        exportCount++
    })
    console.log(`\n\n::: ${exportCount} icons exported :::\n\n`)
    fs.promises.writeFile(`${iconsComponentDir}/index.ts`, importFileContent)
    console.log(`\n\n::: running tests :::\n\n`)
    // test will involve puppeteer perhaps in a github job ... or maybe in cloud build
    // so the idea will be that once precious commits and pushes the commit
    // the push should trigger something... that could be a cloudbuild and that would involve
    // pulling the basicons-ui repo and reinstalling react-basicons.. opening it in puppeteer..
    // then testing the icon count on the page
    execSync('npm run format --silent', { stdio: 'inherit' })
    console.log('\n\n::: done formatting :::\n\n')
}

ls('./svg').catch(console.error)

// @todo: create new zip in public
// @todo: commit hook to rerun this script whenever icon changes
