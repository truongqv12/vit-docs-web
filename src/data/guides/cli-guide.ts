export const cliSteps = [
  {
    number: 1,
    title: 'Install Vit CLI',
    command: '$ npm install -g vit-cli',
    note: 'Verify: vit --version',
    color: 'blue'
  },
  {
    number: 2,
    title: 'Initialize Your Project',
    command: '$ vit init my-project',
    note: 'Creates project structure',
    color: 'green'
  },
  {
    number: 3,
    title: 'Start Building',
    command: '$ vit generate component MyComponent',
    note: 'Generate components, pages, or features',
    color: 'purple'
  }
];