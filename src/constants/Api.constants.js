export const API_RM = {
    URL: "https://rickandmortyapi.com/api",
    URL20: "https://rickandmortyapi.com/api?page=1",

    CHARACTERS: function(){
        return `${this.URL}/character`
    },

    CHARACTER_BY_ID: function(id){
        return `${this.URL}/character/${id}`
    }
}