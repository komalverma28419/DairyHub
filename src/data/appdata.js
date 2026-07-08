import deliveryApp from '../assets/images/deliveryApp.png'
import milkDeliveryApp from '../assets/images/milkDeliveryApp.png'
import farmApp from '../assets/images/farmApp.png'
import collectionCentreApp from '../assets/images/collectionCentreApp.png'



export const apps = [
    {
        id: 1,
        title: "Delivery boy App",
        description: ["Automating the daily milk collection process is the first empowering step towards the whole rural milk revolution. The AMCS (Automatic Milk Collection System) still remains an important initial point on which the milk supply chain management maximizes the milk value,usages, and benefits.",
            "The app also supports digital payment collection, customer notifications, and order tracking."],
        image: deliveryApp,
        bgColor: "#FF8181"
    },
    {
        id: 2,
        title: "Milk Delivery App",
        description: ["The Milk Delivery App allows customers to conveniently manage their daily milk subscriptions, place one-time orders, and monitor delivery schedules. Users can securely make online payments, download invoices, view order history, and receive instant notifications, creating a seamless and reliable milk delivery experience.",
            "Customers can securely make online payments, access invoices, track deliveries, and receive instant notifications."],
        image: milkDeliveryApp,
        bgColor: "#E87070"
    },
    {
        id: 3,
        title: "Dairy Farm App",
        description: ["The Dairy Farm App enables farmers to efficiently manage livestock, milk production, feeding schedules, breeding records, and animal health information from a single platform. With detailed reports and real-time insights, it helps improve productivity, reduce manual work.",
            "Detailed reports, performance analytics, and real-time insights allow farmers to make informed decisions and maintain better control over every aspect of farm management."],
        image: farmApp,
        bgColor: "#52985D"
    },
    {
        id: 4,
        title: "Milk Collection Centre App",
        description: ["The Milk Collection Centre App simplifies the process of collecting milk from farmers by recording daily collections, measuring milk quality, generating digital receipts, and maintaining transparent payment records. It ensures accurate data management, faster transactions, and improved coordination between farmers and collection centers.",
            "It ensures transparency in payments, reduces manual errors, and improves coordination between farmers and collection centers."],
        image: collectionCentreApp,
        bgColor: "#6C8D71"
    }
]