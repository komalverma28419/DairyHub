import milkDelivery from './../assets/images/milkDelivery.png'
import deliveryBoy from './../assets/images/deliveryBoy.png'
import dairyFarm from './../assets/images/dairyFarm.png'
import milkCollection from './../assets/images/milkCollection.png'
import appStore from '../assets/images/appStore.png'
import playStore from '../assets/images/playStore.png'

const description =  ['Automating the daily milk collection process is the first step towards the whole rural milk revolution. The Milk Collection System still  an important point on which the milk supply chain management maximizes the milk value and benefits.'
            , 'Milk supply chain management maximizes the milk value and benefits. The daily milk collection process is the first step towards the whole rural milk revolution. '
        ]
export const recImage = [appStore,playStore]

export const brandData = [
    {
        id: 1,
        tabName : 'Milk delivery',
        title : 'Milk delivery App',
        description ,
        image : milkDelivery
    },
    {
        id: 2,
        tabName : 'Delivery boy',
        title : 'Delivery boy App',
        description ,
        image : deliveryBoy
    },
    {
        id: 3,
        tabName : 'Dairy Farm',
        title : 'Dairy Farmer App',
        description ,
        image : dairyFarm
    },
    {
        id: 4,
        tabName : 'Milk Collection ',
        title : 'Milk Collection Center App',
        description ,
        image : milkCollection
    }
    
]

