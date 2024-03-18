import * as Notifications from 'expo-notifications'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,

        shouldPlaySound:true,

        shouldSetBadge:true
    })
})



   export  const handleCallNotifications = async () => {
        const {status} = await Notifications.getPermissionsAsync();

        if (status !== "granted") {
            alert("Você não ligou suas notificações");
            return;
        }

        const token = await Notifications.scheduleNotificationAsync({
            content:{
                title:"Consulta Cancelada",
                body: "Sua consulta foi cancelada"
            },
            trigger:{seconds: 5}
        })
    }


