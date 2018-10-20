if(!Array.prototype.format){
    String.prototype.format = function() {
        a = this;
        for (k in arguments) {

            a = a.replace( new RegExp("\\{" + k + "\\}",'gm'), arguments[k])
        }
        return a
    }
}