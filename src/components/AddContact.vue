<script>
import ContactDataService from '../service/ContactDataService.js';

export default {
    name : 'add-contact',
    data (){
        return {
            submitted : false,
            contact : {
                name : "",
                phone : "",
            }
        }
    },
    methods : {
        saveContact() {
            let data = {
                name : this.contact.name,
                phone : this.contact.phone
            };
            ContactDataService.create(data).then(()=>{
                this.submitted = true;
                console.log("contact crée");
            }).catch(error=>{
                console.log(error);
            });
        },
        newContact() {
            this.submitted = false,
            this.contact = {
                name : "",
                phone : "",
            }
        }
    }
}

</script>

<template>
    <h1>Ajouter un Contact</h1>
    <input class="m-1" placeholder="name" v-model="contact.name">
    <input class="m-1" placeholder="Phone" v-model="contact.phone">
    <button type="button" class="m-1 btn btn-outline-success" @click.prevent="saveContact" >Ajouter le contact</button>
</template>