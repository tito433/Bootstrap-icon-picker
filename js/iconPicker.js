/*
 * Bootstrap 4 IconPicker - jQuery plugin for Icon selection
 *
 * Copyright (c) 20013 A. K. M. Rezaul Karim<titosust@gmail.com>
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

	function iconPicker($element,klass,opt){
		var icons=[];
    	var regx=new RegExp('\\.'+klass+'\\-([^:]*)',"i");
		$.each(document.styleSheets,function(){
			$.each(this.cssRules,function(){
				var kname=this.selectorText, match=regx.exec(kname);
		    	if(match) icons.push(match[1]);
			})
		});

		this.createUI=function(){
        	this.$popup=$('<div/>',{
        		css: {'top':$element.offset().top+$element.outerHeight()+6,
	        		'left':$element.offset().left
	        	},class:'icon-popup'
        	});

        	this.$popup.html('<div class="ip-control"> \
					          <div class="left"><a href="#" class="btn btn-sm" data-dir="-1">&laquo;</a></div> \
					          <div class="right"><a href="#" class="btn btn-sm" data-dir="1">&raquo;</a></div> \
					          <div class="middle"><input type="text" class="ip-search" placeholder="Search" /></div> \
                              </div> \
					           <div class="icon-list"></div>').appendTo("body");
        	
        	
        	this.$popup.addClass('dropdown-menu').show();

        	var lastVal="", start_index=0,per_page=30,end_index=start_index+per_page;
        	$(".ip-control .btn",this.$popup).click(function(e){
                e.stopPropagation();
                var dir=$(this).attr("data-dir");
                start_index=start_index+per_page*dir;
                start_index=start_index<0?0:start_index;
                if(start_index+per_page<=210){
                  $.each($(".icon-list>ul li"),function(i){
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
        	
        	$('.ip-control .ip-search',this.$popup).on("keyup",function(e){
                if(lastVal!=$(this).val()){
                    lastVal=$(this).val();
                    if(lastVal==""){
                    	showList(icons);
                    }else{
                    	showList($element, $(icons)
						        .map(function(i,v){ 
							            if(v.toLowerCase().indexOf(lastVal.toLowerCase())!=-1){return v} 
							        }).get());
					}
                    
                }
            });  
        	$(document).mouseup(this.removeUI.bind(this));
        	this.showList(icons);
        };
        this.showList=function(arrLis){
        	$ul=$("<ul>");
        	
        	for (var i in arrLis) {
        		$ul.append("<li><a href=\"#\" title="+arrLis[i]+"><span class=\""+klass+" "+klass+"-"+arrLis[i]+"\"></span></a></li>");
        	};

        	$(".icon-list",this.$popup).html($ul);
        	$(".icon-list li a",this.$popup).click(function(e){
        		e.preventDefault();
        		var title=$(this).attr("title");
        		$element.val("glyphicon glyphicon-"+title);
        		removeInstance();
        	});
	    };

        this.removeUI=function(e){
        	if (this.$popup && !$(e.target).closest('.icon-popup')) {
		        this.$popup.remove();
		    }
        }
        
        $element.unbind('click').bind('click',this.createUI.bind(this));
        this.createUI();
	}

    $.fn.iconPicker = function(klass) {
    	var settings=$.extend({},arguments[1]?arguments[1]:{});
        return this.each( function() {
        	return new iconPicker($(this),klass,settings);
        });
    }

}(jQuery));