//Giovanni Galvis
//WIA 02/2016

jQuery(function($){ // The jQuery function for super_sized.js
				
				$.supersized({
				
					// Functionality is javascript
					
					slideshow               :   1,			// Slideshow on/off
					autoplay				:	1,			// Slideshow starts playing automatically
					start_slide             :   1,			// Start slide (0 is random)
					stop_loop				:	0,			// Pauses slideshow on last slide
					random					: 	0,			// Randomize slide order (Ignores start slide)
					slide_interval          :   3000,		// Length between transitions, here it is on for 3 seconds.
					transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					
					transition_speed		:	2000,		// Speed of transition is for 2 seconds
					new_window				:	1,			// Image links open in new window/tab
					pause_hover             :   0,			// Pause slideshow on hover
					keyboard_nav            :   1,			// Keyboard navigation on/off
					performance				:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
					image_protect			:	1,			// Disables image dragging and right click with Javascript
															   
					// Size & Position		
									   
					min_width		        :   0,			// Min width allowed (in pixels)
					min_height		        :   0,			// Min height allowed (in pixels)
					vertical_center         :   1,			// Vertically center background
					horizontal_center       :   1,			// Horizontally center background
					fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
					fit_portrait         	:   1,			// Portrait images will not exceed browser height
					fit_landscape			:   0,			// Landscape images will not exceed browser width
															   
					// Components	
											
					slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
					thumb_links				:	1,			// Individual thumb links for each slide
					thumbnail_navigation    :   0,			// Thumbnail navigation
					slides 					:  	[			// Slideshow images from my Instagram account and from Unsplash.com.
														{image : 'https://scontent-mia1-1.cdninstagram.com/t51.2885-15/e35/12750146_1663686100561275_1137113608_n.jpg?ig_cache_key=MTE4Mzc3ODU3OTUzNzk3OTY3NA%3D%3D.2', title : 'Image Credit: Giovanni Galvis', url : 'https://www.instagram.com/p/BBtoFieE-ka/?taken-by=gio.galvis'},
														{image : 'https://images.unsplash.com/reserve/Hxev8VTsTuOJ27thHQdK_DSC_0068.JPG?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=1669848bff161e13b81ce40922ca32d7', title : 'Image Credit: Sarah Crutchfield', url : 'https://unsplash.com/photos/Dq3LFhdmYcw'},  
														{image : 'https://scontent-mia1-1.cdninstagram.com/t51.2885-15/e35/12716921_1175312312513519_385665011_n.jpg', title : 'Image Credit: Giovanni Galvis', url : 'https://www.instagram.com/p/BBykRPXk-la/?taken-by=gio.galvis'},
														{image : 'https://images.unsplash.com/photo-1452274381522-521513015433?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=0a57c428b9ad4ee5966ae76df0a337f9', title : 'Image Credit: Adam Willoughby-Knox', url : 'https://unsplash.com/photos/_snqARKTgoc'},
														{image : 'https://scontent-mia1-1.cdninstagram.com/t51.2885-15/e35/12362109_1513012675666263_2099645366_n.jpg', title : 'Image Credit: Giovanni Galvis', url : 'https://www.instagram.com/p/_dLJhhE-oZ/?taken-by=gio.galvis'},
														{image : 'https://images.unsplash.com/41/EOZpjI3oSqKPNnF2S4Tp_Untitled.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=924e055284f0649f6fb0eee93efee805', title : 'Image Credit: Dogancan Ozturan', url : 'https://unsplash.com/photos/94taEmdowRw'}
														
												],
												
					// Theme Options			   
					progress_bar			:	1,			// Timer for each slide							
					mouse_scrub				:	0
					
				});
		    });