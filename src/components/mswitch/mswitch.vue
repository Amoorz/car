<template>
  <div class="mswitch">
    <input type="checkbox">
  </div>
</template>
<style lang="scss">
@import '../../scss/base.scss'; 
.mswitch{
	input{
		position: relative;
    // width: 52px;
    // height: 32px;
		width: 160rem/$font;	
    height: 80rem/$font;
		border: 1px solid #DFDFDF;
    outline: 0;
    // border-radius: 16px;
		border-radius: 100rem/$font;
    background-color: #DFDFDF;
    -webkit-transition: background-color 0.1s, border 0.1s;
		transition: background-color 0.1s, border 0.1s;
		-webkit-appearance: none;
		appearance: none;
		// box-sizing: border-box;
		&:checked{
			border-color: #ffe26d;
			background-color: #ffe26d;
			&:before{
				-webkit-transform: scale(0);
				transform: scale(0);
			}
			&:after{
				-webkit-transform: translateX(80rem/$font);
    		transform: translateX(80rem/$font);
			}
		}
		&:before{
			content: " ";
			position: absolute;
			// top: 0;
			// left: 0;
			top: -1px;
			left: -1px;
			// width: 50px;
			// height: 30px;
			width: 160rem/$font;	
    	height: 80rem/$font;
			// border-radius: 15px;
			border-radius: 100rem/$font;
			background-color: #FDFDFD;
			-webkit-transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1); 
			transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1); 
			transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1); 
			transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1); 
			border: 1px solid #e5e5e5;
			box-sizing: border-box;
		}
		&:after{
			content: " ";
			position: absolute;
			// top: 0;
			// left: 0;
			top: -1px;
			left: -1px;
			// width: 30px;
			// height: 30px;
			// border-radius: 15px;
			width: 80rem/$font;
			height: 80rem/$font;
			border-radius: 100rem/$font;
			background-color: #FFFFFF;
			// box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
			border: 1px solid #e5e5e5;
			-webkit-transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
			transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
			transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
			transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35), -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
			box-sizing: border-box
		}
	}
}
</style>

