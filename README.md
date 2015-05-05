# compass-sprite
A mixin for creating retina sprites by compass

##项目结构
		-- css 生成的css
		-- images 样式图片
			|--- sprites 需要 sprites的图片
				|-- icons 普通大小图片
				|-- icons2x 两杯大小图片
		-- sass	存放sass
			|-- default-auto-sprites.scss compass自带输出所有sprites
			|-- default-manual-sprites.scss compass调用单个sprites
			|-- retina-auto-sprites.scss 兼容metina，输出所有sprites
			|-- retina-manual-sprites.scss 兼容metina，调用单个sprites 的 mixin


##常用的配置参数和Mixin
###自动合并


			/* 以下为全局控制变量 */
			$<map>-repeat: no-repeat;
			$<map>-position: 0%;
			$<map>-layout: vertical; /* 排列方式：horizontal-水平 or vertical-垂直 or diagonal-对角线 or smart-智能 */
			$<map>-sprite-dimensions: false; /* 生成的foldername-xxx类是否包含width和height属性 */
			$<map>-sprite-base-class: ".spritename";
			$<map>-spacing: 0; /* 源图片之间的间距 */
			$<map>-clean-up: true; /* 生成新的sprite图时是否删除旧图 */
			$disable-magic-sprite-selectors: false;
			/* 输出css中是否包含hover、target、active状态，若为true，对于图add.png和add_hover.png则会输出
			.foldername-add:hover, .foldername-add.add_hover, .foldername-add.add-hover { background-position: 0 -20px; }，
			建议设为true，然后对状态类样式进行重写，可减少冗余代码量 */
			$sprite-selectors: hover, target, active !default; /* 定义要用到的状态，默认值为hover, target, active */

			/* 以下为单图控制变量 */
			$<map>-imgname-spacing: 0;
			$<map>-imgname-repeat: no-repeat;
			$<map>-imgname-position: 100%;
			
###手动合并
		$icons: sprite-map("foldername/*.png", $layout:vertical, $spacing: 0, 		$foldername-imgname-spacing: 0, $repeat: no-repeat, $position: 0%);
		@include sprites($icons,sprite-names($icons),[$base-class : false],[$dimensions : false]); 
		/* $dimensions控制是否输出width和height，对于所有大小不一的图片sprite非常有用 */
		/* 手动合成时，当$layout:horizontal时
		未设定$spacing时，$foldername-imgname-spacing无效；
		设定$spacing时，$foldername-imgname-spacing大于$spacing的两倍时，会报“图片背景宽度不够”的错误 */

		@mixin sprite-background-position($map, $sprite, $offset-x: 0, $offset-y: 0)
		.test{@include sprite-background-position($icons, "add") /* 输出add图标的background-position赋给.test类，在样式重写时非常有用 */
