var Message = cc.Layer.extend({
	ctor : function(type) {
		this._super();
		
		return true;
	},
	// 发送消息到屏幕
	send: function(txtMsg, interval) {
		var msg = cc.LabelTTF.create(txtMsg, s_font1, s_fontsize2);
		
		msg.setColor(gc_color5);
//		msg.setPosition(cc.p(gc_size.width / 2, gc_size.height / 2));
		
		// 指定interval参数则淡出处理
		if (interval > 0) {
			action = cc.FadeOut.create(interval);
			msg.runAction(action);
		}
		
		// 停止所有动画
		for (var i = 0; i < this.getChildrenCount(); i++) {
			this.getChildren()[i].stopAllActions();
		}
		this.stopAllActions();
		
		this.removeAllChildren();
		this.addChild(msg);
	}
});