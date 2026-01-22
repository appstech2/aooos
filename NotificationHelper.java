package com.bhh76.nkjjiuhhh;

import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;

public class NotificationHelper {

// الدالة الأصلية (للتوافق مع الكود القديم)  
public static void showNotification(Context context, String title, String body) {  
    // استخدام نفس CHANNEL_ID من MyApp  
    NotificationCompat.Builder builder = new NotificationCompat.Builder(context, MyApp.CHANNEL_ID)  
            .setSmallIcon(android.R.drawable.ic_dialog_info)  
            .setContentTitle(title)  
            .setContentText(body)  
            .setPriority(NotificationCompat.PRIORITY_HIGH)  
            .setAutoCancel(true);  
      
    NotificationManager manager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);  
    if (manager != null) {  
        manager.notify((int) System.currentTimeMillis(), builder.build());  
    }  
}  
  
// الدالة الجديدة مع PendingIntent  
public static void showNotification(Context context, String title, String message, PendingIntent pendingIntent) {  
    NotificationCompat.Builder builder = new NotificationCompat.Builder(context, MyApp.CHANNEL_ID)  
            .setSmallIcon(android.R.drawable.ic_dialog_info)  
            .setContentTitle(title)  
            .setContentText(message)  
            .setPriority(NotificationCompat.PRIORITY_HIGH)  
            .setContentIntent(pendingIntent) // إضافة الـ Intent  
            .setAutoCancel(true); // إزالة الإشعار عند الضغط عليه  
      
    NotificationManagerCompat notificationManager = NotificationManagerCompat.from(context);  
    notificationManager.notify((int) System.currentTimeMillis(), builder.build());  
}

}