import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'unstuckwoman',

  projectId: '1v0dc0vw',
  dataset: 'dataset_2',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
