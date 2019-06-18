  // window.addEventListener("load",function(){
    //eventListeners for the button controls:
   // document.getElementById("submit").addEventListener("click",validateAndSubmit,false );	
   //},false); 
   
function validateAndSubmit(){
	
	var profileFirstName = document.getElementById('profileFirstName');
	var profileLastName = document.getElementById('profileLastName');
	var profileNewEmail = document.getElementById('profileNewEmail');
	var profileConfirmNewEmail = document.getElementById('profileConfirmNewEmail');
	//var address = document.getElementById('address');
	//var phoneNumber = document.getElementById('phoneNumber');
	//var coursesCheckBox = document.getElementsByName('coursesSelect');
	var profilePassword = document.getElementById('profilePassword');
	var profileConfirmPassword = document.getElementById('profileConfirmPassword');
	
	if(profileNewEmail == null || profileNewEmail.value.length == 0 ){
		alert("Please enter the email id");

	}else if(profileFirstName == null || profileFirstName.value.length == 0 ){
		alert("Please enter your first name");
	}else if(profileLastName == null || profileLastName.value.length == 0 ){
	alert("Please enter your last name");
	} else if(profileConfirmNewEmail == null || profileConfirmNewEmail.value.length == 0 ){
		alert("Please enter the email id");
	//}else if(address == null || address.value.length == 0 ){
		//alert("Please enter your address");
	//}else if(phoneNumber == null || phoneNumber.value.length == 0 ){
		//alert("Please enter your phone number");
	} else if(profilePassword == null || profilePassword.value.length == 0){
		alert("Please enter your password");
	} else if(profileConfirmPassword == null || profileConfirmPassword.value.length == 0){
		alert("Please enter your password");
	//}else{
		//var courses = "";
		//var phone = phoneNumber.value;
		
		//for(var i=0;i<coursesCheckBox.length;i++){
			//if(coursesCheckBox[i].checked){
				//courses += coursesCheckBox[i].value.concat(",");
			}
		}
		
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var regAlp = /^[A-Za-z ]*$/;
		if(regAlp.test(profileFirstName.value) == false){
			alert("Please enter valid format of first name");
			return;
		}
		
		if(regAlp.test(profileLastName.value) == false){
			alert("Please enter valid format of last name");
			return;
		}

		//if(regAlp.test(phoneNumber.value) == true){
			//alert("Please enter the valid phone number format");
			//return;
		//}
		
		//if((phoneNumber.value.length >= 1 && phoneNumber.value.length < 10) || phoneNumber.value.length > 10){
			//alert("The phone number should be 10 digits");
			//return;
		//}
				
		if(reg.test(profileNewEmail.value) == false){
			alert("Please enter the valid email id");
			return;
		}
		if(reg.test(profileConfirmNewEmail.value) == false){
			alert("Please enter the valid email id");
			return;
		
		//alert(courses);
		//if(courses.length == 0){
		/*	alert("Please choose the course/s you want");
		} else {
			courses = courses.substring(0,courses.length-1);
			var requestHttp = new XMLHttpRequest();
			requestHttp.onreadystatechange = function() {
				if (requestHttp.readyState == 4 && requestHttp.status == 200) {
					alert("You have registered to erudite solutions, Our administration team will contact you");
					emailId.value = "";
					firstName.value = "";
					lastName.value = "";
					address.value = "";
					phoneNumber.value = "";
					password.value = "";
					document.getElementById('check1').checked = false;
					document.getElementById('check2').checked = false;
					document.getElementById('check3').checked = false;
					document.getElementById('check4').checked = false;
					document.getElementById('check5').checked = false;
					document.getElementById('check6').checked = false;
				}*/
			};
	
			requestHttp.open("POST","php/registration.php",true);
			requestHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requestHttp.send("email="+emailId.value+"&firstname="+firstName.value+"&lastname="+lastName.value+"&address="+address.value+
			"&phonenumber="+phoneNumber.value+"&courses="+courses.value+"&password="+password.value);
		}
		
	}
}