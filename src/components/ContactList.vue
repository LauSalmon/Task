<script>
import ContactDataService from '../service/ContactDataService.js';

export default {
    name : 'contact-list',

    data (){
        return {
            contacts : [],
            currentIndex : -1,
        }
    },

    methods : {
        onDataChange(items) {
            let _contacts = [];
            items.forEach(item=>{
                let key = item.key;
                let data = item.val();
                _contacts.push({
                    key : key,
                    name : data.name,
                    phone : data.phone,
                });
                this.contacts = _contacts;
            })
        },
        refreshList(){
            this.currentContact = null;
            this.currentIndex = -1;
        },
        setContactActive(contact, index){
            this.currentContact = contact;
            this.currentIndex = index;
        },
        removeAllContacts(){
            ContactDataService.deleteAll().then(()=>{
                this.refreshList();
                console.log("on refresh");
            }).catch((error)=>{
                console.log(error);
            });
        }
    },
    mounted(){
        ContactDataService.getAll().on('value', this.onDataChange);
    },
    beforeUnmount(){
        ContactDataService.getAll().off('value', this.onDataChange);
    }
}
</script>

<template>
    <div class="container list row m-auto">
        <h1>Liste des Contacts</h1>
        <div class="col-md-6">
            <ul class="list-group">
                <li v-for="(unContact, index) in contacts" class="list-group-item" :class="{ active: index === currentIndex }" :key="index" @click="setContactActive(unContact, index)">Nom : {{unContact.name}} - N° de téléphone : {{unContact.phone }}</li>
            </ul>
            <button class="m-3 btn btn-sm btn-danger" @click="removeAllContacts">Tout Supprimer</button>
        </div>
        <!--<div class="col-md-6">
            <div v-if="currentArticle">
                <article-details :article="currentArticle" @refreshList="refreshList"></article-details>
            </div>
            <div v-else>
                <p>Veuillez selectionner un article</p>
            </div>
        </div> -->
    </div>
</template>