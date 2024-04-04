import _ from 'lodash';
export default {
    data:{
        cart: []
    },
    add(item) {
        var busqueda = _.find(this.data.cart, ['id', item.id]);
        // Si no está
        if (typeof busqueda !== 'object') {
            this.data.cart.push({
                id: item.id,
                nombre: item.nombre,
                precio: item.price,
                qty: 1,
            });
        }
    }

}