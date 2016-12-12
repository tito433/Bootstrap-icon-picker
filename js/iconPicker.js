/*
 * Bootstrap 4 IconPicker - jQuery plugin for Icon selection
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://github.com/titosust/Bootstrap-icon-picker
 *
 * Version:  4.0.0
 *
 */

(function($) {

	function iconPicker(dom,options){

        var settings=$.extend({'icons':'glyphicon','addon':false},options);

		var icons=[];
    	var regx=new RegExp('\\.'+settings.icons+'\\-([^:]*)',"i");
        var $popup=null;

		$.each(document.styleSheets,function(){
			$.each(this.cssRules,function(){
				var kname=this.selectorText, match=regx.exec(kname);
		    	if(match) icons.push(match[1]);
			})
		});
        if(!icons.length) throw "No icons found for "+settings.icons;

		function createUI(){
            $popup=$('<div/>',{
        		css: {'top':$(dom).offset().top+$(dom).outerHeight()+6,
	        		'left':$(dom).offset().left
	        	},class:'iconPicker'
        	});

        	$popup.html('<div class="control"> \
					          <div class="left"><a href="#" class="btn btn-sm" data-dir="-1">&laquo;</a></div> \
					          <div class="right"><a href="#" class="btn btn-sm" data-dir="1">&raquo;</a></div> \
					          <div class="middle"><input type="text" class="search" placeholder="Search" /></div> \
                        </div> \
					    <div class="icons"></div>').appendTo("body");
        	
        	
        	
        	var lastVal="", start_index=0,per_page=30,end_index=start_index+per_page;
        	$(".control .btn",$popup).click(function(e){
                e.preventDefault();
                var dir=$(this).attr("data-dir");
                start_index=start_index+per_page*dir;
                start_index=start_index<0?0:start_index;
                if(start_index+per_page<=210){
                  $(".icons>ul li").each(function(i){
                      if(i>=start_index && i<start_index+per_page){
                         $(this).show();
                      }else{
                        $(this).hide();
                      }
                  });
                }else{
                  start_index=180;
                }
            });
        	
        	$('.control .search',$popup).on("keyup",function(e){
                var val=$(this).val();
                if(val==""){
                    showIcons(icons);
                }else{
                    showIcons(icons.filter(function(item){ 
                        return item.toLowerCase().indexOf(val.toLowerCase())!=-1; 
                    }));
                }
            });  
        	
        	showIcons(icons);
            $(document).mouseup(hideUI);
            
        };
        function showIcons(arrLis){
        	$ul=$("<ul>");
        	for (var i in arrLis) {
        		$ul.append("<li><a href=\"#\" title="+arrLis[i]+"><span class=\""+settings.icons+" "+settings.icons+"-"+arrLis[i]+"\"></span></a></li>");
        	};

        	$(".icons",$popup).html($ul);
        	$(".icons li a",$popup).click(function(e){
        		e.preventDefault();
        		var title=$(this).attr("title");
        		$(dom).val(settings.icons+"-"+title);
        		$popup.hide();
        	});
	    };

        function hideUI(e){
            if (e.target!=dom && 0===$(e.target).closest('.iconPicker').length) {
		        $popup.hide();
		    }
        }
        

        if(dom instanceof HTMLInputElement){
            dom.onfocus=function(){
                if(null===$popup) createUI();
                $popup.show();
            }
        }
        // if(settings.addon){
        //     var adons=$(settings.addon);

        // }
        
	}

    $.fn.iconPicker = function(settings) {
        return this.each(function() {
            return new iconPicker(this,settings);
        });
    }

}(jQuery));