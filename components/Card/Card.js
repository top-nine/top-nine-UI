
class Card {
    constructor(element){
        this.element = element
        this.name = element.name
        this.picture = element.picture
        this.role = element.role
    };

}

const team = [
    {id:1, name:"Brad Mortenson", role:"Team Lead", picture:"../../img/Brad.png"},
    {id:2, name:"Christopher Riffle", role:"Front End Developer", picture:"../../img/Chris.png"},    
    {id:3, name:"Juru Mugenze", role:"Back End Developer", picture:"../../img/Juru.png"},    
    {id:4, name:"Marcus Kwan", role:"UI Developer", picture:"../../img/Marcus.png"},    
    {id:5, name:"Jean Lafontant", role:"UI Developer", picture:"../../img/Jean.png"},    
]

team.forEach(dev => new Card(dev));