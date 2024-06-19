import firebase from '../firebase';

// ICI c'est une REF à l'endroit de notre """TABLE""" articles dans la BDD
// quand on utilise la constante db on sais qu'on vise quelque chose dans la table contacts
const db  = firebase.ref("/contacts");

class ContactDataService{
    getAll() {
        return db;
    };
    create(contact) {
        return db.push(contact);
    };
    update(key, value) {
        return db.child(key).update(value);
    };
    delete(key){
        return db.child(key).remove();
    };
    deleteAll(){
        return db.remove();
    }

};

export default new ContactDataService();