import {defineStore} from 'pinia'

export let useTeamStore = defineStore('team',{
  state: () => ({
    name: '',
    spots: 0,
    members: [],
  }),

  actions:{
    //using normal function
    // fill(){
    //   import('@/team.json').then(r => {
    //     console.log(r.default)
    //
    //     //let data = r.default
    //
    //     //method 1 for manipulating state value
    //     // this.name = data.name
    //     // this.spots = data.spots
    //     // this.members = data.members
    //
    //     //method 2 for manipulating state value
    //     // this.$patch({
    //     //   name:data.name,
    //     //   spots:data.spots,
    //     //   members:data.members,
    //     // })
    //
    //     //method 3 for manipulating state value
    //
    //     this.$state = r.default
    //   })
    // }

    //using async function
    async fill(){
      let r = await import('@/team.json')
      this.$state = r.default
    },

    grow(spots){
      this.spots = spots
    }
  },

  getters:{
    spotsRemaining(){
      return this.spots - this.members.length
    }
  }
});