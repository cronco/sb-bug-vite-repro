import HelloWorld from './HelloWorld.vue'

/**
 * Init variables
 */

export default {
  component: HelloWorld,
  title: "Components/HelloWorld",
  tags: ['autodocs'],
}

export const Default = () => ({
  render: (args) => ({
    components: { HelloWorld },
    setup() {
      console.log(args, HelloWorld)
      return { args }
    },
    template: `<HelloWorld v-bind="args" />`,
  }),
  args: {
    // errorMessage: 'Something went wrong here',
    // errorSubMessage: 'Please try to contact Yoda for more understanding of the universe',
  },
})
