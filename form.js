function register()
{

		var name = document.getElementById('email').value;
		var password = document.getElementById('Password1').value;

		var msg = document.getElementById('msg');
	 

		if(name == "" || password == "")
		{
			alert("please fill out all the credential");
		}
			else
			{
			// find whether name is number or email
	
			var letters = /^[0-9a-zA-Z]+$/;
			if(inputtxt.value.match(letters))
			{
			alert(name+'is your login id');
			document.form1.text1.focus();
			return true;
			}
}		
				
			{
				alert("SUBMITTED...")
			}
	
}
document.getElementById('regdform').addEventListener('submit', register , false);

	
