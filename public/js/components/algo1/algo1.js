let algo1 = {
    templateUrl: 'js/components/algo1/algo1.html',
    controller: function () {
        'use strict'

        this.$onInit = () => {



            this.name = (friends) => {
                let array = [];
                console.log('name:');

                for (let i = 0; i < array.length; i++) {
                    if (friends[i].length == 4) {
                        array.push(friends[i].length);
                    }
                    return array;
                }
                console.log('bonjour', array);
            }

            this.name(["Ryan", "Kieran", "Mark"]);
            this.name(["Ryan", "Jimmy", "123", "4", "Cool Man"]);
        }
    }
}
export default algo1
