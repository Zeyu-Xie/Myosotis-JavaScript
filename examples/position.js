// Check wether the explorer supports Geolocation
if ("geolocation" in navigator) {
    // Get current position
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position)
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var altitude = position.coords.altitude;
        console.log("纬度：" + latitude);
        console.log("经度：" + longitude);
        console.log("海拔：" + altitude);
    }, function (error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                console.error("用户拒绝了位置请求");
                break;
            case error.POSITION_UNAVAILABLE:
                console.error("位置信息不可用");
                break;
            case error.TIMEOUT:
                console.error("获取位置超时");
                break;
            case error.UNKNOWN_ERROR:
                console.error("未知错误");
                break;
        }
    });
} else {
    console.error("The explorer doesn't support Geolocation");
}