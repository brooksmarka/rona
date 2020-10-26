module.exports = {
    parseNumber:function(rawNumber) {
        // clean it and return
        return rawNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    parseDate:function(zuluDate){
        //clean it and return 
            var date = new Date(zuluDate);
            return date.toString() // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"
    }
}