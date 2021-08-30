Vue.config.devtools = true;  // Browser debug (VueJs)

new Vue(    
    {
        el: '#app',
        data: {
            discs: []
        },
        created() { 
            
            axios.get('http://localhost:8888/php-ajax-dischi/backend/api.php')
                .then((response) => {
                    this.discs = response.data;
            })   

        }

    }
);