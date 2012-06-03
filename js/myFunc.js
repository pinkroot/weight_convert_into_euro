function submitFunc() {
  var weight = $("#weight").val();
  var glam = weight * 1000;
  var coin_weight = 7.5;
  var euro_value = 96.85;
  
  var convert_coin = glam / coin_weight;
  
  convert_coin = Math.round(convert_coin * 100) / 100;
  
  var value = convert_coin * euro_value;
  
  value = Math.round(value * 100) / 100;

	var str = "私の体重を1ユーロコインに換算すると" + convert_coin + "ユーロ分で、日本円にして" + value + "円の価値があります。";
	
	$("#str").html(str + "<a href=\"https://twitter.com/intent/tweet?text=" + str + " http://shun-ichiro.com/euro/ @pinkroot\" target=\"_blank\">" + "<img src=\"./img/tweet.gif\" alt=\"ツイートする\">" + "</a>");

}

// http://d.hatena.ne.jp/kokoromo/20090113/1231828845 より
function zentohan(obj){
	if(typeof(obj.value)!="string")return false;
	var han= '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@-.,:';
	var zen= '１２３４５６７８９０ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ＠－．，：';
	var word = obj.value;
	for(i=0;i<zen.length;i++){
		var regex = new RegExp(zen[i],"gm");
		word = word.replace(regex,han[i]);
	}
	obj.value = word;
}