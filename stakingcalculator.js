var slider = document.getElementById("myRange");
		   var output = document.getElementById("demo");
		   output.innerHTML = addCommas(slider.value);
		   slider.oninput = function() {
		   output.innerHTML = addCommas(this.value);
		   currentValue = this.value;
		   $("#rangenumber").val(this.value);
		   dailyCUDOS = $(this).val()*0.00082;
		   $(".dailyCUDOS").text(dailyCUDOS.toFixed(2));
		   MonthlyCUDOS =  dailyCUDOS*30.49; 
		   $(".MonthlyCUDOS").text(MonthlyCUDOS.toFixed(2));
	       v = 365.8536585365854*dailyCUDOS;
		   $(".yearlyCUDOS").text(v.toFixed(2));
		   
		     currencyType =  $(".currency-con.active").data("currency")
		  
			if(currencyType == "USD")
			{  
			    dailyCurrAvg = 0.001975;
				MonthlyCurrAvg = 0.0006;
				yearlyCurrAvg = 0.0072;
		    	CudosLivePrice = CudosLiveDPrice;
				  
			}
			else
			{   dailyCurrAvg = 0.001645;       
				MonthlyCurrAvg = 0.0005;
				yearlyCurrAvg = 0.006;
				CudosLivePrice = CudosLiveEUPrice;
			}
			  
			  
			  dailydolorRate = dailyCUDOS*parseFloat(CudosLivePrice);
			  MonthlyDolorM = MonthlyCUDOS*parseFloat(CudosLivePrice);
			  yeardolorM =  v*parseFloat(CudosLivePrice);
			  
		      $(".dailydolorRate").text(dailydolorRate.toFixed(2));
		      $(".MonthlyDolorM").text(MonthlyDolorM.toFixed(2));
		      $(".yeardolorM").text(yeardolorM.toFixed(2));
		}
		
		$(".currency-con").click(function(){
		  currentValue = $("#myRange").val();
		  $(".currency-con").removeClass('active');
		  $(this).addClass('active');
		  
			currencyType = $(this).data("currency");

			if(currencyType == "USD")
			{
				 MonthlyCurrAvg = 0.0006;
				 yearlyCurrAvg = 0.0072;
				 dailyCurrAvg = 0.001975;
				 $('.currencytype').text("$");
				 CudosLivePrice = CudosLiveDPrice;
			}
			else 
			{       
				dailyCurrAvg = 0.001645;   
				MonthlyCurrAvg = 0.0005;
				yearlyCurrAvg = 0.006;
				$('.currencytype').text("€");
				CudosLivePrice = CudosLiveEUPrice;
			}
		          dailydolorRate = dailyCUDOS*parseFloat(CudosLivePrice);
				  MonthlyDolorM = MonthlyCUDOS*parseFloat(CudosLivePrice);
				  yeardolorM =  v*parseFloat(CudosLivePrice);
				  
		        $(".dailydolorRate").text(dailydolorRate.toFixed(2));
				$(".MonthlyDolorM").text(MonthlyDolorM.toFixed(2));
				$(".yeardolorM").text(yeardolorM.toFixed(2));
		  
		});
		
	function addCommas(nStr)
	{
		nStr += '';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;
	}
	$("#rangenumber").keyup(function(){
	 if($(this).val() > 2000000 || $(this).val() < 1000)
	   {
           $("#rangenumber").css("border-color", "red");
		   if($(this).val() > 2000000)
		   {
		     $("#errormsg").text("Maximum amount is 2M");
		   }
		   else
		   {
		     $("#errormsg").text("Minimum amount is 1k");
		   }
	   }
	   else
	   {
	        $("#rangenumber").css("border-color", "#04c0df");
		    $("#myRange").val($(this).val());
		    currentValue = $(this).val();
		    $("#demo").text(addCommas($(this).val()));
			
		    dailyCUDOS = $(this).val()*0.00082;
		    $(".dailyCUDOS").text(dailyCUDOS.toFixed(2));
		    MonthlyCUDOS =  dailyCUDOS*30.49; 
		    $(".MonthlyCUDOS").text(MonthlyCUDOS.toFixed(2));
		    $("#errormsg").text('');
		    v = 365.853*dailyCUDOS;
			$(".yearlyCUDOS").text(v.toFixed(2));

			 currencyType =  $("#select option:selected").data("currency")
		  
			if(currencyType == "USD")
			{  
			    dailyCurrAvg = 0.001975;
				MonthlyCurrAvg = 0.0006;
				yearlyCurrAvg = 0.0072;
				CudosLivePrice = CudosLiveDPrice;
			}
			else
			{   dailyCurrAvg = 0.001645;       
				MonthlyCurrAvg = 0.0005;
				yearlyCurrAvg = 0.006;
				CudosLivePrice = CudosLiveEUPrice;
			}
			
			      dailydolorRate = dailyCUDOS*parseFloat(CudosLivePrice);
				  MonthlyDolorM = MonthlyCUDOS*parseFloat(CudosLivePrice);
				  yeardolorM =  v*parseFloat(CudosLivePrice);
		          $(".dailydolorRate").text(dailydolorRate.toFixed(2));
		          $(".MonthlyDolorM").text(MonthlyDolorM.toFixed(2));
		          $(".yeardolorM").text(yeardolorM.toFixed(2));
	   }
	   console.log("Selected Currency:", selectedCurrency);

    });
	
    $(document ).ready(function() { 
        dailyCUDOS = 1000*0.00082;
		CudosLivePrice = CudosLiveDPrice;
		dailydolorRate = dailyCUDOS*parseFloat(CudosLivePrice);
		MonthlyCUDOS =  dailyCUDOS*30.49;
		MonthlyDolorM = MonthlyCUDOS*parseFloat(CudosLivePrice);
		v = 365.853*dailyCUDOS;
        yeardolorM =  v*parseFloat(CudosLivePrice);
		$(".dailydolorRate").text(dailydolorRate.toFixed(2));
		$(".MonthlyDolorM").text(MonthlyDolorM.toFixed(2));
		$(".yeardolorM").text(yeardolorM.toFixed(2));
    });
