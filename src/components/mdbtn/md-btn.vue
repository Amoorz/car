<template>
  <div class="md-button" @click="onClick($event)">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    methods: {
      onClick(e) {
        e.preventDefault()
        let btn = e.target
        let ripple = document.createElement('div')
        ripple.classList.add('md-ripple')
        let x = e.pageX - btn.offsetLeft
        let y = e.pageY - btn.offsetTop
        ripple.style.height = btn.offsetHeight + 'px'
        ripple.style.width = btn.offsetHeight + 'px'
        ripple.style.left = x - btn.offsetHeight / 2 + 'px'
        ripple.style.top = y - btn.offsetHeight / 2 + 'px'
        btn.appendChild(ripple)
        ripple.classList.add('md-ripple-effect')
        setTimeout(() => {
          btn.removeChild(ripple)
        }, 2000)
      }
    }
  }
</script>
<style lang="scss">
.md-button {
  position: relative;
  overflow: hidden;
  border: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.md-ripple {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(#fff, 0.4);
  min-width: 20px;
  min-height: 20px;
  opacity: 0;
  pointer-events: none;
}
.md-ripple-effect {
  animation: ripple 2s;
  -webkit-animation: ripple 2s;
}
@keyframes ripple {
  0% {
    transform: scale(1);
    opacity: 0.4;
  }
  100% {
    transform: scale(20);
    opacity: 0;
  }
}
@-webkit-keyframes ripple {
  0% {
    -webkit-transform: scale(1);
    opacity: 0.4;
  }
  100% {
    -webkit-transform: scale(20);
    opacity: 0;
  }
}
</style>