$(function(){
	var loginInput = $('.login_inputbox')
	function getShow(){
		loginInput.on('click', function(e) {
			var $this= $(this);
			$this.attr('placeholder','');
		});
	}
	function getValue(){
		loginInput.on('keydown', function(e) {
			var $this= $(this);
			var ipuntVal = $this.val();	
			console.log(ipuntVal);
		});
	}
	getShow()
	getValue()
})