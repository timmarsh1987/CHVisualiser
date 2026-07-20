(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:rgba(255,255,255,.5)}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:rgba(255,255,255,.8);margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:rgba(255,255,255,.8);text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:white;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:""}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}.locationmap-root{font-family:DM Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;display:flex;flex-direction:column;height:100%;min-height:480px;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e2e8f0;box-sizing:border-box}.locationmap-root *,.locationmap-root *:before,.locationmap-root *:after{box-sizing:border-box}.locationmap-toolbar{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:#ffffff;border-bottom:1px solid #e2e8f0}.locationmap-toolbar__heading{display:flex;flex-direction:column;gap:2px;min-width:0}.locationmap-toolbar__title{font-size:14px;font-weight:600;color:#1e293b;letter-spacing:-.01em}.locationmap-toolbar__context{display:flex;align-items:center;gap:8px;min-width:0}.locationmap-toolbar__entity{font-size:12px;color:#475569;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:280px}.locationmap-toolbar__domain{flex-shrink:0;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;border-radius:4px;padding:1px 6px;border:1px solid transparent}.locationmap-mode-toggle{display:flex;gap:4px;background:#f1f5f9;border-radius:8px;padding:3px}.locationmap-mode-btn{padding:5px 14px;border:none;border-radius:6px;font-size:12px;font-weight:500;cursor:pointer;background:transparent;color:#64748b;transition:background .15s,color .15s,box-shadow .15s;font-family:inherit}.locationmap-mode-btn--active{background:#ffffff;color:#1e293b;box-shadow:0 1px 3px #0000001a}.locationmap-body{display:flex;flex:1;overflow:hidden;background:#ffffff}.locationmap-sidebar{width:220px;min-width:220px;background:#ffffff;border-right:1px solid #e2e8f0;display:flex;flex-direction:column;overflow:hidden}.locationmap-sidebar__title{font-size:11px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:.06em;padding:12px 14px 8px}.locationmap-list{overflow-y:auto;flex:1}.locationmap-list__item{display:flex;align-items:flex-start;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f1f5f9;transition:background .1s}.locationmap-list__item:hover{background:#f8fafc}.locationmap-list__item--current{background:#fef2f2;border-left:3px solid #ef4444;padding-left:11px}.locationmap-list__item--current .locationmap-list__index{background:#ef4444}.locationmap-pin{background:transparent;border:none}.locationmap-list__index{width:22px;height:22px;border-radius:50%;background:#6366f1;color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.locationmap-list__info{display:flex;flex-direction:column;gap:3px;min-width:0}.locationmap-list__name{font-size:13px;font-weight:600;color:#1e293b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.locationmap-list__date{font-size:11px;color:#94a3b8}.locationmap-map-wrap{flex:1;position:relative;overflow:hidden;background:#e2e8f0;min-height:400px}.locationmap-map{width:100%;height:100%;min-height:400px;position:relative;z-index:0}.locationmap-badge{display:inline-block;font-size:10px;font-weight:600;padding:2px 7px;border-radius:99px;border:1px solid;text-transform:uppercase;letter-spacing:.04em}.locationmap-state{display:flex;align-items:center;justify-content:center;height:300px;font-size:14px;color:#94a3b8;background:#ffffff}.locationmap-state--error{color:#ef4444}.locationmap-modal-overlay{position:absolute;top:0;right:0;bottom:0;left:0;background:rgba(15,23,42,.45);display:flex;align-items:center;justify-content:center;z-index:1000;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.locationmap-modal{background:#ffffff;border-radius:12px;padding:24px;width:360px;max-width:90%;box-shadow:0 20px 60px #0003;position:relative}.locationmap-modal__close{position:absolute;top:14px;right:14px;border:none;background:#f1f5f9;color:#64748b;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;font-family:inherit}.locationmap-modal__header{display:flex;flex-direction:column;gap:8px;margin-bottom:16px;padding-right:24px}.locationmap-modal__title{font-size:17px;font-weight:700;color:#0f172a;line-height:1.3}.locationmap-modal__meta{display:flex;flex-direction:column;gap:10px;background:#f8fafc;border-radius:8px;padding:12px 14px;margin-bottom:14px}.locationmap-meta-row{display:flex;justify-content:space-between;align-items:flex-start;gap:8px}.locationmap-meta-label{font-size:11px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:.05em;flex-shrink:0}.locationmap-meta-value{font-size:13px;color:#334155;text-align:right}.locationmap-current-badge{font-size:12px;font-weight:600;color:#ef4444;padding-top:4px}.locationmap-modal__notes{border-top:1px solid #f1f5f9;padding-top:14px}.locationmap-notes-label{font-size:11px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px}.locationmap-notes-text{font-size:13px;color:#475569;line-height:1.6}.locationmap-map.leaflet-container,.locationmap-map .leaflet-container{width:100%!important;height:100%!important;min-height:400px;background:#e2e8f0;font-family:inherit}.locationmap-map .leaflet-tile{max-width:none!important;max-height:none!important}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
function Kv(e, t) {
  for (var n = 0; n < t.length; n++) {
    const i = t[n];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const a in i)
        if (a !== "default" && !(a in e)) {
          const l = Object.getOwnPropertyDescriptor(i, a);
          l && Object.defineProperty(e, a, l.get ? l : {
            enumerable: !0,
            get: () => i[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var _e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ng(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Jv(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function i() {
      return this instanceof i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(i) {
    var a = Object.getOwnPropertyDescriptor(e, i);
    Object.defineProperty(n, i, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[i];
      }
    });
  }), n;
}
var rg = { exports: {} }, Ql = {}, ig = { exports: {} }, we = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xa = Symbol.for("react.element"), qv = Symbol.for("react.portal"), Yv = Symbol.for("react.fragment"), Qv = Symbol.for("react.strict_mode"), Xv = Symbol.for("react.profiler"), e0 = Symbol.for("react.provider"), t0 = Symbol.for("react.context"), n0 = Symbol.for("react.forward_ref"), r0 = Symbol.for("react.suspense"), i0 = Symbol.for("react.memo"), o0 = Symbol.for("react.lazy"), sp = Symbol.iterator;
function a0(e) {
  return e === null || typeof e != "object" ? null : (e = sp && e[sp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var og = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ag = Object.assign, sg = {};
function zo(e, t, n) {
  this.props = e, this.context = t, this.refs = sg, this.updater = n || og;
}
zo.prototype.isReactComponent = {};
zo.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
zo.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lg() {
}
lg.prototype = zo.prototype;
function ud(e, t, n) {
  this.props = e, this.context = t, this.refs = sg, this.updater = n || og;
}
var cd = ud.prototype = new lg();
cd.constructor = ud;
ag(cd, zo.prototype);
cd.isPureReactComponent = !0;
var lp = Array.isArray, ug = Object.prototype.hasOwnProperty, fd = { current: null }, cg = { key: !0, ref: !0, __self: !0, __source: !0 };
function fg(e, t, n) {
  var i, a = {}, l = null, c = null;
  if (t != null)
    for (i in t.ref !== void 0 && (c = t.ref), t.key !== void 0 && (l = "" + t.key), t)
      ug.call(t, i) && !cg.hasOwnProperty(i) && (a[i] = t[i]);
  var p = arguments.length - 2;
  if (p === 1)
    a.children = n;
  else if (1 < p) {
    for (var m = Array(p), _ = 0; _ < p; _++)
      m[_] = arguments[_ + 2];
    a.children = m;
  }
  if (e && e.defaultProps)
    for (i in p = e.defaultProps, p)
      a[i] === void 0 && (a[i] = p[i]);
  return { $$typeof: Xa, type: e, key: l, ref: c, props: a, _owner: fd.current };
}
function s0(e, t) {
  return { $$typeof: Xa, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function dd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xa;
}
function l0(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var up = /\/+/g;
function kc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? l0("" + e.key) : t.toString(36);
}
function il(e, t, n, i, a) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var c = !1;
  if (e === null)
    c = !0;
  else
    switch (l) {
      case "string":
      case "number":
        c = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Xa:
          case qv:
            c = !0;
        }
    }
  if (c)
    return c = e, a = a(c), e = i === "" ? "." + kc(c, 0) : i, lp(a) ? (n = "", e != null && (n = e.replace(up, "$&/") + "/"), il(a, t, n, "", function(_) {
      return _;
    })) : a != null && (dd(a) && (a = s0(a, n + (!a.key || c && c.key === a.key ? "" : ("" + a.key).replace(up, "$&/") + "/") + e)), t.push(a)), 1;
  if (c = 0, i = i === "" ? "." : i + ":", lp(e))
    for (var p = 0; p < e.length; p++) {
      l = e[p];
      var m = i + kc(l, p);
      c += il(l, t, n, m, a);
    }
  else if (m = a0(e), typeof m == "function")
    for (e = m.call(e), p = 0; !(l = e.next()).done; )
      l = l.value, m = i + kc(l, p++), c += il(l, t, n, m, a);
  else if (l === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return c;
}
function Ds(e, t, n) {
  if (e == null)
    return e;
  var i = [], a = 0;
  return il(e, i, "", "", function(l) {
    return t.call(n, l, a++);
  }), i;
}
function u0(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var Nt = { current: null }, ol = { transition: null }, c0 = { ReactCurrentDispatcher: Nt, ReactCurrentBatchConfig: ol, ReactCurrentOwner: fd };
function dg() {
  throw Error("act(...) is not supported in production builds of React.");
}
we.Children = { map: Ds, forEach: function(e, t, n) {
  Ds(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ds(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ds(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!dd(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
we.Component = zo;
we.Fragment = Yv;
we.Profiler = Xv;
we.PureComponent = ud;
we.StrictMode = Qv;
we.Suspense = r0;
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c0;
we.act = dg;
we.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var i = ag({}, e.props), a = e.key, l = e.ref, c = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, c = fd.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps)
      var p = e.type.defaultProps;
    for (m in t)
      ug.call(t, m) && !cg.hasOwnProperty(m) && (i[m] = t[m] === void 0 && p !== void 0 ? p[m] : t[m]);
  }
  var m = arguments.length - 2;
  if (m === 1)
    i.children = n;
  else if (1 < m) {
    p = Array(m);
    for (var _ = 0; _ < m; _++)
      p[_] = arguments[_ + 2];
    i.children = p;
  }
  return { $$typeof: Xa, type: e.type, key: a, ref: l, props: i, _owner: c };
};
we.createContext = function(e) {
  return e = { $$typeof: t0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: e0, _context: e }, e.Consumer = e;
};
we.createElement = fg;
we.createFactory = function(e) {
  var t = fg.bind(null, e);
  return t.type = e, t;
};
we.createRef = function() {
  return { current: null };
};
we.forwardRef = function(e) {
  return { $$typeof: n0, render: e };
};
we.isValidElement = dd;
we.lazy = function(e) {
  return { $$typeof: o0, _payload: { _status: -1, _result: e }, _init: u0 };
};
we.memo = function(e, t) {
  return { $$typeof: i0, type: e, compare: t === void 0 ? null : t };
};
we.startTransition = function(e) {
  var t = ol.transition;
  ol.transition = {};
  try {
    e();
  } finally {
    ol.transition = t;
  }
};
we.unstable_act = dg;
we.useCallback = function(e, t) {
  return Nt.current.useCallback(e, t);
};
we.useContext = function(e) {
  return Nt.current.useContext(e);
};
we.useDebugValue = function() {
};
we.useDeferredValue = function(e) {
  return Nt.current.useDeferredValue(e);
};
we.useEffect = function(e, t) {
  return Nt.current.useEffect(e, t);
};
we.useId = function() {
  return Nt.current.useId();
};
we.useImperativeHandle = function(e, t, n) {
  return Nt.current.useImperativeHandle(e, t, n);
};
we.useInsertionEffect = function(e, t) {
  return Nt.current.useInsertionEffect(e, t);
};
we.useLayoutEffect = function(e, t) {
  return Nt.current.useLayoutEffect(e, t);
};
we.useMemo = function(e, t) {
  return Nt.current.useMemo(e, t);
};
we.useReducer = function(e, t, n) {
  return Nt.current.useReducer(e, t, n);
};
we.useRef = function(e) {
  return Nt.current.useRef(e);
};
we.useState = function(e) {
  return Nt.current.useState(e);
};
we.useSyncExternalStore = function(e, t, n) {
  return Nt.current.useSyncExternalStore(e, t, n);
};
we.useTransition = function() {
  return Nt.current.useTransition();
};
we.version = "18.3.1";
ig.exports = we;
var ie = ig.exports;
const hg = /* @__PURE__ */ ng(ie), af = /* @__PURE__ */ Kv({
  __proto__: null,
  default: hg
}, [ie]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f0 = ie, d0 = Symbol.for("react.element"), h0 = Symbol.for("react.fragment"), p0 = Object.prototype.hasOwnProperty, m0 = f0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function pg(e, t, n) {
  var i, a = {}, l = null, c = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (c = t.ref);
  for (i in t)
    p0.call(t, i) && !g0.hasOwnProperty(i) && (a[i] = t[i]);
  if (e && e.defaultProps)
    for (i in t = e.defaultProps, t)
      a[i] === void 0 && (a[i] = t[i]);
  return { $$typeof: d0, type: e, key: l, ref: c, props: a, _owner: m0.current };
}
Ql.Fragment = h0;
Ql.jsx = pg;
Ql.jsxs = pg;
rg.exports = Ql;
var mg = rg.exports;
const pe = mg.jsx, ft = mg.jsxs;
var sf = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
(function(e, t) {
  (function(n, i) {
    i(t);
  })(_e, function(n) {
    var i = "1.9.4";
    function a(r) {
      var o, s, u, d;
      for (s = 1, u = arguments.length; s < u; s++) {
        d = arguments[s];
        for (o in d)
          r[o] = d[o];
      }
      return r;
    }
    var l = Object.create || function() {
      function r() {
      }
      return function(o) {
        return r.prototype = o, new r();
      };
    }();
    function c(r, o) {
      var s = Array.prototype.slice;
      if (r.bind)
        return r.bind.apply(r, s.call(arguments, 1));
      var u = s.call(arguments, 2);
      return function() {
        return r.apply(o, u.length ? u.concat(s.call(arguments)) : arguments);
      };
    }
    var p = 0;
    function m(r) {
      return "_leaflet_id" in r || (r._leaflet_id = ++p), r._leaflet_id;
    }
    function _(r, o, s) {
      var u, d, g, E;
      return E = function() {
        u = !1, d && (g.apply(s, d), d = !1);
      }, g = function() {
        u ? d = arguments : (r.apply(s, arguments), setTimeout(E, o), u = !0);
      }, g;
    }
    function y(r, o, s) {
      var u = o[1], d = o[0], g = u - d;
      return r === u && s ? r : ((r - d) % g + g) % g + d;
    }
    function v() {
      return !1;
    }
    function h(r, o) {
      if (o === !1)
        return r;
      var s = Math.pow(10, o === void 0 ? 6 : o);
      return Math.round(r * s) / s;
    }
    function A(r) {
      return r.trim ? r.trim() : r.replace(/^\s+|\s+$/g, "");
    }
    function b(r) {
      return A(r).split(/\s+/);
    }
    function T(r, o) {
      Object.prototype.hasOwnProperty.call(r, "options") || (r.options = r.options ? l(r.options) : {});
      for (var s in o)
        r.options[s] = o[s];
      return r.options;
    }
    function j(r, o, s) {
      var u = [];
      for (var d in r)
        u.push(encodeURIComponent(s ? d.toUpperCase() : d) + "=" + encodeURIComponent(r[d]));
      return (!o || o.indexOf("?") === -1 ? "?" : "&") + u.join("&");
    }
    var S = /\{ *([\w_ -]+) *\}/g;
    function P(r, o) {
      return r.replace(S, function(s, u) {
        var d = o[u];
        if (d === void 0)
          throw new Error("No value provided for variable " + s);
        return typeof d == "function" && (d = d(o)), d;
      });
    }
    var x = Array.isArray || function(r) {
      return Object.prototype.toString.call(r) === "[object Array]";
    };
    function $(r, o) {
      for (var s = 0; s < r.length; s++)
        if (r[s] === o)
          return s;
      return -1;
    }
    var k = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function f(r) {
      return window["webkit" + r] || window["moz" + r] || window["ms" + r];
    }
    var O = 0;
    function Z(r) {
      var o = +/* @__PURE__ */ new Date(), s = Math.max(0, 16 - (o - O));
      return O = o + s, window.setTimeout(r, s);
    }
    var re = window.requestAnimationFrame || f("RequestAnimationFrame") || Z, Y = window.cancelAnimationFrame || f("CancelAnimationFrame") || f("CancelRequestAnimationFrame") || function(r) {
      window.clearTimeout(r);
    };
    function ce(r, o, s) {
      if (s && re === Z)
        r.call(o);
      else
        return re.call(window, c(r, o));
    }
    function Ee(r) {
      r && Y.call(window, r);
    }
    var sn = {
      __proto__: null,
      extend: a,
      create: l,
      bind: c,
      get lastId() {
        return p;
      },
      stamp: m,
      throttle: _,
      wrapNum: y,
      falseFn: v,
      formatNum: h,
      trim: A,
      splitWords: b,
      setOptions: T,
      getParamString: j,
      template: P,
      isArray: x,
      indexOf: $,
      emptyImageUrl: k,
      requestFn: re,
      cancelFn: Y,
      requestAnimFrame: ce,
      cancelAnimFrame: Ee
    };
    function st() {
    }
    st.extend = function(r) {
      var o = function() {
        T(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
      }, s = o.__super__ = this.prototype, u = l(s);
      u.constructor = o, o.prototype = u;
      for (var d in this)
        Object.prototype.hasOwnProperty.call(this, d) && d !== "prototype" && d !== "__super__" && (o[d] = this[d]);
      return r.statics && a(o, r.statics), r.includes && (gr(r.includes), a.apply(null, [u].concat(r.includes))), a(u, r), delete u.statics, delete u.includes, u.options && (u.options = s.options ? l(s.options) : {}, a(u.options, r.options)), u._initHooks = [], u.callInitHooks = function() {
        if (!this._initHooksCalled) {
          s.callInitHooks && s.callInitHooks.call(this), this._initHooksCalled = !0;
          for (var g = 0, E = u._initHooks.length; g < E; g++)
            u._initHooks[g].call(this);
        }
      }, o;
    }, st.include = function(r) {
      var o = this.prototype.options;
      return a(this.prototype, r), r.options && (this.prototype.options = o, this.mergeOptions(r.options)), this;
    }, st.mergeOptions = function(r) {
      return a(this.prototype.options, r), this;
    }, st.addInitHook = function(r) {
      var o = Array.prototype.slice.call(arguments, 1), s = typeof r == "function" ? r : function() {
        this[r].apply(this, o);
      };
      return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(s), this;
    };
    function gr(r) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        r = x(r) ? r : [r];
        for (var o = 0; o < r.length; o++)
          r[o] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
      }
    }
    var Ue = {
      /* @method on(type: String, fn: Function, context?: Object): this
       * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
       *
       * @alternative
       * @method on(eventMap: Object): this
       * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
       */
      on: function(r, o, s) {
        if (typeof r == "object")
          for (var u in r)
            this._on(u, r[u], o);
        else {
          r = b(r);
          for (var d = 0, g = r.length; d < g; d++)
            this._on(r[d], o, s);
        }
        return this;
      },
      /* @method off(type: String, fn?: Function, context?: Object): this
       * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
       *
       * @alternative
       * @method off(eventMap: Object): this
       * Removes a set of type/listener pairs.
       *
       * @alternative
       * @method off: this
       * Removes all listeners to all events on the object. This includes implicitly attached events.
       */
      off: function(r, o, s) {
        if (!arguments.length)
          delete this._events;
        else if (typeof r == "object")
          for (var u in r)
            this._off(u, r[u], o);
        else {
          r = b(r);
          for (var d = arguments.length === 1, g = 0, E = r.length; g < E; g++)
            d ? this._off(r[g]) : this._off(r[g], o, s);
        }
        return this;
      },
      // attach listener (without syntactic sugar now)
      _on: function(r, o, s, u) {
        if (typeof o != "function") {
          console.warn("wrong listener type: " + typeof o);
          return;
        }
        if (this._listens(r, o, s) === !1) {
          s === this && (s = void 0);
          var d = { fn: o, ctx: s };
          u && (d.once = !0), this._events = this._events || {}, this._events[r] = this._events[r] || [], this._events[r].push(d);
        }
      },
      _off: function(r, o, s) {
        var u, d, g;
        if (this._events && (u = this._events[r], !!u)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (d = 0, g = u.length; d < g; d++)
                u[d].fn = v;
            delete this._events[r];
            return;
          }
          if (typeof o != "function") {
            console.warn("wrong listener type: " + typeof o);
            return;
          }
          var E = this._listens(r, o, s);
          if (E !== !1) {
            var M = u[E];
            this._firingCount && (M.fn = v, this._events[r] = u = u.slice()), u.splice(E, 1);
          }
        }
      },
      // @method fire(type: String, data?: Object, propagate?: Boolean): this
      // Fires an event of the specified type. You can optionally provide a data
      // object — the first argument of the listener function will contain its
      // properties. The event can optionally be propagated to event parents.
      fire: function(r, o, s) {
        if (!this.listens(r, s))
          return this;
        var u = a({}, o, {
          type: r,
          target: this,
          sourceTarget: o && o.sourceTarget || this
        });
        if (this._events) {
          var d = this._events[r];
          if (d) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var g = 0, E = d.length; g < E; g++) {
              var M = d[g], N = M.fn;
              M.once && this.off(r, N, M.ctx), N.call(M.ctx || this, u);
            }
            this._firingCount--;
          }
        }
        return s && this._propagateEvent(u), this;
      },
      // @method listens(type: String, propagate?: Boolean): Boolean
      // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
      // Returns `true` if a particular event type has any listeners attached to it.
      // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
      listens: function(r, o, s, u) {
        typeof r != "string" && console.warn('"string" type argument expected');
        var d = o;
        typeof o != "function" && (u = !!o, d = void 0, s = void 0);
        var g = this._events && this._events[r];
        if (g && g.length && this._listens(r, d, s) !== !1)
          return !0;
        if (u) {
          for (var E in this._eventParents)
            if (this._eventParents[E].listens(r, o, s, u))
              return !0;
        }
        return !1;
      },
      // returns the index (number) or false
      _listens: function(r, o, s) {
        if (!this._events)
          return !1;
        var u = this._events[r] || [];
        if (!o)
          return !!u.length;
        s === this && (s = void 0);
        for (var d = 0, g = u.length; d < g; d++)
          if (u[d].fn === o && u[d].ctx === s)
            return d;
        return !1;
      },
      // @method once(…): this
      // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
      once: function(r, o, s) {
        if (typeof r == "object")
          for (var u in r)
            this._on(u, r[u], o, !0);
        else {
          r = b(r);
          for (var d = 0, g = r.length; d < g; d++)
            this._on(r[d], o, s, !0);
        }
        return this;
      },
      // @method addEventParent(obj: Evented): this
      // Adds an event parent - an `Evented` that will receive propagated events
      addEventParent: function(r) {
        return this._eventParents = this._eventParents || {}, this._eventParents[m(r)] = r, this;
      },
      // @method removeEventParent(obj: Evented): this
      // Removes an event parent, so it will stop receiving propagated events
      removeEventParent: function(r) {
        return this._eventParents && delete this._eventParents[m(r)], this;
      },
      _propagateEvent: function(r) {
        for (var o in this._eventParents)
          this._eventParents[o].fire(r.type, a({
            layer: r.target,
            propagatedFrom: r.target
          }, r), !0);
      }
    };
    Ue.addEventListener = Ue.on, Ue.removeEventListener = Ue.clearAllEventListeners = Ue.off, Ue.addOneTimeEventListener = Ue.once, Ue.fireEvent = Ue.fire, Ue.hasEventListeners = Ue.listens;
    var It = st.extend(Ue);
    function R(r, o, s) {
      this.x = s ? Math.round(r) : r, this.y = s ? Math.round(o) : o;
    }
    var oe = Math.trunc || function(r) {
      return r > 0 ? Math.floor(r) : Math.ceil(r);
    };
    R.prototype = {
      // @method clone(): Point
      // Returns a copy of the current point.
      clone: function() {
        return new R(this.x, this.y);
      },
      // @method add(otherPoint: Point): Point
      // Returns the result of addition of the current and the given points.
      add: function(r) {
        return this.clone()._add(U(r));
      },
      _add: function(r) {
        return this.x += r.x, this.y += r.y, this;
      },
      // @method subtract(otherPoint: Point): Point
      // Returns the result of subtraction of the given point from the current.
      subtract: function(r) {
        return this.clone()._subtract(U(r));
      },
      _subtract: function(r) {
        return this.x -= r.x, this.y -= r.y, this;
      },
      // @method divideBy(num: Number): Point
      // Returns the result of division of the current point by the given number.
      divideBy: function(r) {
        return this.clone()._divideBy(r);
      },
      _divideBy: function(r) {
        return this.x /= r, this.y /= r, this;
      },
      // @method multiplyBy(num: Number): Point
      // Returns the result of multiplication of the current point by the given number.
      multiplyBy: function(r) {
        return this.clone()._multiplyBy(r);
      },
      _multiplyBy: function(r) {
        return this.x *= r, this.y *= r, this;
      },
      // @method scaleBy(scale: Point): Point
      // Multiply each coordinate of the current point by each coordinate of
      // `scale`. In linear algebra terms, multiply the point by the
      // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
      // defined by `scale`.
      scaleBy: function(r) {
        return new R(this.x * r.x, this.y * r.y);
      },
      // @method unscaleBy(scale: Point): Point
      // Inverse of `scaleBy`. Divide each coordinate of the current point by
      // each coordinate of `scale`.
      unscaleBy: function(r) {
        return new R(this.x / r.x, this.y / r.y);
      },
      // @method round(): Point
      // Returns a copy of the current point with rounded coordinates.
      round: function() {
        return this.clone()._round();
      },
      _round: function() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
      },
      // @method floor(): Point
      // Returns a copy of the current point with floored coordinates (rounded down).
      floor: function() {
        return this.clone()._floor();
      },
      _floor: function() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
      },
      // @method ceil(): Point
      // Returns a copy of the current point with ceiled coordinates (rounded up).
      ceil: function() {
        return this.clone()._ceil();
      },
      _ceil: function() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
      },
      // @method trunc(): Point
      // Returns a copy of the current point with truncated coordinates (rounded towards zero).
      trunc: function() {
        return this.clone()._trunc();
      },
      _trunc: function() {
        return this.x = oe(this.x), this.y = oe(this.y), this;
      },
      // @method distanceTo(otherPoint: Point): Number
      // Returns the cartesian distance between the current and the given points.
      distanceTo: function(r) {
        r = U(r);
        var o = r.x - this.x, s = r.y - this.y;
        return Math.sqrt(o * o + s * s);
      },
      // @method equals(otherPoint: Point): Boolean
      // Returns `true` if the given point has the same coordinates.
      equals: function(r) {
        return r = U(r), r.x === this.x && r.y === this.y;
      },
      // @method contains(otherPoint: Point): Boolean
      // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
      contains: function(r) {
        return r = U(r), Math.abs(r.x) <= Math.abs(this.x) && Math.abs(r.y) <= Math.abs(this.y);
      },
      // @method toString(): String
      // Returns a string representation of the point for debugging purposes.
      toString: function() {
        return "Point(" + h(this.x) + ", " + h(this.y) + ")";
      }
    };
    function U(r, o, s) {
      return r instanceof R ? r : x(r) ? new R(r[0], r[1]) : r == null ? r : typeof r == "object" && "x" in r && "y" in r ? new R(r.x, r.y) : new R(r, o, s);
    }
    function K(r, o) {
      if (r)
        for (var s = o ? [r, o] : r, u = 0, d = s.length; u < d; u++)
          this.extend(s[u]);
    }
    K.prototype = {
      // @method extend(point: Point): this
      // Extends the bounds to contain the given point.
      // @alternative
      // @method extend(otherBounds: Bounds): this
      // Extend the bounds to contain the given bounds
      extend: function(r) {
        var o, s;
        if (!r)
          return this;
        if (r instanceof R || typeof r[0] == "number" || "x" in r)
          o = s = U(r);
        else if (r = me(r), o = r.min, s = r.max, !o || !s)
          return this;
        return !this.min && !this.max ? (this.min = o.clone(), this.max = s.clone()) : (this.min.x = Math.min(o.x, this.min.x), this.max.x = Math.max(s.x, this.max.x), this.min.y = Math.min(o.y, this.min.y), this.max.y = Math.max(s.y, this.max.y)), this;
      },
      // @method getCenter(round?: Boolean): Point
      // Returns the center point of the bounds.
      getCenter: function(r) {
        return U(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          r
        );
      },
      // @method getBottomLeft(): Point
      // Returns the bottom-left point of the bounds.
      getBottomLeft: function() {
        return U(this.min.x, this.max.y);
      },
      // @method getTopRight(): Point
      // Returns the top-right point of the bounds.
      getTopRight: function() {
        return U(this.max.x, this.min.y);
      },
      // @method getTopLeft(): Point
      // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
      getTopLeft: function() {
        return this.min;
      },
      // @method getBottomRight(): Point
      // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
      getBottomRight: function() {
        return this.max;
      },
      // @method getSize(): Point
      // Returns the size of the given bounds
      getSize: function() {
        return this.max.subtract(this.min);
      },
      // @method contains(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle contains the given one.
      // @alternative
      // @method contains(point: Point): Boolean
      // Returns `true` if the rectangle contains the given point.
      contains: function(r) {
        var o, s;
        return typeof r[0] == "number" || r instanceof R ? r = U(r) : r = me(r), r instanceof K ? (o = r.min, s = r.max) : o = s = r, o.x >= this.min.x && s.x <= this.max.x && o.y >= this.min.y && s.y <= this.max.y;
      },
      // @method intersects(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds
      // intersect if they have at least one point in common.
      intersects: function(r) {
        r = me(r);
        var o = this.min, s = this.max, u = r.min, d = r.max, g = d.x >= o.x && u.x <= s.x, E = d.y >= o.y && u.y <= s.y;
        return g && E;
      },
      // @method overlaps(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds
      // overlap if their intersection is an area.
      overlaps: function(r) {
        r = me(r);
        var o = this.min, s = this.max, u = r.min, d = r.max, g = d.x > o.x && u.x < s.x, E = d.y > o.y && u.y < s.y;
        return g && E;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this.min && this.max);
      },
      // @method pad(bufferRatio: Number): Bounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(r) {
        var o = this.min, s = this.max, u = Math.abs(o.x - s.x) * r, d = Math.abs(o.y - s.y) * r;
        return me(
          U(o.x - u, o.y - d),
          U(s.x + u, s.y + d)
        );
      },
      // @method equals(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle is equivalent to the given bounds.
      equals: function(r) {
        return r ? (r = me(r), this.min.equals(r.getTopLeft()) && this.max.equals(r.getBottomRight())) : !1;
      }
    };
    function me(r, o) {
      return !r || r instanceof K ? r : new K(r, o);
    }
    function De(r, o) {
      if (r)
        for (var s = o ? [r, o] : r, u = 0, d = s.length; u < d; u++)
          this.extend(s[u]);
    }
    De.prototype = {
      // @method extend(latlng: LatLng): this
      // Extend the bounds to contain the given point
      // @alternative
      // @method extend(otherBounds: LatLngBounds): this
      // Extend the bounds to contain the given bounds
      extend: function(r) {
        var o = this._southWest, s = this._northEast, u, d;
        if (r instanceof Q)
          u = r, d = r;
        else if (r instanceof De) {
          if (u = r._southWest, d = r._northEast, !u || !d)
            return this;
        } else
          return r ? this.extend(le(r) || ae(r)) : this;
        return !o && !s ? (this._southWest = new Q(u.lat, u.lng), this._northEast = new Q(d.lat, d.lng)) : (o.lat = Math.min(u.lat, o.lat), o.lng = Math.min(u.lng, o.lng), s.lat = Math.max(d.lat, s.lat), s.lng = Math.max(d.lng, s.lng)), this;
      },
      // @method pad(bufferRatio: Number): LatLngBounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(r) {
        var o = this._southWest, s = this._northEast, u = Math.abs(o.lat - s.lat) * r, d = Math.abs(o.lng - s.lng) * r;
        return new De(
          new Q(o.lat - u, o.lng - d),
          new Q(s.lat + u, s.lng + d)
        );
      },
      // @method getCenter(): LatLng
      // Returns the center point of the bounds.
      getCenter: function() {
        return new Q(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      // @method getSouthWest(): LatLng
      // Returns the south-west point of the bounds.
      getSouthWest: function() {
        return this._southWest;
      },
      // @method getNorthEast(): LatLng
      // Returns the north-east point of the bounds.
      getNorthEast: function() {
        return this._northEast;
      },
      // @method getNorthWest(): LatLng
      // Returns the north-west point of the bounds.
      getNorthWest: function() {
        return new Q(this.getNorth(), this.getWest());
      },
      // @method getSouthEast(): LatLng
      // Returns the south-east point of the bounds.
      getSouthEast: function() {
        return new Q(this.getSouth(), this.getEast());
      },
      // @method getWest(): Number
      // Returns the west longitude of the bounds
      getWest: function() {
        return this._southWest.lng;
      },
      // @method getSouth(): Number
      // Returns the south latitude of the bounds
      getSouth: function() {
        return this._southWest.lat;
      },
      // @method getEast(): Number
      // Returns the east longitude of the bounds
      getEast: function() {
        return this._northEast.lng;
      },
      // @method getNorth(): Number
      // Returns the north latitude of the bounds
      getNorth: function() {
        return this._northEast.lat;
      },
      // @method contains(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle contains the given one.
      // @alternative
      // @method contains (latlng: LatLng): Boolean
      // Returns `true` if the rectangle contains the given point.
      contains: function(r) {
        typeof r[0] == "number" || r instanceof Q || "lat" in r ? r = le(r) : r = ae(r);
        var o = this._southWest, s = this._northEast, u, d;
        return r instanceof De ? (u = r.getSouthWest(), d = r.getNorthEast()) : u = d = r, u.lat >= o.lat && d.lat <= s.lat && u.lng >= o.lng && d.lng <= s.lng;
      },
      // @method intersects(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
      intersects: function(r) {
        r = ae(r);
        var o = this._southWest, s = this._northEast, u = r.getSouthWest(), d = r.getNorthEast(), g = d.lat >= o.lat && u.lat <= s.lat, E = d.lng >= o.lng && u.lng <= s.lng;
        return g && E;
      },
      // @method overlaps(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
      overlaps: function(r) {
        r = ae(r);
        var o = this._southWest, s = this._northEast, u = r.getSouthWest(), d = r.getNorthEast(), g = d.lat > o.lat && u.lat < s.lat, E = d.lng > o.lng && u.lng < s.lng;
        return g && E;
      },
      // @method toBBoxString(): String
      // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
      toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      },
      // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
      // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(r, o) {
        return r ? (r = ae(r), this._southWest.equals(r.getSouthWest(), o) && this._northEast.equals(r.getNorthEast(), o)) : !1;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this._southWest && this._northEast);
      }
    };
    function ae(r, o) {
      return r instanceof De ? r : new De(r, o);
    }
    function Q(r, o, s) {
      if (isNaN(r) || isNaN(o))
        throw new Error("Invalid LatLng object: (" + r + ", " + o + ")");
      this.lat = +r, this.lng = +o, s !== void 0 && (this.alt = +s);
    }
    Q.prototype = {
      // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
      // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(r, o) {
        if (!r)
          return !1;
        r = le(r);
        var s = Math.max(
          Math.abs(this.lat - r.lat),
          Math.abs(this.lng - r.lng)
        );
        return s <= (o === void 0 ? 1e-9 : o);
      },
      // @method toString(): String
      // Returns a string representation of the point (for debugging purposes).
      toString: function(r) {
        return "LatLng(" + h(this.lat, r) + ", " + h(this.lng, r) + ")";
      },
      // @method distanceTo(otherLatLng: LatLng): Number
      // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
      distanceTo: function(r) {
        return Qe.distance(this, le(r));
      },
      // @method wrap(): LatLng
      // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
      wrap: function() {
        return Qe.wrapLatLng(this);
      },
      // @method toBounds(sizeInMeters: Number): LatLngBounds
      // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
      toBounds: function(r) {
        var o = 180 * r / 40075017, s = o / Math.cos(Math.PI / 180 * this.lat);
        return ae(
          [this.lat - o, this.lng - s],
          [this.lat + o, this.lng + s]
        );
      },
      clone: function() {
        return new Q(this.lat, this.lng, this.alt);
      }
    };
    function le(r, o, s) {
      return r instanceof Q ? r : x(r) && typeof r[0] != "object" ? r.length === 3 ? new Q(r[0], r[1], r[2]) : r.length === 2 ? new Q(r[0], r[1]) : null : r == null ? r : typeof r == "object" && "lat" in r ? new Q(r.lat, "lng" in r ? r.lng : r.lon, r.alt) : o === void 0 ? null : new Q(r, o, s);
    }
    var lt = {
      // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
      // Projects geographical coordinates into pixel coordinates for a given zoom.
      latLngToPoint: function(r, o) {
        var s = this.projection.project(r), u = this.scale(o);
        return this.transformation._transform(s, u);
      },
      // @method pointToLatLng(point: Point, zoom: Number): LatLng
      // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
      // zoom into geographical coordinates.
      pointToLatLng: function(r, o) {
        var s = this.scale(o), u = this.transformation.untransform(r, s);
        return this.projection.unproject(u);
      },
      // @method project(latlng: LatLng): Point
      // Projects geographical coordinates into coordinates in units accepted for
      // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
      project: function(r) {
        return this.projection.project(r);
      },
      // @method unproject(point: Point): LatLng
      // Given a projected coordinate returns the corresponding LatLng.
      // The inverse of `project`.
      unproject: function(r) {
        return this.projection.unproject(r);
      },
      // @method scale(zoom: Number): Number
      // Returns the scale used when transforming projected coordinates into
      // pixel coordinates for a particular zoom. For example, it returns
      // `256 * 2^zoom` for Mercator-based CRS.
      scale: function(r) {
        return 256 * Math.pow(2, r);
      },
      // @method zoom(scale: Number): Number
      // Inverse of `scale()`, returns the zoom level corresponding to a scale
      // factor of `scale`.
      zoom: function(r) {
        return Math.log(r / 256) / Math.LN2;
      },
      // @method getProjectedBounds(zoom: Number): Bounds
      // Returns the projection's bounds scaled and transformed for the provided `zoom`.
      getProjectedBounds: function(r) {
        if (this.infinite)
          return null;
        var o = this.projection.bounds, s = this.scale(r), u = this.transformation.transform(o.min, s), d = this.transformation.transform(o.max, s);
        return new K(u, d);
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates.
      // @property code: String
      // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
      //
      // @property wrapLng: Number[]
      // An array of two numbers defining whether the longitude (horizontal) coordinate
      // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
      // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
      //
      // @property wrapLat: Number[]
      // Like `wrapLng`, but for the latitude (vertical) axis.
      // wrapLng: [min, max],
      // wrapLat: [min, max],
      // @property infinite: Boolean
      // If true, the coordinate space will be unbounded (infinite in both axes)
      infinite: !1,
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where lat and lng has been wrapped according to the
      // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
      wrapLatLng: function(r) {
        var o = this.wrapLng ? y(r.lng, this.wrapLng, !0) : r.lng, s = this.wrapLat ? y(r.lat, this.wrapLat, !0) : r.lat, u = r.alt;
        return new Q(s, o, u);
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring
      // that its center is within the CRS's bounds.
      // Only accepts actual `L.LatLngBounds` instances, not arrays.
      wrapLatLngBounds: function(r) {
        var o = r.getCenter(), s = this.wrapLatLng(o), u = o.lat - s.lat, d = o.lng - s.lng;
        if (u === 0 && d === 0)
          return r;
        var g = r.getSouthWest(), E = r.getNorthEast(), M = new Q(g.lat - u, g.lng - d), N = new Q(E.lat - u, E.lng - d);
        return new De(M, N);
      }
    }, Qe = a({}, lt, {
      wrapLng: [-180, 180],
      // Mean Earth Radius, as recommended for use by
      // the International Union of Geodesy and Geophysics,
      // see https://rosettacode.org/wiki/Haversine_formula
      R: 6371e3,
      // distance between two geographical points using spherical law of cosines approximation
      distance: function(r, o) {
        var s = Math.PI / 180, u = r.lat * s, d = o.lat * s, g = Math.sin((o.lat - r.lat) * s / 2), E = Math.sin((o.lng - r.lng) * s / 2), M = g * g + Math.cos(u) * Math.cos(d) * E * E, N = 2 * Math.atan2(Math.sqrt(M), Math.sqrt(1 - M));
        return this.R * N;
      }
    }), kt = 6378137, Jn = {
      R: kt,
      MAX_LATITUDE: 85.0511287798,
      project: function(r) {
        var o = Math.PI / 180, s = this.MAX_LATITUDE, u = Math.max(Math.min(s, r.lat), -s), d = Math.sin(u * o);
        return new R(
          this.R * r.lng * o,
          this.R * Math.log((1 + d) / (1 - d)) / 2
        );
      },
      unproject: function(r) {
        var o = 180 / Math.PI;
        return new Q(
          (2 * Math.atan(Math.exp(r.y / this.R)) - Math.PI / 2) * o,
          r.x * o / this.R
        );
      },
      bounds: function() {
        var r = kt * Math.PI;
        return new K([-r, -r], [r, r]);
      }()
    };
    function Kt(r, o, s, u) {
      if (x(r)) {
        this._a = r[0], this._b = r[1], this._c = r[2], this._d = r[3];
        return;
      }
      this._a = r, this._b = o, this._c = s, this._d = u;
    }
    Kt.prototype = {
      // @method transform(point: Point, scale?: Number): Point
      // Returns a transformed point, optionally multiplied by the given scale.
      // Only accepts actual `L.Point` instances, not arrays.
      transform: function(r, o) {
        return this._transform(r.clone(), o);
      },
      // destructive transform (faster)
      _transform: function(r, o) {
        return o = o || 1, r.x = o * (this._a * r.x + this._b), r.y = o * (this._c * r.y + this._d), r;
      },
      // @method untransform(point: Point, scale?: Number): Point
      // Returns the reverse transformation of the given point, optionally divided
      // by the given scale. Only accepts actual `L.Point` instances, not arrays.
      untransform: function(r, o) {
        return o = o || 1, new R(
          (r.x / o - this._b) / this._a,
          (r.y / o - this._d) / this._c
        );
      }
    };
    function ln(r, o, s, u) {
      return new Kt(r, o, s, u);
    }
    var _r = a({}, Qe, {
      code: "EPSG:3857",
      projection: Jn,
      transformation: function() {
        var r = 0.5 / (Math.PI * Jn.R);
        return ln(r, 0.5, -r, 0.5);
      }()
    }), Wr = a({}, _r, {
      code: "EPSG:900913"
    });
    function Ei(r) {
      return document.createElementNS("http://www.w3.org/2000/svg", r);
    }
    function Li(r, o) {
      var s = "", u, d, g, E, M, N;
      for (u = 0, g = r.length; u < g; u++) {
        for (M = r[u], d = 0, E = M.length; d < E; d++)
          N = M[d], s += (d ? "L" : "M") + N.x + " " + N.y;
        s += o ? X.svg ? "z" : "x" : "";
      }
      return s || "M0 0";
    }
    var Hr = document.documentElement.style, yr = "ActiveXObject" in window, Gr = yr && !document.addEventListener, Ti = "msLaunchUri" in navigator && !("documentMode" in document), Kr = Jt("webkit"), Oi = Jt("android"), vr = Jt("android 2") || Jt("android 3"), z = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), I = Oi && Jt("Google") && z < 537 && !("AudioNode" in window), F = !!window.opera, W = !Ti && Jt("chrome"), q = Jt("gecko") && !Kr && !F && !yr, We = !W && Jt("safari"), te = Jt("phantom"), fe = "OTransition" in Hr, ee = navigator.platform.indexOf("Win") === 0, ve = yr && "transition" in Hr, ge = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !vr, Pt = "MozPerspective" in Hr, Jr = !window.L_DISABLE_3D && (ve || ge || Pt) && !fe && !te, wr = typeof orientation < "u" || Jt("mobile"), ic = wr && Kr, qn = wr && ge, Zo = !window.PointerEvent && window.MSPointerEvent, _s = !!(window.PointerEvent || Zo), ys = "ontouchstart" in window || !!window.TouchEvent, Vo = !window.L_NO_TOUCH && (ys || _s), qr = wr && F, Uo = wr && q, Wo = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, Ho = function() {
      var r = !1;
      try {
        var o = Object.defineProperty({}, "passive", {
          get: function() {
            r = !0;
          }
        });
        window.addEventListener("testPassiveEventSupport", v, o), window.removeEventListener("testPassiveEventSupport", v, o);
      } catch {
      }
      return r;
    }(), Yr = function() {
      return !!document.createElement("canvas").getContext;
    }(), Go = !!(document.createElementNS && Ei("svg").createSVGRect), oc = !!Go && function() {
      var r = document.createElement("div");
      return r.innerHTML = "<svg/>", (r.firstChild && r.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
    }(), ac = !Go && function() {
      try {
        var r = document.createElement("div");
        r.innerHTML = '<v:shape adj="1"/>';
        var o = r.firstChild;
        return o.style.behavior = "url(#default#VML)", o && typeof o.adj == "object";
      } catch {
        return !1;
      }
    }(), sc = navigator.platform.indexOf("Mac") === 0, lc = navigator.platform.indexOf("Linux") === 0;
    function Jt(r) {
      return navigator.userAgent.toLowerCase().indexOf(r) >= 0;
    }
    var X = {
      ie: yr,
      ielt9: Gr,
      edge: Ti,
      webkit: Kr,
      android: Oi,
      android23: vr,
      androidStock: I,
      opera: F,
      chrome: W,
      gecko: q,
      safari: We,
      phantom: te,
      opera12: fe,
      win: ee,
      ie3d: ve,
      webkit3d: ge,
      gecko3d: Pt,
      any3d: Jr,
      mobile: wr,
      mobileWebkit: ic,
      mobileWebkit3d: qn,
      msPointer: Zo,
      pointer: _s,
      touch: Vo,
      touchNative: ys,
      mobileOpera: qr,
      mobileGecko: Uo,
      retina: Wo,
      passiveEvents: Ho,
      canvas: Yr,
      svg: Go,
      vml: ac,
      inlineSvg: oc,
      mac: sc,
      linux: lc
    }, Nn = X.msPointer ? "MSPointerDown" : "pointerdown", vs = X.msPointer ? "MSPointerMove" : "pointermove", ws = X.msPointer ? "MSPointerUp" : "pointerup", Ps = X.msPointer ? "MSPointerCancel" : "pointercancel", Ko = {
      touchstart: Nn,
      touchmove: vs,
      touchend: ws,
      touchcancel: Ps
    }, xs = {
      touchstart: pc,
      touchmove: Ci,
      touchend: Ci,
      touchcancel: Ci
    }, xt = {}, Ss = !1;
    function uc(r, o, s) {
      return o === "touchstart" && hc(), xs[o] ? (s = xs[o].bind(this, s), r.addEventListener(Ko[o], s, !1), s) : (console.warn("wrong event specified:", o), v);
    }
    function cc(r, o, s) {
      if (!Ko[o]) {
        console.warn("wrong event specified:", o);
        return;
      }
      r.removeEventListener(Ko[o], s, !1);
    }
    function fc(r) {
      xt[r.pointerId] = r;
    }
    function dc(r) {
      xt[r.pointerId] && (xt[r.pointerId] = r);
    }
    function $n(r) {
      delete xt[r.pointerId];
    }
    function hc() {
      Ss || (document.addEventListener(Nn, fc, !0), document.addEventListener(vs, dc, !0), document.addEventListener(ws, $n, !0), document.addEventListener(Ps, $n, !0), Ss = !0);
    }
    function Ci(r, o) {
      if (o.pointerType !== (o.MSPOINTER_TYPE_MOUSE || "mouse")) {
        o.touches = [];
        for (var s in xt)
          o.touches.push(xt[s]);
        o.changedTouches = [o], r(o);
      }
    }
    function pc(r, o) {
      o.MSPOINTER_TYPE_TOUCH && o.pointerType === o.MSPOINTER_TYPE_TOUCH && nt(o), Ci(r, o);
    }
    function mc(r) {
      var o = {}, s, u;
      for (u in r)
        s = r[u], o[u] = s && s.bind ? s.bind(r) : s;
      return r = o, o.type = "dblclick", o.detail = 2, o.isTrusted = !1, o._simulated = !0, o;
    }
    var gc = 200;
    function ki(r, o) {
      r.addEventListener("dblclick", o);
      var s = 0, u;
      function d(g) {
        if (g.detail !== 1) {
          u = g.detail;
          return;
        }
        if (!(g.pointerType === "mouse" || g.sourceCapabilities && !g.sourceCapabilities.firesTouchEvents)) {
          var E = w(g);
          if (!(E.some(function(N) {
            return N instanceof HTMLLabelElement && N.attributes.for;
          }) && !E.some(function(N) {
            return N instanceof HTMLInputElement || N instanceof HTMLSelectElement;
          }))) {
            var M = Date.now();
            M - s <= gc ? (u++, u === 2 && o(mc(g))) : u = 1, s = M;
          }
        }
      }
      return r.addEventListener("click", d), {
        dblclick: o,
        simDblclick: d
      };
    }
    function _c(r, o) {
      r.removeEventListener("dblclick", o.dblclick), r.removeEventListener("click", o.simDblclick);
    }
    var Jo = Xr(
      ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
    ), Rt = Xr(
      ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
    ), Es = Rt === "webkitTransition" || Rt === "OTransition" ? Rt + "End" : "transitionend";
    function Ls(r) {
      return typeof r == "string" ? document.getElementById(r) : r;
    }
    function Qr(r, o) {
      var s = r.style[o] || r.currentStyle && r.currentStyle[o];
      if ((!s || s === "auto") && document.defaultView) {
        var u = document.defaultView.getComputedStyle(r, null);
        s = u ? u[o] : null;
      }
      return s === "auto" ? null : s;
    }
    function Se(r, o, s) {
      var u = document.createElement(r);
      return u.className = o || "", s && s.appendChild(u), u;
    }
    function ze(r) {
      var o = r.parentNode;
      o && o.removeChild(r);
    }
    function bi(r) {
      for (; r.firstChild; )
        r.removeChild(r.firstChild);
    }
    function Sn(r) {
      var o = r.parentNode;
      o && o.lastChild !== r && o.appendChild(r);
    }
    function Pr(r) {
      var o = r.parentNode;
      o && o.firstChild !== r && o.insertBefore(r, o.firstChild);
    }
    function Yn(r, o) {
      if (r.classList !== void 0)
        return r.classList.contains(o);
      var s = Mi(r);
      return s.length > 0 && new RegExp("(^|\\s)" + o + "(\\s|$)").test(s);
    }
    function de(r, o) {
      if (r.classList !== void 0)
        for (var s = b(o), u = 0, d = s.length; u < d; u++)
          r.classList.add(s[u]);
      else if (!Yn(r, o)) {
        var g = Mi(r);
        qo(r, (g ? g + " " : "") + o);
      }
    }
    function Re(r, o) {
      r.classList !== void 0 ? r.classList.remove(o) : qo(r, A((" " + Mi(r) + " ").replace(" " + o + " ", " ")));
    }
    function qo(r, o) {
      r.className.baseVal === void 0 ? r.className = o : r.className.baseVal = o;
    }
    function Mi(r) {
      return r.correspondingElement && (r = r.correspondingElement), r.className.baseVal === void 0 ? r.className : r.className.baseVal;
    }
    function Bt(r, o) {
      "opacity" in r.style ? r.style.opacity = o : "filter" in r.style && yc(r, o);
    }
    function yc(r, o) {
      var s = !1, u = "DXImageTransform.Microsoft.Alpha";
      try {
        s = r.filters.item(u);
      } catch {
        if (o === 1)
          return;
      }
      o = Math.round(o * 100), s ? (s.Enabled = o !== 100, s.Opacity = o) : r.style.filter += " progid:" + u + "(opacity=" + o + ")";
    }
    function Xr(r) {
      for (var o = document.documentElement.style, s = 0; s < r.length; s++)
        if (r[s] in o)
          return r[s];
      return !1;
    }
    function Qn(r, o, s) {
      var u = o || new R(0, 0);
      r.style[Jo] = (X.ie3d ? "translate(" + u.x + "px," + u.y + "px)" : "translate3d(" + u.x + "px," + u.y + "px,0)") + (s ? " scale(" + s + ")" : "");
    }
    function He(r, o) {
      r._leaflet_pos = o, X.any3d ? Qn(r, o) : (r.style.left = o.x + "px", r.style.top = o.y + "px");
    }
    function In(r) {
      return r._leaflet_pos || new R(0, 0);
    }
    var Rn, un, Yo;
    if ("onselectstart" in document)
      Rn = function() {
        ue(window, "selectstart", nt);
      }, un = function() {
        Ce(window, "selectstart", nt);
      };
    else {
      var ei = Xr(
        ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
      );
      Rn = function() {
        if (ei) {
          var r = document.documentElement.style;
          Yo = r[ei], r[ei] = "none";
        }
      }, un = function() {
        ei && (document.documentElement.style[ei] = Yo, Yo = void 0);
      };
    }
    function cn() {
      ue(window, "dragstart", nt);
    }
    function Qo() {
      Ce(window, "dragstart", nt);
    }
    var Ai, Xo;
    function ea(r) {
      for (; r.tabIndex === -1; )
        r = r.parentNode;
      r.style && (zi(), Ai = r, Xo = r.style.outlineStyle, r.style.outlineStyle = "none", ue(window, "keydown", zi));
    }
    function zi() {
      Ai && (Ai.style.outlineStyle = Xo, Ai = void 0, Xo = void 0, Ce(window, "keydown", zi));
    }
    function Bn(r) {
      do
        r = r.parentNode;
      while ((!r.offsetWidth || !r.offsetHeight) && r !== document.body);
      return r;
    }
    function Ni(r) {
      var o = r.getBoundingClientRect();
      return {
        x: o.width / r.offsetWidth || 1,
        y: o.height / r.offsetHeight || 1,
        boundingClientRect: o
      };
    }
    var vc = {
      __proto__: null,
      TRANSFORM: Jo,
      TRANSITION: Rt,
      TRANSITION_END: Es,
      get: Ls,
      getStyle: Qr,
      create: Se,
      remove: ze,
      empty: bi,
      toFront: Sn,
      toBack: Pr,
      hasClass: Yn,
      addClass: de,
      removeClass: Re,
      setClass: qo,
      getClass: Mi,
      setOpacity: Bt,
      testProp: Xr,
      setTransform: Qn,
      setPosition: He,
      getPosition: In,
      get disableTextSelection() {
        return Rn;
      },
      get enableTextSelection() {
        return un;
      },
      disableImageDrag: cn,
      enableImageDrag: Qo,
      preventOutline: ea,
      restoreOutline: zi,
      getSizedParentNode: Bn,
      getScale: Ni
    };
    function ue(r, o, s, u) {
      if (o && typeof o == "object")
        for (var d in o)
          Ii(r, d, o[d], s);
      else {
        o = b(o);
        for (var g = 0, E = o.length; g < E; g++)
          Ii(r, o[g], s, u);
      }
      return this;
    }
    var fn = "_leaflet_events";
    function Ce(r, o, s, u) {
      if (arguments.length === 1)
        Ts(r), delete r[fn];
      else if (o && typeof o == "object")
        for (var d in o)
          Ri(r, d, o[d], s);
      else if (o = b(o), arguments.length === 2)
        Ts(r, function(M) {
          return $(o, M) !== -1;
        });
      else
        for (var g = 0, E = o.length; g < E; g++)
          Ri(r, o[g], s, u);
      return this;
    }
    function Ts(r, o) {
      for (var s in r[fn]) {
        var u = s.split(/\d/)[0];
        (!o || o(u)) && Ri(r, u, null, null, s);
      }
    }
    var $i = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel"
    };
    function Ii(r, o, s, u) {
      var d = o + m(s) + (u ? "_" + m(u) : "");
      if (r[fn] && r[fn][d])
        return this;
      var g = function(M) {
        return s.call(u || r, M || window.event);
      }, E = g;
      !X.touchNative && X.pointer && o.indexOf("touch") === 0 ? g = uc(r, o, g) : X.touch && o === "dblclick" ? g = ki(r, g) : "addEventListener" in r ? o === "touchstart" || o === "touchmove" || o === "wheel" || o === "mousewheel" ? r.addEventListener($i[o] || o, g, X.passiveEvents ? { passive: !1 } : !1) : o === "mouseenter" || o === "mouseleave" ? (g = function(M) {
        M = M || window.event, ke(r, M) && E(M);
      }, r.addEventListener($i[o], g, !1)) : r.addEventListener(o, E, !1) : r.attachEvent("on" + o, g), r[fn] = r[fn] || {}, r[fn][d] = g;
    }
    function Ri(r, o, s, u, d) {
      d = d || o + m(s) + (u ? "_" + m(u) : "");
      var g = r[fn] && r[fn][d];
      if (!g)
        return this;
      !X.touchNative && X.pointer && o.indexOf("touch") === 0 ? cc(r, o, g) : X.touch && o === "dblclick" ? _c(r, g) : "removeEventListener" in r ? r.removeEventListener($i[o] || o, g, !1) : r.detachEvent("on" + o, g), r[fn][d] = null;
    }
    function qt(r) {
      return r.stopPropagation ? r.stopPropagation() : r.originalEvent ? r.originalEvent._stopped = !0 : r.cancelBubble = !0, this;
    }
    function Bi(r) {
      return Ii(r, "wheel", qt), this;
    }
    function ti(r) {
      return ue(r, "mousedown touchstart dblclick contextmenu", qt), r._leaflet_disable_click = !0, this;
    }
    function nt(r) {
      return r.preventDefault ? r.preventDefault() : r.returnValue = !1, this;
    }
    function Xn(r) {
      return nt(r), qt(r), this;
    }
    function w(r) {
      if (r.composedPath)
        return r.composedPath();
      for (var o = [], s = r.target; s; )
        o.push(s), s = s.parentNode;
      return o;
    }
    function C(r, o) {
      if (!o)
        return new R(r.clientX, r.clientY);
      var s = Ni(o), u = s.boundingClientRect;
      return new R(
        // offset.left/top values are in page scale (like clientX/Y),
        // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
        (r.clientX - u.left) / s.x - o.clientLeft,
        (r.clientY - u.top) / s.y - o.clientTop
      );
    }
    var B = X.linux && X.chrome ? window.devicePixelRatio : X.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
    function G(r) {
      return X.edge ? r.wheelDeltaY / 2 : (
        // Don't trust window-geometry-based delta
        r.deltaY && r.deltaMode === 0 ? -r.deltaY / B : (
          // Pixels
          r.deltaY && r.deltaMode === 1 ? -r.deltaY * 20 : (
            // Lines
            r.deltaY && r.deltaMode === 2 ? -r.deltaY * 60 : (
              // Pages
              r.deltaX || r.deltaZ ? 0 : (
                // Skip horizontal/depth wheel events
                r.wheelDelta ? (r.wheelDeltaY || r.wheelDelta) / 2 : (
                  // Legacy IE pixels
                  r.detail && Math.abs(r.detail) < 32765 ? -r.detail * 20 : (
                    // Legacy Moz lines
                    r.detail ? r.detail / -32765 * 60 : (
                      // Legacy Moz pages
                      0
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    function ke(r, o) {
      var s = o.relatedTarget;
      if (!s)
        return !0;
      try {
        for (; s && s !== r; )
          s = s.parentNode;
      } catch {
        return !1;
      }
      return s !== r;
    }
    var he = {
      __proto__: null,
      on: ue,
      off: Ce,
      stopPropagation: qt,
      disableScrollPropagation: Bi,
      disableClickPropagation: ti,
      preventDefault: nt,
      stop: Xn,
      getPropagationPath: w,
      getMousePosition: C,
      getWheelDelta: G,
      isExternalTarget: ke,
      addListener: ue,
      removeListener: Ce
    }, Ne = It.extend({
      // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
      // Run an animation of a given element to a new position, optionally setting
      // duration in seconds (`0.25` by default) and easing linearity factor (3rd
      // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
      // `0.5` by default).
      run: function(r, o, s, u) {
        this.stop(), this._el = r, this._inProgress = !0, this._duration = s || 0.25, this._easeOutPower = 1 / Math.max(u || 0.5, 0.2), this._startPos = In(r), this._offset = o.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
      },
      // @method stop()
      // Stops the animation (if currently running).
      stop: function() {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function() {
        this._animId = ce(this._animate, this), this._step();
      },
      _step: function(r) {
        var o = +/* @__PURE__ */ new Date() - this._startTime, s = this._duration * 1e3;
        o < s ? this._runFrame(this._easeOut(o / s), r) : (this._runFrame(1), this._complete());
      },
      _runFrame: function(r, o) {
        var s = this._startPos.add(this._offset.multiplyBy(r));
        o && s._round(), He(this._el, s), this.fire("step");
      },
      _complete: function() {
        Ee(this._animId), this._inProgress = !1, this.fire("end");
      },
      _easeOut: function(r) {
        return 1 - Math.pow(1 - r, this._easeOutPower);
      }
    }), ne = It.extend({
      options: {
        // @section Map State Options
        // @option crs: CRS = L.CRS.EPSG3857
        // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
        // sure what it means.
        crs: _r,
        // @option center: LatLng = undefined
        // Initial geographic center of the map
        center: void 0,
        // @option zoom: Number = undefined
        // Initial map zoom level
        zoom: void 0,
        // @option minZoom: Number = *
        // Minimum zoom level of the map.
        // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
        // the lowest of their `minZoom` options will be used instead.
        minZoom: void 0,
        // @option maxZoom: Number = *
        // Maximum zoom level of the map.
        // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
        // the highest of their `maxZoom` options will be used instead.
        maxZoom: void 0,
        // @option layers: Layer[] = []
        // Array of layers that will be added to the map initially
        layers: [],
        // @option maxBounds: LatLngBounds = null
        // When this option is set, the map restricts the view to the given
        // geographical bounds, bouncing the user back if the user tries to pan
        // outside the view. To set the restriction dynamically, use
        // [`setMaxBounds`](#map-setmaxbounds) method.
        maxBounds: void 0,
        // @option renderer: Renderer = *
        // The default method for drawing vector layers on the map. `L.SVG`
        // or `L.Canvas` by default depending on browser support.
        renderer: void 0,
        // @section Animation Options
        // @option zoomAnimation: Boolean = true
        // Whether the map zoom animation is enabled. By default it's enabled
        // in all browsers that support CSS3 Transitions except Android.
        zoomAnimation: !0,
        // @option zoomAnimationThreshold: Number = 4
        // Won't animate zoom if the zoom difference exceeds this value.
        zoomAnimationThreshold: 4,
        // @option fadeAnimation: Boolean = true
        // Whether the tile fade animation is enabled. By default it's enabled
        // in all browsers that support CSS3 Transitions except Android.
        fadeAnimation: !0,
        // @option markerZoomAnimation: Boolean = true
        // Whether markers animate their zoom with the zoom animation, if disabled
        // they will disappear for the length of the animation. By default it's
        // enabled in all browsers that support CSS3 Transitions except Android.
        markerZoomAnimation: !0,
        // @option transform3DLimit: Number = 2^23
        // Defines the maximum size of a CSS translation transform. The default
        // value should not be changed unless a web browser positions layers in
        // the wrong place after doing a large `panBy`.
        transform3DLimit: 8388608,
        // Precision limit of a 32-bit float
        // @section Interaction Options
        // @option zoomSnap: Number = 1
        // Forces the map's zoom level to always be a multiple of this, particularly
        // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
        // By default, the zoom level snaps to the nearest integer; lower values
        // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
        // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
        zoomSnap: 1,
        // @option zoomDelta: Number = 1
        // Controls how much the map's zoom level will change after a
        // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
        // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
        // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
        zoomDelta: 1,
        // @option trackResize: Boolean = true
        // Whether the map automatically handles browser window resize to update itself.
        trackResize: !0
      },
      initialize: function(r, o) {
        o = T(this, o), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(r), this._initLayout(), this._onResize = c(this._onResize, this), this._initEvents(), o.maxBounds && this.setMaxBounds(o.maxBounds), o.zoom !== void 0 && (this._zoom = this._limitZoom(o.zoom)), o.center && o.zoom !== void 0 && this.setView(le(o.center), o.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = Rt && X.any3d && !X.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), ue(this._proxy, Es, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      },
      // @section Methods for modifying map state
      // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) with the given
      // animation options.
      setView: function(r, o, s) {
        if (o = o === void 0 ? this._zoom : this._limitZoom(o), r = this._limitCenter(le(r), o, this.options.maxBounds), s = s || {}, this._stop(), this._loaded && !s.reset && s !== !0) {
          s.animate !== void 0 && (s.zoom = a({ animate: s.animate }, s.zoom), s.pan = a({ animate: s.animate, duration: s.duration }, s.pan));
          var u = this._zoom !== o ? this._tryAnimatedZoom && this._tryAnimatedZoom(r, o, s.zoom) : this._tryAnimatedPan(r, s.pan);
          if (u)
            return clearTimeout(this._sizeTimer), this;
        }
        return this._resetView(r, o, s.pan && s.pan.noMoveStart), this;
      },
      // @method setZoom(zoom: Number, options?: Zoom/pan options): this
      // Sets the zoom of the map.
      setZoom: function(r, o) {
        return this._loaded ? this.setView(this.getCenter(), r, { zoom: o }) : (this._zoom = r, this);
      },
      // @method zoomIn(delta?: Number, options?: Zoom options): this
      // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomIn: function(r, o) {
        return r = r || (X.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + r, o);
      },
      // @method zoomOut(delta?: Number, options?: Zoom options): this
      // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomOut: function(r, o) {
        return r = r || (X.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - r, o);
      },
      // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified geographical point on the map
      // stationary (e.g. used internally for scroll zoom and double-click zoom).
      // @alternative
      // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
      setZoomAround: function(r, o, s) {
        var u = this.getZoomScale(o), d = this.getSize().divideBy(2), g = r instanceof R ? r : this.latLngToContainerPoint(r), E = g.subtract(d).multiplyBy(1 - 1 / u), M = this.containerPointToLatLng(d.add(E));
        return this.setView(M, o, { zoom: s });
      },
      _getBoundsCenterZoom: function(r, o) {
        o = o || {}, r = r.getBounds ? r.getBounds() : ae(r);
        var s = U(o.paddingTopLeft || o.padding || [0, 0]), u = U(o.paddingBottomRight || o.padding || [0, 0]), d = this.getBoundsZoom(r, !1, s.add(u));
        if (d = typeof o.maxZoom == "number" ? Math.min(o.maxZoom, d) : d, d === 1 / 0)
          return {
            center: r.getCenter(),
            zoom: d
          };
        var g = u.subtract(s).divideBy(2), E = this.project(r.getSouthWest(), d), M = this.project(r.getNorthEast(), d), N = this.unproject(E.add(M).divideBy(2).add(g), d);
        return {
          center: N,
          zoom: d
        };
      },
      // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets a map view that contains the given geographical bounds with the
      // maximum zoom level possible.
      fitBounds: function(r, o) {
        if (r = ae(r), !r.isValid())
          throw new Error("Bounds are not valid.");
        var s = this._getBoundsCenterZoom(r, o);
        return this.setView(s.center, s.zoom, o);
      },
      // @method fitWorld(options?: fitBounds options): this
      // Sets a map view that mostly contains the whole world with the maximum
      // zoom level possible.
      fitWorld: function(r) {
        return this.fitBounds([[-90, -180], [90, 180]], r);
      },
      // @method panTo(latlng: LatLng, options?: Pan options): this
      // Pans the map to a given center.
      panTo: function(r, o) {
        return this.setView(r, this._zoom, { pan: o });
      },
      // @method panBy(offset: Point, options?: Pan options): this
      // Pans the map by a given number of pixels (animated).
      panBy: function(r, o) {
        if (r = U(r).round(), o = o || {}, !r.x && !r.y)
          return this.fire("moveend");
        if (o.animate !== !0 && !this.getSize().contains(r))
          return this._resetView(this.unproject(this.project(this.getCenter()).add(r)), this.getZoom()), this;
        if (this._panAnim || (this._panAnim = new Ne(), this._panAnim.on({
          step: this._onPanTransitionStep,
          end: this._onPanTransitionEnd
        }, this)), o.noMoveStart || this.fire("movestart"), o.animate !== !1) {
          de(this._mapPane, "leaflet-pan-anim");
          var s = this._getMapPanePos().subtract(r).round();
          this._panAnim.run(this._mapPane, s, o.duration || 0.25, o.easeLinearity);
        } else
          this._rawPanBy(r), this.fire("move").fire("moveend");
        return this;
      },
      // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) performing a smooth
      // pan-zoom animation.
      flyTo: function(r, o, s) {
        if (s = s || {}, s.animate === !1 || !X.any3d)
          return this.setView(r, o, s);
        this._stop();
        var u = this.project(this.getCenter()), d = this.project(r), g = this.getSize(), E = this._zoom;
        r = le(r), o = o === void 0 ? E : o;
        var M = Math.max(g.x, g.y), N = M * this.getZoomScale(E, o), D = d.distanceTo(u) || 1, H = 1.42, se = H * H;
        function ye(Xe) {
          var Bs = Xe ? -1 : 1, Uv = Xe ? N : M, Wv = N * N - M * M + Bs * se * se * D * D, Hv = 2 * Uv * se * D, Cc = Wv / Hv, ap = Math.sqrt(Cc * Cc + 1) - Cc, Gv = ap < 1e-9 ? -18 : Math.log(ap);
          return Gv;
        }
        function Mt(Xe) {
          return (Math.exp(Xe) - Math.exp(-Xe)) / 2;
        }
        function ct(Xe) {
          return (Math.exp(Xe) + Math.exp(-Xe)) / 2;
        }
        function hn(Xe) {
          return Mt(Xe) / ct(Xe);
        }
        var Ft = ye(0);
        function Hi(Xe) {
          return M * (ct(Ft) / ct(Ft + H * Xe));
        }
        function jv(Xe) {
          return M * (ct(Ft) * hn(Ft + H * Xe) - Mt(Ft)) / se;
        }
        function Fv(Xe) {
          return 1 - Math.pow(1 - Xe, 1.5);
        }
        var Zv = Date.now(), ip = (ye(1) - Ft) / H, Vv = s.duration ? 1e3 * s.duration : 1e3 * ip * 0.8;
        function op() {
          var Xe = (Date.now() - Zv) / Vv, Bs = Fv(Xe) * ip;
          Xe <= 1 ? (this._flyToFrame = ce(op, this), this._move(
            this.unproject(u.add(d.subtract(u).multiplyBy(jv(Bs) / D)), E),
            this.getScaleZoom(M / Hi(Bs), E),
            { flyTo: !0 }
          )) : this._move(r, o)._moveEnd(!0);
        }
        return this._moveStart(!0, s.noMoveStart), op.call(this), this;
      },
      // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
      // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
      flyToBounds: function(r, o) {
        var s = this._getBoundsCenterZoom(r, o);
        return this.flyTo(s.center, s.zoom, o);
      },
      // @method setMaxBounds(bounds: LatLngBounds): this
      // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
      setMaxBounds: function(r) {
        return r = ae(r), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), r.isValid() ? (this.options.maxBounds = r, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
      },
      // @method setMinZoom(zoom: Number): this
      // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
      setMinZoom: function(r) {
        var o = this.options.minZoom;
        return this.options.minZoom = r, this._loaded && o !== r && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(r) : this;
      },
      // @method setMaxZoom(zoom: Number): this
      // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
      setMaxZoom: function(r) {
        var o = this.options.maxZoom;
        return this.options.maxZoom = r, this._loaded && o !== r && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(r) : this;
      },
      // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
      // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
      panInsideBounds: function(r, o) {
        this._enforcingBounds = !0;
        var s = this.getCenter(), u = this._limitCenter(s, this._zoom, ae(r));
        return s.equals(u) || this.panTo(u, o), this._enforcingBounds = !1, this;
      },
      // @method panInside(latlng: LatLng, options?: padding options): this
      // Pans the map the minimum amount to make the `latlng` visible. Use
      // padding options to fit the display to more restricted bounds.
      // If `latlng` is already within the (optionally padded) display bounds,
      // the map will not be panned.
      panInside: function(r, o) {
        o = o || {};
        var s = U(o.paddingTopLeft || o.padding || [0, 0]), u = U(o.paddingBottomRight || o.padding || [0, 0]), d = this.project(this.getCenter()), g = this.project(r), E = this.getPixelBounds(), M = me([E.min.add(s), E.max.subtract(u)]), N = M.getSize();
        if (!M.contains(g)) {
          this._enforcingBounds = !0;
          var D = g.subtract(M.getCenter()), H = M.extend(g).getSize().subtract(N);
          d.x += D.x < 0 ? -H.x : H.x, d.y += D.y < 0 ? -H.y : H.y, this.panTo(this.unproject(d), o), this._enforcingBounds = !1;
        }
        return this;
      },
      // @method invalidateSize(options: Zoom/pan options): this
      // Checks if the map container size changed and updates the map if so —
      // call it after you've changed the map size dynamically, also animating
      // pan by default. If `options.pan` is `false`, panning will not occur.
      // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
      // that it doesn't happen often even if the method is called many
      // times in a row.
      // @alternative
      // @method invalidateSize(animate: Boolean): this
      // Checks if the map container size changed and updates the map if so —
      // call it after you've changed the map size dynamically, also animating
      // pan by default.
      invalidateSize: function(r) {
        if (!this._loaded)
          return this;
        r = a({
          animate: !1,
          pan: !0
        }, r === !0 ? { animate: !0 } : r);
        var o = this.getSize();
        this._sizeChanged = !0, this._lastCenter = null;
        var s = this.getSize(), u = o.divideBy(2).round(), d = s.divideBy(2).round(), g = u.subtract(d);
        return !g.x && !g.y ? this : (r.animate && r.pan ? this.panBy(g) : (r.pan && this._rawPanBy(g), this.fire("move"), r.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(c(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
          oldSize: o,
          newSize: s
        }));
      },
      // @section Methods for modifying map state
      // @method stop(): this
      // Stops the currently running `panTo` or `flyTo` animation, if any.
      stop: function() {
        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
      },
      // @section Geolocation methods
      // @method locate(options?: Locate options): this
      // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
      // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
      // and optionally sets the map view to the user's location with respect to
      // detection accuracy (or to the world view if geolocation failed).
      // Note that, if your page doesn't use HTTPS, this method will fail in
      // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
      // See `Locate options` for more details.
      locate: function(r) {
        if (r = this._locateOptions = a({
          timeout: 1e4,
          watch: !1
          // setView: false
          // maxZoom: <Number>
          // maximumAge: 0
          // enableHighAccuracy: false
        }, r), !("geolocation" in navigator))
          return this._handleGeolocationError({
            code: 0,
            message: "Geolocation not supported."
          }), this;
        var o = c(this._handleGeolocationResponse, this), s = c(this._handleGeolocationError, this);
        return r.watch ? this._locationWatchId = navigator.geolocation.watchPosition(o, s, r) : navigator.geolocation.getCurrentPosition(o, s, r), this;
      },
      // @method stopLocate(): this
      // Stops watching location previously initiated by `map.locate({watch: true})`
      // and aborts resetting the map view if map.locate was called with
      // `{setView: true}`.
      stopLocate: function() {
        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
      },
      _handleGeolocationError: function(r) {
        if (this._container._leaflet_id) {
          var o = r.code, s = r.message || (o === 1 ? "permission denied" : o === 2 ? "position unavailable" : "timeout");
          this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
            code: o,
            message: "Geolocation error: " + s + "."
          });
        }
      },
      _handleGeolocationResponse: function(r) {
        if (this._container._leaflet_id) {
          var o = r.coords.latitude, s = r.coords.longitude, u = new Q(o, s), d = u.toBounds(r.coords.accuracy * 2), g = this._locateOptions;
          if (g.setView) {
            var E = this.getBoundsZoom(d);
            this.setView(u, g.maxZoom ? Math.min(E, g.maxZoom) : E);
          }
          var M = {
            latlng: u,
            bounds: d,
            timestamp: r.timestamp
          };
          for (var N in r.coords)
            typeof r.coords[N] == "number" && (M[N] = r.coords[N]);
          this.fire("locationfound", M);
        }
      },
      // TODO Appropriate docs section?
      // @section Other Methods
      // @method addHandler(name: String, HandlerClass: Function): this
      // Adds a new `Handler` to the map, given its name and constructor function.
      addHandler: function(r, o) {
        if (!o)
          return this;
        var s = this[r] = new o(this);
        return this._handlers.push(s), this.options[r] && s.enable(), this;
      },
      // @method remove(): this
      // Destroys the map and clears all related event listeners.
      remove: function() {
        if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
          throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch {
          this._container._leaflet_id = void 0, this._containerId = void 0;
        }
        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), ze(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (Ee(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
        var r;
        for (r in this._layers)
          this._layers[r].remove();
        for (r in this._panes)
          ze(this._panes[r]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      },
      // @section Other Methods
      // @method createPane(name: String, container?: HTMLElement): HTMLElement
      // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
      // then returns it. The pane is created as a child of `container`, or
      // as a child of the main map pane if not set.
      createPane: function(r, o) {
        var s = "leaflet-pane" + (r ? " leaflet-" + r.replace("Pane", "") + "-pane" : ""), u = Se("div", s, o || this._mapPane);
        return r && (this._panes[r] = u), u;
      },
      // @section Methods for Getting Map State
      // @method getCenter(): LatLng
      // Returns the geographical center of the map view
      getCenter: function() {
        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
      },
      // @method getZoom(): Number
      // Returns the current zoom level of the map view
      getZoom: function() {
        return this._zoom;
      },
      // @method getBounds(): LatLngBounds
      // Returns the geographical bounds visible in the current map view
      getBounds: function() {
        var r = this.getPixelBounds(), o = this.unproject(r.getBottomLeft()), s = this.unproject(r.getTopRight());
        return new De(o, s);
      },
      // @method getMinZoom(): Number
      // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
      getMinZoom: function() {
        return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
      },
      // @method getMaxZoom(): Number
      // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
      getMaxZoom: function() {
        return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
      },
      // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
      // Returns the maximum zoom level on which the given bounds fit to the map
      // view in its entirety. If `inside` (optional) is set to `true`, the method
      // instead returns the minimum zoom level on which the map view fits into
      // the given bounds in its entirety.
      getBoundsZoom: function(r, o, s) {
        r = ae(r), s = U(s || [0, 0]);
        var u = this.getZoom() || 0, d = this.getMinZoom(), g = this.getMaxZoom(), E = r.getNorthWest(), M = r.getSouthEast(), N = this.getSize().subtract(s), D = me(this.project(M, u), this.project(E, u)).getSize(), H = X.any3d ? this.options.zoomSnap : 1, se = N.x / D.x, ye = N.y / D.y, Mt = o ? Math.max(se, ye) : Math.min(se, ye);
        return u = this.getScaleZoom(Mt, u), H && (u = Math.round(u / (H / 100)) * (H / 100), u = o ? Math.ceil(u / H) * H : Math.floor(u / H) * H), Math.max(d, Math.min(g, u));
      },
      // @method getSize(): Point
      // Returns the current size of the map container (in pixels).
      getSize: function() {
        return (!this._size || this._sizeChanged) && (this._size = new R(
          this._container.clientWidth || 0,
          this._container.clientHeight || 0
        ), this._sizeChanged = !1), this._size.clone();
      },
      // @method getPixelBounds(): Bounds
      // Returns the bounds of the current map view in projected pixel
      // coordinates (sometimes useful in layer and overlay implementations).
      getPixelBounds: function(r, o) {
        var s = this._getTopLeftPoint(r, o);
        return new K(s, s.add(this.getSize()));
      },
      // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
      // the map pane? "left point of the map layer" can be confusing, specially
      // since there can be negative offsets.
      // @method getPixelOrigin(): Point
      // Returns the projected pixel coordinates of the top left point of
      // the map layer (useful in custom layer and overlay implementations).
      getPixelOrigin: function() {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      // @method getPixelWorldBounds(zoom?: Number): Bounds
      // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
      // If `zoom` is omitted, the map's current zoom level is used.
      getPixelWorldBounds: function(r) {
        return this.options.crs.getProjectedBounds(r === void 0 ? this.getZoom() : r);
      },
      // @section Other Methods
      // @method getPane(pane: String|HTMLElement): HTMLElement
      // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
      getPane: function(r) {
        return typeof r == "string" ? this._panes[r] : r;
      },
      // @method getPanes(): Object
      // Returns a plain object containing the names of all [panes](#map-pane) as keys and
      // the panes as values.
      getPanes: function() {
        return this._panes;
      },
      // @method getContainer: HTMLElement
      // Returns the HTML element that contains the map.
      getContainer: function() {
        return this._container;
      },
      // @section Conversion Methods
      // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
      // Returns the scale factor to be applied to a map transition from zoom level
      // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
      getZoomScale: function(r, o) {
        var s = this.options.crs;
        return o = o === void 0 ? this._zoom : o, s.scale(r) / s.scale(o);
      },
      // @method getScaleZoom(scale: Number, fromZoom: Number): Number
      // Returns the zoom level that the map would end up at, if it is at `fromZoom`
      // level and everything is scaled by a factor of `scale`. Inverse of
      // [`getZoomScale`](#map-getZoomScale).
      getScaleZoom: function(r, o) {
        var s = this.options.crs;
        o = o === void 0 ? this._zoom : o;
        var u = s.zoom(r * s.scale(o));
        return isNaN(u) ? 1 / 0 : u;
      },
      // @method project(latlng: LatLng, zoom: Number): Point
      // Projects a geographical coordinate `LatLng` according to the projection
      // of the map's CRS, then scales it according to `zoom` and the CRS's
      // `Transformation`. The result is pixel coordinate relative to
      // the CRS origin.
      project: function(r, o) {
        return o = o === void 0 ? this._zoom : o, this.options.crs.latLngToPoint(le(r), o);
      },
      // @method unproject(point: Point, zoom: Number): LatLng
      // Inverse of [`project`](#map-project).
      unproject: function(r, o) {
        return o = o === void 0 ? this._zoom : o, this.options.crs.pointToLatLng(U(r), o);
      },
      // @method layerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding geographical coordinate (for the current zoom level).
      layerPointToLatLng: function(r) {
        var o = U(r).add(this.getPixelOrigin());
        return this.unproject(o);
      },
      // @method latLngToLayerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the [origin pixel](#map-getpixelorigin).
      latLngToLayerPoint: function(r) {
        var o = this.project(le(r))._round();
        return o._subtract(this.getPixelOrigin());
      },
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
      // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
      // CRS's bounds.
      // By default this means longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees.
      wrapLatLng: function(r) {
        return this.options.crs.wrapLatLng(le(r));
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring that
      // its center is within the CRS's bounds.
      // By default this means the center longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees, and the majority of the bounds
      // overlaps the CRS's bounds.
      wrapLatLngBounds: function(r) {
        return this.options.crs.wrapLatLngBounds(ae(r));
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates according to
      // the map's CRS. By default this measures distance in meters.
      distance: function(r, o) {
        return this.options.crs.distance(le(r), le(o));
      },
      // @method containerPointToLayerPoint(point: Point): Point
      // Given a pixel coordinate relative to the map container, returns the corresponding
      // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
      containerPointToLayerPoint: function(r) {
        return U(r).subtract(this._getMapPanePos());
      },
      // @method layerPointToContainerPoint(point: Point): Point
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding pixel coordinate relative to the map container.
      layerPointToContainerPoint: function(r) {
        return U(r).add(this._getMapPanePos());
      },
      // @method containerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the map container, returns
      // the corresponding geographical coordinate (for the current zoom level).
      containerPointToLatLng: function(r) {
        var o = this.containerPointToLayerPoint(U(r));
        return this.layerPointToLatLng(o);
      },
      // @method latLngToContainerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the map container.
      latLngToContainerPoint: function(r) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(le(r)));
      },
      // @method mouseEventToContainerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to the
      // map container where the event took place.
      mouseEventToContainerPoint: function(r) {
        return C(r, this._container);
      },
      // @method mouseEventToLayerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to
      // the [origin pixel](#map-getpixelorigin) where the event took place.
      mouseEventToLayerPoint: function(r) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(r));
      },
      // @method mouseEventToLatLng(ev: MouseEvent): LatLng
      // Given a MouseEvent object, returns geographical coordinate where the
      // event took place.
      mouseEventToLatLng: function(r) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(r));
      },
      // map initialization methods
      _initContainer: function(r) {
        var o = this._container = Ls(r);
        if (o) {
          if (o._leaflet_id)
            throw new Error("Map container is already initialized.");
        } else
          throw new Error("Map container not found.");
        ue(o, "scroll", this._onScroll, this), this._containerId = m(o);
      },
      _initLayout: function() {
        var r = this._container;
        this._fadeAnimated = this.options.fadeAnimation && X.any3d, de(r, "leaflet-container" + (X.touch ? " leaflet-touch" : "") + (X.retina ? " leaflet-retina" : "") + (X.ielt9 ? " leaflet-oldie" : "") + (X.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var o = Qr(r, "position");
        o !== "absolute" && o !== "relative" && o !== "fixed" && o !== "sticky" && (r.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      },
      _initPanes: function() {
        var r = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), He(this._mapPane, new R(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (de(r.markerPane, "leaflet-zoom-hide"), de(r.shadowPane, "leaflet-zoom-hide"));
      },
      // private methods that modify map state
      // @section Map state change events
      _resetView: function(r, o, s) {
        He(this._mapPane, new R(0, 0));
        var u = !this._loaded;
        this._loaded = !0, o = this._limitZoom(o), this.fire("viewprereset");
        var d = this._zoom !== o;
        this._moveStart(d, s)._move(r, o)._moveEnd(d), this.fire("viewreset"), u && this.fire("load");
      },
      _moveStart: function(r, o) {
        return r && this.fire("zoomstart"), o || this.fire("movestart"), this;
      },
      _move: function(r, o, s, u) {
        o === void 0 && (o = this._zoom);
        var d = this._zoom !== o;
        return this._zoom = o, this._lastCenter = r, this._pixelOrigin = this._getNewPixelOrigin(r), u ? s && s.pinch && this.fire("zoom", s) : ((d || s && s.pinch) && this.fire("zoom", s), this.fire("move", s)), this;
      },
      _moveEnd: function(r) {
        return r && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function() {
        return Ee(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function(r) {
        He(this._mapPane, this._getMapPanePos().subtract(r));
      },
      _getZoomSpan: function() {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function() {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function() {
        if (!this._loaded)
          throw new Error("Set map center and zoom first.");
      },
      // DOM event handling
      // @section Interaction events
      _initEvents: function(r) {
        this._targets = {}, this._targets[m(this._container)] = this;
        var o = r ? Ce : ue;
        o(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && o(window, "resize", this._onResize, this), X.any3d && this.options.transform3DLimit && (r ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function() {
        Ee(this._resizeRequest), this._resizeRequest = ce(
          function() {
            this.invalidateSize({ debounceMoveend: !0 });
          },
          this
        );
      },
      _onScroll: function() {
        this._container.scrollTop = 0, this._container.scrollLeft = 0;
      },
      _onMoveEnd: function() {
        var r = this._getMapPanePos();
        Math.max(Math.abs(r.x), Math.abs(r.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function(r, o) {
        for (var s = [], u, d = o === "mouseout" || o === "mouseover", g = r.target || r.srcElement, E = !1; g; ) {
          if (u = this._targets[m(g)], u && (o === "click" || o === "preclick") && this._draggableMoved(u)) {
            E = !0;
            break;
          }
          if (u && u.listens(o, !0) && (d && !ke(g, r) || (s.push(u), d)) || g === this._container)
            break;
          g = g.parentNode;
        }
        return !s.length && !E && !d && this.listens(o, !0) && (s = [this]), s;
      },
      _isClickDisabled: function(r) {
        for (; r && r !== this._container; ) {
          if (r._leaflet_disable_click)
            return !0;
          r = r.parentNode;
        }
      },
      _handleDOMEvent: function(r) {
        var o = r.target || r.srcElement;
        if (!(!this._loaded || o._leaflet_disable_events || r.type === "click" && this._isClickDisabled(o))) {
          var s = r.type;
          s === "mousedown" && ea(o), this._fireDOMEvent(r, s);
        }
      },
      _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
      _fireDOMEvent: function(r, o, s) {
        if (r.type === "click") {
          var u = a({}, r);
          u.type = "preclick", this._fireDOMEvent(u, u.type, s);
        }
        var d = this._findEventTargets(r, o);
        if (s) {
          for (var g = [], E = 0; E < s.length; E++)
            s[E].listens(o, !0) && g.push(s[E]);
          d = g.concat(d);
        }
        if (d.length) {
          o === "contextmenu" && nt(r);
          var M = d[0], N = {
            originalEvent: r
          };
          if (r.type !== "keypress" && r.type !== "keydown" && r.type !== "keyup") {
            var D = M.getLatLng && (!M._radius || M._radius <= 10);
            N.containerPoint = D ? this.latLngToContainerPoint(M.getLatLng()) : this.mouseEventToContainerPoint(r), N.layerPoint = this.containerPointToLayerPoint(N.containerPoint), N.latlng = D ? M.getLatLng() : this.layerPointToLatLng(N.layerPoint);
          }
          for (E = 0; E < d.length; E++)
            if (d[E].fire(o, N, !0), N.originalEvent._stopped || d[E].options.bubblingMouseEvents === !1 && $(this._mouseEvents, o) !== -1)
              return;
        }
      },
      _draggableMoved: function(r) {
        return r = r.dragging && r.dragging.enabled() ? r : this, r.dragging && r.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      },
      _clearHandlers: function() {
        for (var r = 0, o = this._handlers.length; r < o; r++)
          this._handlers[r].disable();
      },
      // @section Other Methods
      // @method whenReady(fn: Function, context?: Object): this
      // Runs the given function `fn` when the map gets initialized with
      // a view (center and zoom) and at least one layer, or immediately
      // if it's already initialized, optionally passing a function context.
      whenReady: function(r, o) {
        return this._loaded ? r.call(o || this, { target: this }) : this.on("load", r, o), this;
      },
      // private methods for getting map state
      _getMapPanePos: function() {
        return In(this._mapPane) || new R(0, 0);
      },
      _moved: function() {
        var r = this._getMapPanePos();
        return r && !r.equals([0, 0]);
      },
      _getTopLeftPoint: function(r, o) {
        var s = r && o !== void 0 ? this._getNewPixelOrigin(r, o) : this.getPixelOrigin();
        return s.subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function(r, o) {
        var s = this.getSize()._divideBy(2);
        return this.project(r, o)._subtract(s)._add(this._getMapPanePos())._round();
      },
      _latLngToNewLayerPoint: function(r, o, s) {
        var u = this._getNewPixelOrigin(s, o);
        return this.project(r, o)._subtract(u);
      },
      _latLngBoundsToNewLayerBounds: function(r, o, s) {
        var u = this._getNewPixelOrigin(s, o);
        return me([
          this.project(r.getSouthWest(), o)._subtract(u),
          this.project(r.getNorthWest(), o)._subtract(u),
          this.project(r.getSouthEast(), o)._subtract(u),
          this.project(r.getNorthEast(), o)._subtract(u)
        ]);
      },
      // layer point of the current center
      _getCenterLayerPoint: function() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      // offset of the specified place to the current center in pixels
      _getCenterOffset: function(r) {
        return this.latLngToLayerPoint(r).subtract(this._getCenterLayerPoint());
      },
      // adjust center for view to get inside bounds
      _limitCenter: function(r, o, s) {
        if (!s)
          return r;
        var u = this.project(r, o), d = this.getSize().divideBy(2), g = new K(u.subtract(d), u.add(d)), E = this._getBoundsOffset(g, s, o);
        return Math.abs(E.x) <= 1 && Math.abs(E.y) <= 1 ? r : this.unproject(u.add(E), o);
      },
      // adjust offset for view to get inside bounds
      _limitOffset: function(r, o) {
        if (!o)
          return r;
        var s = this.getPixelBounds(), u = new K(s.min.add(r), s.max.add(r));
        return r.add(this._getBoundsOffset(u, o));
      },
      // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
      _getBoundsOffset: function(r, o, s) {
        var u = me(
          this.project(o.getNorthEast(), s),
          this.project(o.getSouthWest(), s)
        ), d = u.min.subtract(r.min), g = u.max.subtract(r.max), E = this._rebound(d.x, -g.x), M = this._rebound(d.y, -g.y);
        return new R(E, M);
      },
      _rebound: function(r, o) {
        return r + o > 0 ? Math.round(r - o) / 2 : Math.max(0, Math.ceil(r)) - Math.max(0, Math.floor(o));
      },
      _limitZoom: function(r) {
        var o = this.getMinZoom(), s = this.getMaxZoom(), u = X.any3d ? this.options.zoomSnap : 1;
        return u && (r = Math.round(r / u) * u), Math.max(o, Math.min(s, r));
      },
      _onPanTransitionStep: function() {
        this.fire("move");
      },
      _onPanTransitionEnd: function() {
        Re(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function(r, o) {
        var s = this._getCenterOffset(r)._trunc();
        return (o && o.animate) !== !0 && !this.getSize().contains(s) ? !1 : (this.panBy(s, o), !0);
      },
      _createAnimProxy: function() {
        var r = this._proxy = Se("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(r), this.on("zoomanim", function(o) {
          var s = Jo, u = this._proxy.style[s];
          Qn(this._proxy, this.project(o.center, o.zoom), this.getZoomScale(o.zoom, 1)), u === this._proxy.style[s] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function() {
        ze(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      },
      _animMoveEnd: function() {
        var r = this.getCenter(), o = this.getZoom();
        Qn(this._proxy, this.project(r, o), this.getZoomScale(o, 1));
      },
      _catchTransitionEnd: function(r) {
        this._animatingZoom && r.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      },
      _tryAnimatedZoom: function(r, o, s) {
        if (this._animatingZoom)
          return !0;
        if (s = s || {}, !this._zoomAnimated || s.animate === !1 || this._nothingToAnimate() || Math.abs(o - this._zoom) > this.options.zoomAnimationThreshold)
          return !1;
        var u = this.getZoomScale(o), d = this._getCenterOffset(r)._divideBy(1 - 1 / u);
        return s.animate !== !0 && !this.getSize().contains(d) ? !1 : (ce(function() {
          this._moveStart(!0, s.noMoveStart || !1)._animateZoom(r, o, !0);
        }, this), !0);
      },
      _animateZoom: function(r, o, s, u) {
        this._mapPane && (s && (this._animatingZoom = !0, this._animateToCenter = r, this._animateToZoom = o, de(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
          center: r,
          zoom: o,
          noUpdate: u
        }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(c(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && Re(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
      }
    });
    function rt(r, o) {
      return new ne(r, o);
    }
    var Pe = st.extend({
      // @section
      // @aka Control Options
      options: {
        // @option position: String = 'topright'
        // The position of the control (one of the map corners). Possible values are `'topleft'`,
        // `'topright'`, `'bottomleft'` or `'bottomright'`
        position: "topright"
      },
      initialize: function(r) {
        T(this, r);
      },
      /* @section
       * Classes extending L.Control will inherit the following methods:
       *
       * @method getPosition: string
       * Returns the position of the control.
       */
      getPosition: function() {
        return this.options.position;
      },
      // @method setPosition(position: string): this
      // Sets the position of the control.
      setPosition: function(r) {
        var o = this._map;
        return o && o.removeControl(this), this.options.position = r, o && o.addControl(this), this;
      },
      // @method getContainer: HTMLElement
      // Returns the HTMLElement that contains the control.
      getContainer: function() {
        return this._container;
      },
      // @method addTo(map: Map): this
      // Adds the control to the given map.
      addTo: function(r) {
        this.remove(), this._map = r;
        var o = this._container = this.onAdd(r), s = this.getPosition(), u = r._controlCorners[s];
        return de(o, "leaflet-control"), s.indexOf("bottom") !== -1 ? u.insertBefore(o, u.firstChild) : u.appendChild(o), this._map.on("unload", this.remove, this), this;
      },
      // @method remove: this
      // Removes the control from the map it is currently active on.
      remove: function() {
        return this._map ? (ze(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
      },
      _refocusOnMap: function(r) {
        this._map && r && r.screenX > 0 && r.screenY > 0 && this._map.getContainer().focus();
      }
    }), it = function(r) {
      return new Pe(r);
    };
    ne.include({
      // @method addControl(control: Control): this
      // Adds the given control to the map
      addControl: function(r) {
        return r.addTo(this), this;
      },
      // @method removeControl(control: Control): this
      // Removes the given control from the map
      removeControl: function(r) {
        return r.remove(), this;
      },
      _initControlPos: function() {
        var r = this._controlCorners = {}, o = "leaflet-", s = this._controlContainer = Se("div", o + "control-container", this._container);
        function u(d, g) {
          var E = o + d + " " + o + g;
          r[d + g] = Se("div", E, s);
        }
        u("top", "left"), u("top", "right"), u("bottom", "left"), u("bottom", "right");
      },
      _clearControlPos: function() {
        for (var r in this._controlCorners)
          ze(this._controlCorners[r]);
        ze(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      }
    });
    var Dt = Pe.extend({
      // @section
      // @aka Control.Layers options
      options: {
        // @option collapsed: Boolean = true
        // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
        collapsed: !0,
        position: "topright",
        // @option autoZIndex: Boolean = true
        // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
        autoZIndex: !0,
        // @option hideSingleBase: Boolean = false
        // If `true`, the base layers in the control will be hidden when there is only one.
        hideSingleBase: !1,
        // @option sortLayers: Boolean = false
        // Whether to sort the layers. When `false`, layers will keep the order
        // in which they were added to the control.
        sortLayers: !1,
        // @option sortFunction: Function = *
        // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
        // that will be used for sorting the layers, when `sortLayers` is `true`.
        // The function receives both the `L.Layer` instances and their names, as in
        // `sortFunction(layerA, layerB, nameA, nameB)`.
        // By default, it sorts layers alphabetically by their name.
        sortFunction: function(r, o, s, u) {
          return s < u ? -1 : u < s ? 1 : 0;
        }
      },
      initialize: function(r, o, s) {
        T(this, s), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
        for (var u in r)
          this._addLayer(r[u], u);
        for (u in o)
          this._addLayer(o[u], u, !0);
      },
      onAdd: function(r) {
        this._initLayout(), this._update(), this._map = r, r.on("zoomend", this._checkDisabledLayers, this);
        for (var o = 0; o < this._layers.length; o++)
          this._layers[o].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      },
      addTo: function(r) {
        return Pe.prototype.addTo.call(this, r), this._expandIfNotCollapsed();
      },
      onRemove: function() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var r = 0; r < this._layers.length; r++)
          this._layers[r].layer.off("add remove", this._onLayerChange, this);
      },
      // @method addBaseLayer(layer: Layer, name: String): this
      // Adds a base layer (radio button entry) with the given name to the control.
      addBaseLayer: function(r, o) {
        return this._addLayer(r, o), this._map ? this._update() : this;
      },
      // @method addOverlay(layer: Layer, name: String): this
      // Adds an overlay (checkbox entry) with the given name to the control.
      addOverlay: function(r, o) {
        return this._addLayer(r, o, !0), this._map ? this._update() : this;
      },
      // @method removeLayer(layer: Layer): this
      // Remove the given layer from the control.
      removeLayer: function(r) {
        r.off("add remove", this._onLayerChange, this);
        var o = this._getLayer(m(r));
        return o && this._layers.splice(this._layers.indexOf(o), 1), this._map ? this._update() : this;
      },
      // @method expand(): this
      // Expand the control container if collapsed.
      expand: function() {
        de(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var r = this._map.getSize().y - (this._container.offsetTop + 50);
        return r < this._section.clientHeight ? (de(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = r + "px") : Re(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      },
      // @method collapse(): this
      // Collapse the control container if expanded.
      collapse: function() {
        return Re(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function() {
        var r = "leaflet-control-layers", o = this._container = Se("div", r), s = this.options.collapsed;
        o.setAttribute("aria-haspopup", !0), ti(o), Bi(o);
        var u = this._section = Se("section", r + "-list");
        s && (this._map.on("click", this.collapse, this), ue(o, {
          mouseenter: this._expandSafely,
          mouseleave: this.collapse
        }, this));
        var d = this._layersLink = Se("a", r + "-toggle", o);
        d.href = "#", d.title = "Layers", d.setAttribute("role", "button"), ue(d, {
          keydown: function(g) {
            g.keyCode === 13 && this._expandSafely();
          },
          // Certain screen readers intercept the key event and instead send a click event
          click: function(g) {
            nt(g), this._expandSafely();
          }
        }, this), s || this.expand(), this._baseLayersList = Se("div", r + "-base", u), this._separator = Se("div", r + "-separator", u), this._overlaysList = Se("div", r + "-overlays", u), o.appendChild(u);
      },
      _getLayer: function(r) {
        for (var o = 0; o < this._layers.length; o++)
          if (this._layers[o] && m(this._layers[o].layer) === r)
            return this._layers[o];
      },
      _addLayer: function(r, o, s) {
        this._map && r.on("add remove", this._onLayerChange, this), this._layers.push({
          layer: r,
          name: o,
          overlay: s
        }), this.options.sortLayers && this._layers.sort(c(function(u, d) {
          return this.options.sortFunction(u.layer, d.layer, u.name, d.name);
        }, this)), this.options.autoZIndex && r.setZIndex && (this._lastZIndex++, r.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      },
      _update: function() {
        if (!this._container)
          return this;
        bi(this._baseLayersList), bi(this._overlaysList), this._layerControlInputs = [];
        var r, o, s, u, d = 0;
        for (s = 0; s < this._layers.length; s++)
          u = this._layers[s], this._addItem(u), o = o || u.overlay, r = r || !u.overlay, d += u.overlay ? 0 : 1;
        return this.options.hideSingleBase && (r = r && d > 1, this._baseLayersList.style.display = r ? "" : "none"), this._separator.style.display = o && r ? "" : "none", this;
      },
      _onLayerChange: function(r) {
        this._handlingClick || this._update();
        var o = this._getLayer(m(r.target)), s = o.overlay ? r.type === "add" ? "overlayadd" : "overlayremove" : r.type === "add" ? "baselayerchange" : null;
        s && this._map.fire(s, o);
      },
      // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
      _createRadioElement: function(r, o) {
        var s = '<input type="radio" class="leaflet-control-layers-selector" name="' + r + '"' + (o ? ' checked="checked"' : "") + "/>", u = document.createElement("div");
        return u.innerHTML = s, u.firstChild;
      },
      _addItem: function(r) {
        var o = document.createElement("label"), s = this._map.hasLayer(r.layer), u;
        r.overlay ? (u = document.createElement("input"), u.type = "checkbox", u.className = "leaflet-control-layers-selector", u.defaultChecked = s) : u = this._createRadioElement("leaflet-base-layers_" + m(this), s), this._layerControlInputs.push(u), u.layerId = m(r.layer), ue(u, "click", this._onInputClick, this);
        var d = document.createElement("span");
        d.innerHTML = " " + r.name;
        var g = document.createElement("span");
        o.appendChild(g), g.appendChild(u), g.appendChild(d);
        var E = r.overlay ? this._overlaysList : this._baseLayersList;
        return E.appendChild(o), this._checkDisabledLayers(), o;
      },
      _onInputClick: function() {
        if (!this._preventClick) {
          var r = this._layerControlInputs, o, s, u = [], d = [];
          this._handlingClick = !0;
          for (var g = r.length - 1; g >= 0; g--)
            o = r[g], s = this._getLayer(o.layerId).layer, o.checked ? u.push(s) : o.checked || d.push(s);
          for (g = 0; g < d.length; g++)
            this._map.hasLayer(d[g]) && this._map.removeLayer(d[g]);
          for (g = 0; g < u.length; g++)
            this._map.hasLayer(u[g]) || this._map.addLayer(u[g]);
          this._handlingClick = !1, this._refocusOnMap();
        }
      },
      _checkDisabledLayers: function() {
        for (var r = this._layerControlInputs, o, s, u = this._map.getZoom(), d = r.length - 1; d >= 0; d--)
          o = r[d], s = this._getLayer(o.layerId).layer, o.disabled = s.options.minZoom !== void 0 && u < s.options.minZoom || s.options.maxZoom !== void 0 && u > s.options.maxZoom;
      },
      _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expandSafely: function() {
        var r = this._section;
        this._preventClick = !0, ue(r, "click", nt), this.expand();
        var o = this;
        setTimeout(function() {
          Ce(r, "click", nt), o._preventClick = !1;
        });
      }
    }), ut = function(r, o, s) {
      return new Dt(r, o, s);
    }, St = Pe.extend({
      // @section
      // @aka Control.Zoom options
      options: {
        position: "topleft",
        // @option zoomInText: String = '<span aria-hidden="true">+</span>'
        // The text set on the 'zoom in' button.
        zoomInText: '<span aria-hidden="true">+</span>',
        // @option zoomInTitle: String = 'Zoom in'
        // The title set on the 'zoom in' button.
        zoomInTitle: "Zoom in",
        // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
        // The text set on the 'zoom out' button.
        zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
        // @option zoomOutTitle: String = 'Zoom out'
        // The title set on the 'zoom out' button.
        zoomOutTitle: "Zoom out"
      },
      onAdd: function(r) {
        var o = "leaflet-control-zoom", s = Se("div", o + " leaflet-bar"), u = this.options;
        return this._zoomInButton = this._createButton(
          u.zoomInText,
          u.zoomInTitle,
          o + "-in",
          s,
          this._zoomIn
        ), this._zoomOutButton = this._createButton(
          u.zoomOutText,
          u.zoomOutTitle,
          o + "-out",
          s,
          this._zoomOut
        ), this._updateDisabled(), r.on("zoomend zoomlevelschange", this._updateDisabled, this), s;
      },
      onRemove: function(r) {
        r.off("zoomend zoomlevelschange", this._updateDisabled, this);
      },
      disable: function() {
        return this._disabled = !0, this._updateDisabled(), this;
      },
      enable: function() {
        return this._disabled = !1, this._updateDisabled(), this;
      },
      _zoomIn: function(r) {
        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (r.shiftKey ? 3 : 1));
      },
      _zoomOut: function(r) {
        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (r.shiftKey ? 3 : 1));
      },
      _createButton: function(r, o, s, u, d) {
        var g = Se("a", s, u);
        return g.innerHTML = r, g.href = "#", g.title = o, g.setAttribute("role", "button"), g.setAttribute("aria-label", o), ti(g), ue(g, "click", Xn), ue(g, "click", d, this), ue(g, "click", this._refocusOnMap, this), g;
      },
      _updateDisabled: function() {
        var r = this._map, o = "leaflet-disabled";
        Re(this._zoomInButton, o), Re(this._zoomOutButton, o), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || r._zoom === r.getMinZoom()) && (de(this._zoomOutButton, o), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || r._zoom === r.getMaxZoom()) && (de(this._zoomInButton, o), this._zoomInButton.setAttribute("aria-disabled", "true"));
      }
    });
    ne.mergeOptions({
      zoomControl: !0
    }), ne.addInitHook(function() {
      this.options.zoomControl && (this.zoomControl = new St(), this.addControl(this.zoomControl));
    });
    var jt = function(r) {
      return new St(r);
    }, En = Pe.extend({
      // @section
      // @aka Control.Scale options
      options: {
        position: "bottomleft",
        // @option maxWidth: Number = 100
        // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
        maxWidth: 100,
        // @option metric: Boolean = True
        // Whether to show the metric scale line (m/km).
        metric: !0,
        // @option imperial: Boolean = True
        // Whether to show the imperial scale line (mi/ft).
        imperial: !0
        // @option updateWhenIdle: Boolean = false
        // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
      },
      onAdd: function(r) {
        var o = "leaflet-control-scale", s = Se("div", o), u = this.options;
        return this._addScales(u, o + "-line", s), r.on(u.updateWhenIdle ? "moveend" : "move", this._update, this), r.whenReady(this._update, this), s;
      },
      onRemove: function(r) {
        r.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      },
      _addScales: function(r, o, s) {
        r.metric && (this._mScale = Se("div", o, s)), r.imperial && (this._iScale = Se("div", o, s));
      },
      _update: function() {
        var r = this._map, o = r.getSize().y / 2, s = r.distance(
          r.containerPointToLatLng([0, o]),
          r.containerPointToLatLng([this.options.maxWidth, o])
        );
        this._updateScales(s);
      },
      _updateScales: function(r) {
        this.options.metric && r && this._updateMetric(r), this.options.imperial && r && this._updateImperial(r);
      },
      _updateMetric: function(r) {
        var o = this._getRoundNum(r), s = o < 1e3 ? o + " m" : o / 1e3 + " km";
        this._updateScale(this._mScale, s, o / r);
      },
      _updateImperial: function(r) {
        var o = r * 3.2808399, s, u, d;
        o > 5280 ? (s = o / 5280, u = this._getRoundNum(s), this._updateScale(this._iScale, u + " mi", u / s)) : (d = this._getRoundNum(o), this._updateScale(this._iScale, d + " ft", d / o));
      },
      _updateScale: function(r, o, s) {
        r.style.width = Math.round(this.options.maxWidth * s) + "px", r.innerHTML = o;
      },
      _getRoundNum: function(r) {
        var o = Math.pow(10, (Math.floor(r) + "").length - 1), s = r / o;
        return s = s >= 10 ? 10 : s >= 5 ? 5 : s >= 3 ? 3 : s >= 2 ? 2 : 1, o * s;
      }
    }), Ln = function(r) {
      return new En(r);
    }, er = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Di = Pe.extend({
      // @section
      // @aka Control.Attribution options
      options: {
        position: "bottomright",
        // @option prefix: String|false = 'Leaflet'
        // The HTML text shown before the attributions. Pass `false` to disable.
        prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (X.inlineSvg ? er + " " : "") + "Leaflet</a>"
      },
      initialize: function(r) {
        T(this, r), this._attributions = {};
      },
      onAdd: function(r) {
        r.attributionControl = this, this._container = Se("div", "leaflet-control-attribution"), ti(this._container);
        for (var o in r._layers)
          r._layers[o].getAttribution && this.addAttribution(r._layers[o].getAttribution());
        return this._update(), r.on("layeradd", this._addAttribution, this), this._container;
      },
      onRemove: function(r) {
        r.off("layeradd", this._addAttribution, this);
      },
      _addAttribution: function(r) {
        r.layer.getAttribution && (this.addAttribution(r.layer.getAttribution()), r.layer.once("remove", function() {
          this.removeAttribution(r.layer.getAttribution());
        }, this));
      },
      // @method setPrefix(prefix: String|false): this
      // The HTML text shown before the attributions. Pass `false` to disable.
      setPrefix: function(r) {
        return this.options.prefix = r, this._update(), this;
      },
      // @method addAttribution(text: String): this
      // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
      addAttribution: function(r) {
        return r ? (this._attributions[r] || (this._attributions[r] = 0), this._attributions[r]++, this._update(), this) : this;
      },
      // @method removeAttribution(text: String): this
      // Removes an attribution text.
      removeAttribution: function(r) {
        return r ? (this._attributions[r] && (this._attributions[r]--, this._update()), this) : this;
      },
      _update: function() {
        if (this._map) {
          var r = [];
          for (var o in this._attributions)
            this._attributions[o] && r.push(o);
          var s = [];
          this.options.prefix && s.push(this.options.prefix), r.length && s.push(r.join(", ")), this._container.innerHTML = s.join(' <span aria-hidden="true">|</span> ');
        }
      }
    });
    ne.mergeOptions({
      attributionControl: !0
    }), ne.addInitHook(function() {
      this.options.attributionControl && new Di().addTo(this);
    });
    var ji = function(r) {
      return new Di(r);
    };
    Pe.Layers = Dt, Pe.Zoom = St, Pe.Scale = En, Pe.Attribution = Di, it.layers = ut, it.zoom = jt, it.scale = Ln, it.attribution = ji;
    var bt = st.extend({
      initialize: function(r) {
        this._map = r;
      },
      // @method enable(): this
      // Enables the handler
      enable: function() {
        return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
      },
      // @method disable(): this
      // Disables the handler
      disable: function() {
        return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
      },
      // @method enabled(): Boolean
      // Returns `true` if the handler is enabled
      enabled: function() {
        return !!this._enabled;
      }
      // @section Extension methods
      // Classes inheriting from `Handler` must implement the two following methods:
      // @method addHooks()
      // Called when the handler is enabled, should add event hooks.
      // @method removeHooks()
      // Called when the handler is disabled, should remove the event hooks added previously.
    });
    bt.addTo = function(r, o) {
      return r.addHandler(o, this), this;
    };
    var uv = { Events: Ue }, kh = X.touch ? "touchstart mousedown" : "mousedown", xr = It.extend({
      options: {
        // @section
        // @aka Draggable options
        // @option clickTolerance: Number = 3
        // The max number of pixels a user can shift the mouse pointer during a click
        // for it to be considered a valid click (as opposed to a mouse drag).
        clickTolerance: 3
      },
      // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
      // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
      initialize: function(r, o, s, u) {
        T(this, u), this._element = r, this._dragStartTarget = o || r, this._preventOutline = s;
      },
      // @method enable()
      // Enables the dragging ability
      enable: function() {
        this._enabled || (ue(this._dragStartTarget, kh, this._onDown, this), this._enabled = !0);
      },
      // @method disable()
      // Disables the dragging ability
      disable: function() {
        this._enabled && (xr._dragging === this && this.finishDrag(!0), Ce(this._dragStartTarget, kh, this._onDown, this), this._enabled = !1, this._moved = !1);
      },
      _onDown: function(r) {
        if (this._enabled && (this._moved = !1, !Yn(this._element, "leaflet-zoom-anim"))) {
          if (r.touches && r.touches.length !== 1) {
            xr._dragging === this && this.finishDrag();
            return;
          }
          if (!(xr._dragging || r.shiftKey || r.which !== 1 && r.button !== 1 && !r.touches) && (xr._dragging = this, this._preventOutline && ea(this._element), cn(), Rn(), !this._moving)) {
            this.fire("down");
            var o = r.touches ? r.touches[0] : r, s = Bn(this._element);
            this._startPoint = new R(o.clientX, o.clientY), this._startPos = In(this._element), this._parentScale = Ni(s);
            var u = r.type === "mousedown";
            ue(document, u ? "mousemove" : "touchmove", this._onMove, this), ue(document, u ? "mouseup" : "touchend touchcancel", this._onUp, this);
          }
        }
      },
      _onMove: function(r) {
        if (this._enabled) {
          if (r.touches && r.touches.length > 1) {
            this._moved = !0;
            return;
          }
          var o = r.touches && r.touches.length === 1 ? r.touches[0] : r, s = new R(o.clientX, o.clientY)._subtract(this._startPoint);
          !s.x && !s.y || Math.abs(s.x) + Math.abs(s.y) < this.options.clickTolerance || (s.x /= this._parentScale.x, s.y /= this._parentScale.y, nt(r), this._moved || (this.fire("dragstart"), this._moved = !0, de(document.body, "leaflet-dragging"), this._lastTarget = r.target || r.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), de(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(s), this._moving = !0, this._lastEvent = r, this._updatePosition());
        }
      },
      _updatePosition: function() {
        var r = { originalEvent: this._lastEvent };
        this.fire("predrag", r), He(this._element, this._newPos), this.fire("drag", r);
      },
      _onUp: function() {
        this._enabled && this.finishDrag();
      },
      finishDrag: function(r) {
        Re(document.body, "leaflet-dragging"), this._lastTarget && (Re(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), Ce(document, "mousemove touchmove", this._onMove, this), Ce(document, "mouseup touchend touchcancel", this._onUp, this), Qo(), un();
        var o = this._moved && this._moving;
        this._moving = !1, xr._dragging = !1, o && this.fire("dragend", {
          noInertia: r,
          distance: this._newPos.distanceTo(this._startPos)
        });
      }
    });
    function bh(r, o, s) {
      var u, d = [1, 4, 2, 8], g, E, M, N, D, H, se, ye;
      for (g = 0, H = r.length; g < H; g++)
        r[g]._code = ni(r[g], o);
      for (M = 0; M < 4; M++) {
        for (se = d[M], u = [], g = 0, H = r.length, E = H - 1; g < H; E = g++)
          N = r[g], D = r[E], N._code & se ? D._code & se || (ye = Os(D, N, se, o, s), ye._code = ni(ye, o), u.push(ye)) : (D._code & se && (ye = Os(D, N, se, o, s), ye._code = ni(ye, o), u.push(ye)), u.push(N));
        r = u;
      }
      return r;
    }
    function Mh(r, o) {
      var s, u, d, g, E, M, N, D, H;
      if (!r || r.length === 0)
        throw new Error("latlngs not passed");
      dn(r) || (console.warn("latlngs are not flat! Only the first ring will be used"), r = r[0]);
      var se = le([0, 0]), ye = ae(r), Mt = ye.getNorthWest().distanceTo(ye.getSouthWest()) * ye.getNorthEast().distanceTo(ye.getNorthWest());
      Mt < 1700 && (se = wc(r));
      var ct = r.length, hn = [];
      for (s = 0; s < ct; s++) {
        var Ft = le(r[s]);
        hn.push(o.project(le([Ft.lat - se.lat, Ft.lng - se.lng])));
      }
      for (M = N = D = 0, s = 0, u = ct - 1; s < ct; u = s++)
        d = hn[s], g = hn[u], E = d.y * g.x - g.y * d.x, N += (d.x + g.x) * E, D += (d.y + g.y) * E, M += E * 3;
      M === 0 ? H = hn[0] : H = [N / M, D / M];
      var Hi = o.unproject(U(H));
      return le([Hi.lat + se.lat, Hi.lng + se.lng]);
    }
    function wc(r) {
      for (var o = 0, s = 0, u = 0, d = 0; d < r.length; d++) {
        var g = le(r[d]);
        o += g.lat, s += g.lng, u++;
      }
      return le([o / u, s / u]);
    }
    var cv = {
      __proto__: null,
      clipPolygon: bh,
      polygonCenter: Mh,
      centroid: wc
    };
    function Ah(r, o) {
      if (!o || !r.length)
        return r.slice();
      var s = o * o;
      return r = hv(r, s), r = dv(r, s), r;
    }
    function zh(r, o, s) {
      return Math.sqrt(ta(r, o, s, !0));
    }
    function fv(r, o, s) {
      return ta(r, o, s);
    }
    function dv(r, o) {
      var s = r.length, u = typeof Uint8Array != void 0 + "" ? Uint8Array : Array, d = new u(s);
      d[0] = d[s - 1] = 1, Pc(r, d, o, 0, s - 1);
      var g, E = [];
      for (g = 0; g < s; g++)
        d[g] && E.push(r[g]);
      return E;
    }
    function Pc(r, o, s, u, d) {
      var g = 0, E, M, N;
      for (M = u + 1; M <= d - 1; M++)
        N = ta(r[M], r[u], r[d], !0), N > g && (E = M, g = N);
      g > s && (o[E] = 1, Pc(r, o, s, u, E), Pc(r, o, s, E, d));
    }
    function hv(r, o) {
      for (var s = [r[0]], u = 1, d = 0, g = r.length; u < g; u++)
        pv(r[u], r[d]) > o && (s.push(r[u]), d = u);
      return d < g - 1 && s.push(r[g - 1]), s;
    }
    var Nh;
    function $h(r, o, s, u, d) {
      var g = u ? Nh : ni(r, s), E = ni(o, s), M, N, D;
      for (Nh = E; ; ) {
        if (!(g | E))
          return [r, o];
        if (g & E)
          return !1;
        M = g || E, N = Os(r, o, M, s, d), D = ni(N, s), M === g ? (r = N, g = D) : (o = N, E = D);
      }
    }
    function Os(r, o, s, u, d) {
      var g = o.x - r.x, E = o.y - r.y, M = u.min, N = u.max, D, H;
      return s & 8 ? (D = r.x + g * (N.y - r.y) / E, H = N.y) : s & 4 ? (D = r.x + g * (M.y - r.y) / E, H = M.y) : s & 2 ? (D = N.x, H = r.y + E * (N.x - r.x) / g) : s & 1 && (D = M.x, H = r.y + E * (M.x - r.x) / g), new R(D, H, d);
    }
    function ni(r, o) {
      var s = 0;
      return r.x < o.min.x ? s |= 1 : r.x > o.max.x && (s |= 2), r.y < o.min.y ? s |= 4 : r.y > o.max.y && (s |= 8), s;
    }
    function pv(r, o) {
      var s = o.x - r.x, u = o.y - r.y;
      return s * s + u * u;
    }
    function ta(r, o, s, u) {
      var d = o.x, g = o.y, E = s.x - d, M = s.y - g, N = E * E + M * M, D;
      return N > 0 && (D = ((r.x - d) * E + (r.y - g) * M) / N, D > 1 ? (d = s.x, g = s.y) : D > 0 && (d += E * D, g += M * D)), E = r.x - d, M = r.y - g, u ? E * E + M * M : new R(d, g);
    }
    function dn(r) {
      return !x(r[0]) || typeof r[0][0] != "object" && typeof r[0][0] < "u";
    }
    function Ih(r) {
      return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), dn(r);
    }
    function Rh(r, o) {
      var s, u, d, g, E, M, N, D;
      if (!r || r.length === 0)
        throw new Error("latlngs not passed");
      dn(r) || (console.warn("latlngs are not flat! Only the first ring will be used"), r = r[0]);
      var H = le([0, 0]), se = ae(r), ye = se.getNorthWest().distanceTo(se.getSouthWest()) * se.getNorthEast().distanceTo(se.getNorthWest());
      ye < 1700 && (H = wc(r));
      var Mt = r.length, ct = [];
      for (s = 0; s < Mt; s++) {
        var hn = le(r[s]);
        ct.push(o.project(le([hn.lat - H.lat, hn.lng - H.lng])));
      }
      for (s = 0, u = 0; s < Mt - 1; s++)
        u += ct[s].distanceTo(ct[s + 1]) / 2;
      if (u === 0)
        D = ct[0];
      else
        for (s = 0, g = 0; s < Mt - 1; s++)
          if (E = ct[s], M = ct[s + 1], d = E.distanceTo(M), g += d, g > u) {
            N = (g - u) / d, D = [
              M.x - N * (M.x - E.x),
              M.y - N * (M.y - E.y)
            ];
            break;
          }
      var Ft = o.unproject(U(D));
      return le([Ft.lat + H.lat, Ft.lng + H.lng]);
    }
    var mv = {
      __proto__: null,
      simplify: Ah,
      pointToSegmentDistance: zh,
      closestPointOnSegment: fv,
      clipSegment: $h,
      _getEdgeIntersection: Os,
      _getBitCode: ni,
      _sqClosestPointOnSegment: ta,
      isFlat: dn,
      _flat: Ih,
      polylineCenter: Rh
    }, xc = {
      project: function(r) {
        return new R(r.lng, r.lat);
      },
      unproject: function(r) {
        return new Q(r.y, r.x);
      },
      bounds: new K([-180, -90], [180, 90])
    }, Sc = {
      R: 6378137,
      R_MINOR: 6356752314245179e-9,
      bounds: new K([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
      project: function(r) {
        var o = Math.PI / 180, s = this.R, u = r.lat * o, d = this.R_MINOR / s, g = Math.sqrt(1 - d * d), E = g * Math.sin(u), M = Math.tan(Math.PI / 4 - u / 2) / Math.pow((1 - E) / (1 + E), g / 2);
        return u = -s * Math.log(Math.max(M, 1e-10)), new R(r.lng * o * s, u);
      },
      unproject: function(r) {
        for (var o = 180 / Math.PI, s = this.R, u = this.R_MINOR / s, d = Math.sqrt(1 - u * u), g = Math.exp(-r.y / s), E = Math.PI / 2 - 2 * Math.atan(g), M = 0, N = 0.1, D; M < 15 && Math.abs(N) > 1e-7; M++)
          D = d * Math.sin(E), D = Math.pow((1 - D) / (1 + D), d / 2), N = Math.PI / 2 - 2 * Math.atan(g * D) - E, E += N;
        return new Q(E * o, r.x * o / s);
      }
    }, gv = {
      __proto__: null,
      LonLat: xc,
      Mercator: Sc,
      SphericalMercator: Jn
    }, _v = a({}, Qe, {
      code: "EPSG:3395",
      projection: Sc,
      transformation: function() {
        var r = 0.5 / (Math.PI * Sc.R);
        return ln(r, 0.5, -r, 0.5);
      }()
    }), Bh = a({}, Qe, {
      code: "EPSG:4326",
      projection: xc,
      transformation: ln(1 / 180, 1, -1 / 180, 0.5)
    }), yv = a({}, lt, {
      projection: xc,
      transformation: ln(1, 0, -1, 0),
      scale: function(r) {
        return Math.pow(2, r);
      },
      zoom: function(r) {
        return Math.log(r) / Math.LN2;
      },
      distance: function(r, o) {
        var s = o.lng - r.lng, u = o.lat - r.lat;
        return Math.sqrt(s * s + u * u);
      },
      infinite: !0
    });
    lt.Earth = Qe, lt.EPSG3395 = _v, lt.EPSG3857 = _r, lt.EPSG900913 = Wr, lt.EPSG4326 = Bh, lt.Simple = yv;
    var Tn = It.extend({
      // Classes extending `L.Layer` will inherit the following options:
      options: {
        // @option pane: String = 'overlayPane'
        // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
        pane: "overlayPane",
        // @option attribution: String = null
        // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
        attribution: null,
        bubblingMouseEvents: !0
      },
      /* @section
       * Classes extending `L.Layer` will inherit the following methods:
       *
       * @method addTo(map: Map|LayerGroup): this
       * Adds the layer to the given map or layer group.
       */
      addTo: function(r) {
        return r.addLayer(this), this;
      },
      // @method remove: this
      // Removes the layer from the map it is currently active on.
      remove: function() {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      // @method removeFrom(map: Map): this
      // Removes the layer from the given map
      //
      // @alternative
      // @method removeFrom(group: LayerGroup): this
      // Removes the layer from the given `LayerGroup`
      removeFrom: function(r) {
        return r && r.removeLayer(this), this;
      },
      // @method getPane(name? : String): HTMLElement
      // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
      getPane: function(r) {
        return this._map.getPane(r ? this.options[r] || r : this.options.pane);
      },
      addInteractiveTarget: function(r) {
        return this._map._targets[m(r)] = this, this;
      },
      removeInteractiveTarget: function(r) {
        return delete this._map._targets[m(r)], this;
      },
      // @method getAttribution: String
      // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
      getAttribution: function() {
        return this.options.attribution;
      },
      _layerAdd: function(r) {
        var o = r.target;
        if (o.hasLayer(this)) {
          if (this._map = o, this._zoomAnimated = o._zoomAnimated, this.getEvents) {
            var s = this.getEvents();
            o.on(s, this), this.once("remove", function() {
              o.off(s, this);
            }, this);
          }
          this.onAdd(o), this.fire("add"), o.fire("layeradd", { layer: this });
        }
      }
    });
    ne.include({
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the map
      addLayer: function(r) {
        if (!r._layerAdd)
          throw new Error("The provided object is not a Layer.");
        var o = m(r);
        return this._layers[o] ? this : (this._layers[o] = r, r._mapToAdd = this, r.beforeAdd && r.beforeAdd(this), this.whenReady(r._layerAdd, r), this);
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the map.
      removeLayer: function(r) {
        var o = m(r);
        return this._layers[o] ? (this._loaded && r.onRemove(this), delete this._layers[o], this._loaded && (this.fire("layerremove", { layer: r }), r.fire("remove")), r._map = r._mapToAdd = null, this) : this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the map
      hasLayer: function(r) {
        return m(r) in this._layers;
      },
      /* @method eachLayer(fn: Function, context?: Object): this
       * Iterates over the layers of the map, optionally specifying context of the iterator function.
       * ```
       * map.eachLayer(function(layer){
       *     layer.bindPopup('Hello');
       * });
       * ```
       */
      eachLayer: function(r, o) {
        for (var s in this._layers)
          r.call(o, this._layers[s]);
        return this;
      },
      _addLayers: function(r) {
        r = r ? x(r) ? r : [r] : [];
        for (var o = 0, s = r.length; o < s; o++)
          this.addLayer(r[o]);
      },
      _addZoomLimit: function(r) {
        (!isNaN(r.options.maxZoom) || !isNaN(r.options.minZoom)) && (this._zoomBoundLayers[m(r)] = r, this._updateZoomLevels());
      },
      _removeZoomLimit: function(r) {
        var o = m(r);
        this._zoomBoundLayers[o] && (delete this._zoomBoundLayers[o], this._updateZoomLevels());
      },
      _updateZoomLevels: function() {
        var r = 1 / 0, o = -1 / 0, s = this._getZoomSpan();
        for (var u in this._zoomBoundLayers) {
          var d = this._zoomBoundLayers[u].options;
          r = d.minZoom === void 0 ? r : Math.min(r, d.minZoom), o = d.maxZoom === void 0 ? o : Math.max(o, d.maxZoom);
        }
        this._layersMaxZoom = o === -1 / 0 ? void 0 : o, this._layersMinZoom = r === 1 / 0 ? void 0 : r, s !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      }
    });
    var Fi = Tn.extend({
      initialize: function(r, o) {
        T(this, o), this._layers = {};
        var s, u;
        if (r)
          for (s = 0, u = r.length; s < u; s++)
            this.addLayer(r[s]);
      },
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the group.
      addLayer: function(r) {
        var o = this.getLayerId(r);
        return this._layers[o] = r, this._map && this._map.addLayer(r), this;
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the group.
      // @alternative
      // @method removeLayer(id: Number): this
      // Removes the layer with the given internal ID from the group.
      removeLayer: function(r) {
        var o = r in this._layers ? r : this.getLayerId(r);
        return this._map && this._layers[o] && this._map.removeLayer(this._layers[o]), delete this._layers[o], this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the group.
      // @alternative
      // @method hasLayer(id: Number): Boolean
      // Returns `true` if the given internal ID is currently added to the group.
      hasLayer: function(r) {
        var o = typeof r == "number" ? r : this.getLayerId(r);
        return o in this._layers;
      },
      // @method clearLayers(): this
      // Removes all the layers from the group.
      clearLayers: function() {
        return this.eachLayer(this.removeLayer, this);
      },
      // @method invoke(methodName: String, …): this
      // Calls `methodName` on every layer contained in this group, passing any
      // additional parameters. Has no effect if the layers contained do not
      // implement `methodName`.
      invoke: function(r) {
        var o = Array.prototype.slice.call(arguments, 1), s, u;
        for (s in this._layers)
          u = this._layers[s], u[r] && u[r].apply(u, o);
        return this;
      },
      onAdd: function(r) {
        this.eachLayer(r.addLayer, r);
      },
      onRemove: function(r) {
        this.eachLayer(r.removeLayer, r);
      },
      // @method eachLayer(fn: Function, context?: Object): this
      // Iterates over the layers of the group, optionally specifying context of the iterator function.
      // ```js
      // group.eachLayer(function (layer) {
      // 	layer.bindPopup('Hello');
      // });
      // ```
      eachLayer: function(r, o) {
        for (var s in this._layers)
          r.call(o, this._layers[s]);
        return this;
      },
      // @method getLayer(id: Number): Layer
      // Returns the layer with the given internal ID.
      getLayer: function(r) {
        return this._layers[r];
      },
      // @method getLayers(): Layer[]
      // Returns an array of all the layers added to the group.
      getLayers: function() {
        var r = [];
        return this.eachLayer(r.push, r), r;
      },
      // @method setZIndex(zIndex: Number): this
      // Calls `setZIndex` on every layer contained in this group, passing the z-index.
      setZIndex: function(r) {
        return this.invoke("setZIndex", r);
      },
      // @method getLayerId(layer: Layer): Number
      // Returns the internal ID for a layer
      getLayerId: function(r) {
        return m(r);
      }
    }), vv = function(r, o) {
      return new Fi(r, o);
    }, tr = Fi.extend({
      addLayer: function(r) {
        return this.hasLayer(r) ? this : (r.addEventParent(this), Fi.prototype.addLayer.call(this, r), this.fire("layeradd", { layer: r }));
      },
      removeLayer: function(r) {
        return this.hasLayer(r) ? (r in this._layers && (r = this._layers[r]), r.removeEventParent(this), Fi.prototype.removeLayer.call(this, r), this.fire("layerremove", { layer: r })) : this;
      },
      // @method setStyle(style: Path options): this
      // Sets the given path options to each layer of the group that has a `setStyle` method.
      setStyle: function(r) {
        return this.invoke("setStyle", r);
      },
      // @method bringToFront(): this
      // Brings the layer group to the top of all other layers
      bringToFront: function() {
        return this.invoke("bringToFront");
      },
      // @method bringToBack(): this
      // Brings the layer group to the back of all other layers
      bringToBack: function() {
        return this.invoke("bringToBack");
      },
      // @method getBounds(): LatLngBounds
      // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
      getBounds: function() {
        var r = new De();
        for (var o in this._layers) {
          var s = this._layers[o];
          r.extend(s.getBounds ? s.getBounds() : s.getLatLng());
        }
        return r;
      }
    }), wv = function(r, o) {
      return new tr(r, o);
    }, Zi = st.extend({
      /* @section
       * @aka Icon options
       *
       * @option iconUrl: String = null
       * **(required)** The URL to the icon image (absolute or relative to your script path).
       *
       * @option iconRetinaUrl: String = null
       * The URL to a retina sized version of the icon image (absolute or relative to your
       * script path). Used for Retina screen devices.
       *
       * @option iconSize: Point = null
       * Size of the icon image in pixels.
       *
       * @option iconAnchor: Point = null
       * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
       * will be aligned so that this point is at the marker's geographical location. Centered
       * by default if size is specified, also can be set in CSS with negative margins.
       *
       * @option popupAnchor: Point = [0, 0]
       * The coordinates of the point from which popups will "open", relative to the icon anchor.
       *
       * @option tooltipAnchor: Point = [0, 0]
       * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
       *
       * @option shadowUrl: String = null
       * The URL to the icon shadow image. If not specified, no shadow image will be created.
       *
       * @option shadowRetinaUrl: String = null
       *
       * @option shadowSize: Point = null
       * Size of the shadow image in pixels.
       *
       * @option shadowAnchor: Point = null
       * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
       * as iconAnchor if not specified).
       *
       * @option className: String = ''
       * A custom class name to assign to both icon and shadow images. Empty by default.
       */
      options: {
        popupAnchor: [0, 0],
        tooltipAnchor: [0, 0],
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the tiles.
        // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1
      },
      initialize: function(r) {
        T(this, r);
      },
      // @method createIcon(oldIcon?: HTMLElement): HTMLElement
      // Called internally when the icon has to be shown, returns a `<img>` HTML element
      // styled according to the options.
      createIcon: function(r) {
        return this._createIcon("icon", r);
      },
      // @method createShadow(oldIcon?: HTMLElement): HTMLElement
      // As `createIcon`, but for the shadow beneath it.
      createShadow: function(r) {
        return this._createIcon("shadow", r);
      },
      _createIcon: function(r, o) {
        var s = this._getIconUrl(r);
        if (!s) {
          if (r === "icon")
            throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var u = this._createImg(s, o && o.tagName === "IMG" ? o : null);
        return this._setIconStyles(u, r), (this.options.crossOrigin || this.options.crossOrigin === "") && (u.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), u;
      },
      _setIconStyles: function(r, o) {
        var s = this.options, u = s[o + "Size"];
        typeof u == "number" && (u = [u, u]);
        var d = U(u), g = U(o === "shadow" && s.shadowAnchor || s.iconAnchor || d && d.divideBy(2, !0));
        r.className = "leaflet-marker-" + o + " " + (s.className || ""), g && (r.style.marginLeft = -g.x + "px", r.style.marginTop = -g.y + "px"), d && (r.style.width = d.x + "px", r.style.height = d.y + "px");
      },
      _createImg: function(r, o) {
        return o = o || document.createElement("img"), o.src = r, o;
      },
      _getIconUrl: function(r) {
        return X.retina && this.options[r + "RetinaUrl"] || this.options[r + "Url"];
      }
    });
    function Pv(r) {
      return new Zi(r);
    }
    var na = Zi.extend({
      options: {
        iconUrl: "marker-icon.png",
        iconRetinaUrl: "marker-icon-2x.png",
        shadowUrl: "marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      },
      _getIconUrl: function(r) {
        return typeof na.imagePath != "string" && (na.imagePath = this._detectIconPath()), (this.options.imagePath || na.imagePath) + Zi.prototype._getIconUrl.call(this, r);
      },
      _stripUrl: function(r) {
        var o = function(s, u, d) {
          var g = u.exec(s);
          return g && g[d];
        };
        return r = o(r, /^url\((['"])?(.+)\1\)$/, 2), r && o(r, /^(.*)marker-icon\.png$/, 1);
      },
      _detectIconPath: function() {
        var r = Se("div", "leaflet-default-icon-path", document.body), o = Qr(r, "background-image") || Qr(r, "backgroundImage");
        if (document.body.removeChild(r), o = this._stripUrl(o), o)
          return o;
        var s = document.querySelector('link[href$="leaflet.css"]');
        return s ? s.href.substring(0, s.href.length - 11 - 1) : "";
      }
    }), Dh = bt.extend({
      initialize: function(r) {
        this._marker = r;
      },
      addHooks: function() {
        var r = this._marker._icon;
        this._draggable || (this._draggable = new xr(r, r, !0)), this._draggable.on({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).enable(), de(r, "leaflet-marker-draggable");
      },
      removeHooks: function() {
        this._draggable.off({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).disable(), this._marker._icon && Re(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function(r) {
        var o = this._marker, s = o._map, u = this._marker.options.autoPanSpeed, d = this._marker.options.autoPanPadding, g = In(o._icon), E = s.getPixelBounds(), M = s.getPixelOrigin(), N = me(
          E.min._subtract(M).add(d),
          E.max._subtract(M).subtract(d)
        );
        if (!N.contains(g)) {
          var D = U(
            (Math.max(N.max.x, g.x) - N.max.x) / (E.max.x - N.max.x) - (Math.min(N.min.x, g.x) - N.min.x) / (E.min.x - N.min.x),
            (Math.max(N.max.y, g.y) - N.max.y) / (E.max.y - N.max.y) - (Math.min(N.min.y, g.y) - N.min.y) / (E.min.y - N.min.y)
          ).multiplyBy(u);
          s.panBy(D, { animate: !1 }), this._draggable._newPos._add(D), this._draggable._startPos._add(D), He(o._icon, this._draggable._newPos), this._onDrag(r), this._panRequest = ce(this._adjustPan.bind(this, r));
        }
      },
      _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      },
      _onPreDrag: function(r) {
        this._marker.options.autoPan && (Ee(this._panRequest), this._panRequest = ce(this._adjustPan.bind(this, r)));
      },
      _onDrag: function(r) {
        var o = this._marker, s = o._shadow, u = In(o._icon), d = o._map.layerPointToLatLng(u);
        s && He(s, u), o._latlng = d, r.latlng = d, r.oldLatLng = this._oldLatLng, o.fire("move", r).fire("drag", r);
      },
      _onDragEnd: function(r) {
        Ee(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", r);
      }
    }), Cs = Tn.extend({
      // @section
      // @aka Marker options
      options: {
        // @option icon: Icon = *
        // Icon instance to use for rendering the marker.
        // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
        // If not specified, a common instance of `L.Icon.Default` is used.
        icon: new na(),
        // Option inherited from "Interactive layer" abstract class
        interactive: !0,
        // @option keyboard: Boolean = true
        // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
        keyboard: !0,
        // @option title: String = ''
        // Text for the browser tooltip that appear on marker hover (no tooltip by default).
        // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
        title: "",
        // @option alt: String = 'Marker'
        // Text for the `alt` attribute of the icon image.
        // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
        alt: "Marker",
        // @option zIndexOffset: Number = 0
        // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
        zIndexOffset: 0,
        // @option opacity: Number = 1.0
        // The opacity of the marker.
        opacity: 1,
        // @option riseOnHover: Boolean = false
        // If `true`, the marker will get on top of others when you hover the mouse over it.
        riseOnHover: !1,
        // @option riseOffset: Number = 250
        // The z-index offset used for the `riseOnHover` feature.
        riseOffset: 250,
        // @option pane: String = 'markerPane'
        // `Map pane` where the markers icon will be added.
        pane: "markerPane",
        // @option shadowPane: String = 'shadowPane'
        // `Map pane` where the markers shadow will be added.
        shadowPane: "shadowPane",
        // @option bubblingMouseEvents: Boolean = false
        // When `true`, a mouse event on this marker will trigger the same event on the map
        // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
        bubblingMouseEvents: !1,
        // @option autoPanOnFocus: Boolean = true
        // When `true`, the map will pan whenever the marker is focused (via
        // e.g. pressing `tab` on the keyboard) to ensure the marker is
        // visible within the map's bounds
        autoPanOnFocus: !0,
        // @section Draggable marker options
        // @option draggable: Boolean = false
        // Whether the marker is draggable with mouse/touch or not.
        draggable: !1,
        // @option autoPan: Boolean = false
        // Whether to pan the map when dragging this marker near its edge or not.
        autoPan: !1,
        // @option autoPanPadding: Point = Point(50, 50)
        // Distance (in pixels to the left/right and to the top/bottom) of the
        // map edge to start panning the map.
        autoPanPadding: [50, 50],
        // @option autoPanSpeed: Number = 10
        // Number of pixels the map should pan by.
        autoPanSpeed: 10
      },
      /* @section
       *
       * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
       */
      initialize: function(r, o) {
        T(this, o), this._latlng = le(r);
      },
      onAdd: function(r) {
        this._zoomAnimated = this._zoomAnimated && r.options.markerZoomAnimation, this._zoomAnimated && r.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
      },
      onRemove: function(r) {
        this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && r.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
      },
      getEvents: function() {
        return {
          zoom: this.update,
          viewreset: this.update
        };
      },
      // @method getLatLng: LatLng
      // Returns the current geographical position of the marker.
      getLatLng: function() {
        return this._latlng;
      },
      // @method setLatLng(latlng: LatLng): this
      // Changes the marker position to the given point.
      setLatLng: function(r) {
        var o = this._latlng;
        return this._latlng = le(r), this.update(), this.fire("move", { oldLatLng: o, latlng: this._latlng });
      },
      // @method setZIndexOffset(offset: Number): this
      // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
      setZIndexOffset: function(r) {
        return this.options.zIndexOffset = r, this.update();
      },
      // @method getIcon: Icon
      // Returns the current icon used by the marker
      getIcon: function() {
        return this.options.icon;
      },
      // @method setIcon(icon: Icon): this
      // Changes the marker icon.
      setIcon: function(r) {
        return this.options.icon = r, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
      },
      getElement: function() {
        return this._icon;
      },
      update: function() {
        if (this._icon && this._map) {
          var r = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(r);
        }
        return this;
      },
      _initIcon: function() {
        var r = this.options, o = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), s = r.icon.createIcon(this._icon), u = !1;
        s !== this._icon && (this._icon && this._removeIcon(), u = !0, r.title && (s.title = r.title), s.tagName === "IMG" && (s.alt = r.alt || "")), de(s, o), r.keyboard && (s.tabIndex = "0", s.setAttribute("role", "button")), this._icon = s, r.riseOnHover && this.on({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && ue(s, "focus", this._panOnFocus, this);
        var d = r.icon.createShadow(this._shadow), g = !1;
        d !== this._shadow && (this._removeShadow(), g = !0), d && (de(d, o), d.alt = ""), this._shadow = d, r.opacity < 1 && this._updateOpacity(), u && this.getPane().appendChild(this._icon), this._initInteraction(), d && g && this.getPane(r.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function() {
        this.options.riseOnHover && this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && Ce(this._icon, "focus", this._panOnFocus, this), ze(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      },
      _removeShadow: function() {
        this._shadow && ze(this._shadow), this._shadow = null;
      },
      _setPos: function(r) {
        this._icon && He(this._icon, r), this._shadow && He(this._shadow, r), this._zIndex = r.y + this.options.zIndexOffset, this._resetZIndex();
      },
      _updateZIndex: function(r) {
        this._icon && (this._icon.style.zIndex = this._zIndex + r);
      },
      _animateZoom: function(r) {
        var o = this._map._latLngToNewLayerPoint(this._latlng, r.zoom, r.center).round();
        this._setPos(o);
      },
      _initInteraction: function() {
        if (this.options.interactive && (de(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Dh)) {
          var r = this.options.draggable;
          this.dragging && (r = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Dh(this), r && this.dragging.enable();
        }
      },
      // @method setOpacity(opacity: Number): this
      // Changes the opacity of the marker.
      setOpacity: function(r) {
        return this.options.opacity = r, this._map && this._updateOpacity(), this;
      },
      _updateOpacity: function() {
        var r = this.options.opacity;
        this._icon && Bt(this._icon, r), this._shadow && Bt(this._shadow, r);
      },
      _bringToFront: function() {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function() {
        this._updateZIndex(0);
      },
      _panOnFocus: function() {
        var r = this._map;
        if (r) {
          var o = this.options.icon.options, s = o.iconSize ? U(o.iconSize) : U(0, 0), u = o.iconAnchor ? U(o.iconAnchor) : U(0, 0);
          r.panInside(this._latlng, {
            paddingTopLeft: u,
            paddingBottomRight: s.subtract(u)
          });
        }
      },
      _getPopupAnchor: function() {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function() {
        return this.options.icon.options.tooltipAnchor;
      }
    });
    function xv(r, o) {
      return new Cs(r, o);
    }
    var Sr = Tn.extend({
      // @section
      // @aka Path options
      options: {
        // @option stroke: Boolean = true
        // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
        stroke: !0,
        // @option color: String = '#3388ff'
        // Stroke color
        color: "#3388ff",
        // @option weight: Number = 3
        // Stroke width in pixels
        weight: 3,
        // @option opacity: Number = 1.0
        // Stroke opacity
        opacity: 1,
        // @option lineCap: String= 'round'
        // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
        lineCap: "round",
        // @option lineJoin: String = 'round'
        // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
        lineJoin: "round",
        // @option dashArray: String = null
        // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
        dashArray: null,
        // @option dashOffset: String = null
        // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
        dashOffset: null,
        // @option fill: Boolean = depends
        // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
        fill: !1,
        // @option fillColor: String = *
        // Fill color. Defaults to the value of the [`color`](#path-color) option
        fillColor: null,
        // @option fillOpacity: Number = 0.2
        // Fill opacity.
        fillOpacity: 0.2,
        // @option fillRule: String = 'evenodd'
        // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
        fillRule: "evenodd",
        // className: '',
        // Option inherited from "Interactive layer" abstract class
        interactive: !0,
        // @option bubblingMouseEvents: Boolean = true
        // When `true`, a mouse event on this path will trigger the same event on the map
        // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
        bubblingMouseEvents: !0
      },
      beforeAdd: function(r) {
        this._renderer = r.getRenderer(this);
      },
      onAdd: function() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      },
      onRemove: function() {
        this._renderer._removePath(this);
      },
      // @method redraw(): this
      // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
      redraw: function() {
        return this._map && this._renderer._updatePath(this), this;
      },
      // @method setStyle(style: Path options): this
      // Changes the appearance of a Path based on the options in the `Path options` object.
      setStyle: function(r) {
        return T(this, r), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && r && Object.prototype.hasOwnProperty.call(r, "weight") && this._updateBounds()), this;
      },
      // @method bringToFront(): this
      // Brings the layer to the top of all path layers.
      bringToFront: function() {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all path layers.
      bringToBack: function() {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function() {
        return this._path;
      },
      _reset: function() {
        this._project(), this._update();
      },
      _clickTolerance: function() {
        return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
      }
    }), ks = Sr.extend({
      // @section
      // @aka CircleMarker options
      options: {
        fill: !0,
        // @option radius: Number = 10
        // Radius of the circle marker, in pixels
        radius: 10
      },
      initialize: function(r, o) {
        T(this, o), this._latlng = le(r), this._radius = this.options.radius;
      },
      // @method setLatLng(latLng: LatLng): this
      // Sets the position of a circle marker to a new location.
      setLatLng: function(r) {
        var o = this._latlng;
        return this._latlng = le(r), this.redraw(), this.fire("move", { oldLatLng: o, latlng: this._latlng });
      },
      // @method getLatLng(): LatLng
      // Returns the current geographical position of the circle marker
      getLatLng: function() {
        return this._latlng;
      },
      // @method setRadius(radius: Number): this
      // Sets the radius of a circle marker. Units are in pixels.
      setRadius: function(r) {
        return this.options.radius = this._radius = r, this.redraw();
      },
      // @method getRadius(): Number
      // Returns the current radius of the circle
      getRadius: function() {
        return this._radius;
      },
      setStyle: function(r) {
        var o = r && r.radius || this._radius;
        return Sr.prototype.setStyle.call(this, r), this.setRadius(o), this;
      },
      _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      },
      _updateBounds: function() {
        var r = this._radius, o = this._radiusY || r, s = this._clickTolerance(), u = [r + s, o + s];
        this._pxBounds = new K(this._point.subtract(u), this._point.add(u));
      },
      _update: function() {
        this._map && this._updatePath();
      },
      _updatePath: function() {
        this._renderer._updateCircle(this);
      },
      _empty: function() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(r) {
        return r.distanceTo(this._point) <= this._radius + this._clickTolerance();
      }
    });
    function Sv(r, o) {
      return new ks(r, o);
    }
    var Ec = ks.extend({
      initialize: function(r, o, s) {
        if (typeof o == "number" && (o = a({}, s, { radius: o })), T(this, o), this._latlng = le(r), isNaN(this.options.radius))
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      // @method setRadius(radius: Number): this
      // Sets the radius of a circle. Units are in meters.
      setRadius: function(r) {
        return this._mRadius = r, this.redraw();
      },
      // @method getRadius(): Number
      // Returns the current radius of a circle. Units are in meters.
      getRadius: function() {
        return this._mRadius;
      },
      // @method getBounds(): LatLngBounds
      // Returns the `LatLngBounds` of the path.
      getBounds: function() {
        var r = [this._radius, this._radiusY || this._radius];
        return new De(
          this._map.layerPointToLatLng(this._point.subtract(r)),
          this._map.layerPointToLatLng(this._point.add(r))
        );
      },
      setStyle: Sr.prototype.setStyle,
      _project: function() {
        var r = this._latlng.lng, o = this._latlng.lat, s = this._map, u = s.options.crs;
        if (u.distance === Qe.distance) {
          var d = Math.PI / 180, g = this._mRadius / Qe.R / d, E = s.project([o + g, r]), M = s.project([o - g, r]), N = E.add(M).divideBy(2), D = s.unproject(N).lat, H = Math.acos((Math.cos(g * d) - Math.sin(o * d) * Math.sin(D * d)) / (Math.cos(o * d) * Math.cos(D * d))) / d;
          (isNaN(H) || H === 0) && (H = g / Math.cos(Math.PI / 180 * o)), this._point = N.subtract(s.getPixelOrigin()), this._radius = isNaN(H) ? 0 : N.x - s.project([D, r - H]).x, this._radiusY = N.y - E.y;
        } else {
          var se = u.unproject(u.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = s.latLngToLayerPoint(this._latlng), this._radius = this._point.x - s.latLngToLayerPoint(se).x;
        }
        this._updateBounds();
      }
    });
    function Ev(r, o, s) {
      return new Ec(r, o, s);
    }
    var nr = Sr.extend({
      // @section
      // @aka Polyline options
      options: {
        // @option smoothFactor: Number = 1.0
        // How much to simplify the polyline on each zoom level. More means
        // better performance and smoother look, and less means more accurate representation.
        smoothFactor: 1,
        // @option noClip: Boolean = false
        // Disable polyline clipping.
        noClip: !1
      },
      initialize: function(r, o) {
        T(this, o), this._setLatLngs(r);
      },
      // @method getLatLngs(): LatLng[]
      // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
      getLatLngs: function() {
        return this._latlngs;
      },
      // @method setLatLngs(latlngs: LatLng[]): this
      // Replaces all the points in the polyline with the given array of geographical points.
      setLatLngs: function(r) {
        return this._setLatLngs(r), this.redraw();
      },
      // @method isEmpty(): Boolean
      // Returns `true` if the Polyline has no LatLngs.
      isEmpty: function() {
        return !this._latlngs.length;
      },
      // @method closestLayerPoint(p: Point): Point
      // Returns the point closest to `p` on the Polyline.
      closestLayerPoint: function(r) {
        for (var o = 1 / 0, s = null, u = ta, d, g, E = 0, M = this._parts.length; E < M; E++)
          for (var N = this._parts[E], D = 1, H = N.length; D < H; D++) {
            d = N[D - 1], g = N[D];
            var se = u(r, d, g, !0);
            se < o && (o = se, s = u(r, d, g));
          }
        return s && (s.distance = Math.sqrt(o)), s;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return Rh(this._defaultShape(), this._map.options.crs);
      },
      // @method getBounds(): LatLngBounds
      // Returns the `LatLngBounds` of the path.
      getBounds: function() {
        return this._bounds;
      },
      // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
      // Adds a given point to the polyline. By default, adds to the first ring of
      // the polyline in case of a multi-polyline, but can be overridden by passing
      // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
      addLatLng: function(r, o) {
        return o = o || this._defaultShape(), r = le(r), o.push(r), this._bounds.extend(r), this.redraw();
      },
      _setLatLngs: function(r) {
        this._bounds = new De(), this._latlngs = this._convertLatLngs(r);
      },
      _defaultShape: function() {
        return dn(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
      _convertLatLngs: function(r) {
        for (var o = [], s = dn(r), u = 0, d = r.length; u < d; u++)
          s ? (o[u] = le(r[u]), this._bounds.extend(o[u])) : o[u] = this._convertLatLngs(r[u]);
        return o;
      },
      _project: function() {
        var r = new K();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, r), this._bounds.isValid() && r.isValid() && (this._rawPxBounds = r, this._updateBounds());
      },
      _updateBounds: function() {
        var r = this._clickTolerance(), o = new R(r, r);
        this._rawPxBounds && (this._pxBounds = new K([
          this._rawPxBounds.min.subtract(o),
          this._rawPxBounds.max.add(o)
        ]));
      },
      // recursively turns latlngs into a set of rings with projected coordinates
      _projectLatlngs: function(r, o, s) {
        var u = r[0] instanceof Q, d = r.length, g, E;
        if (u) {
          for (E = [], g = 0; g < d; g++)
            E[g] = this._map.latLngToLayerPoint(r[g]), s.extend(E[g]);
          o.push(E);
        } else
          for (g = 0; g < d; g++)
            this._projectLatlngs(r[g], o, s);
      },
      // clip polyline by renderer bounds so that we have less to render for performance
      _clipPoints: function() {
        var r = this._renderer._bounds;
        if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(r))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var o = this._parts, s, u, d, g, E, M, N;
          for (s = 0, d = 0, g = this._rings.length; s < g; s++)
            for (N = this._rings[s], u = 0, E = N.length; u < E - 1; u++)
              M = $h(N[u], N[u + 1], r, u, !0), M && (o[d] = o[d] || [], o[d].push(M[0]), (M[1] !== N[u + 1] || u === E - 2) && (o[d].push(M[1]), d++));
        }
      },
      // simplify each clipped part of the polyline for performance
      _simplifyPoints: function() {
        for (var r = this._parts, o = this.options.smoothFactor, s = 0, u = r.length; s < u; s++)
          r[s] = Ah(r[s], o);
      },
      _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function() {
        this._renderer._updatePoly(this);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(r, o) {
        var s, u, d, g, E, M, N = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(r))
          return !1;
        for (s = 0, g = this._parts.length; s < g; s++)
          for (M = this._parts[s], u = 0, E = M.length, d = E - 1; u < E; d = u++)
            if (!(!o && u === 0) && zh(r, M[d], M[u]) <= N)
              return !0;
        return !1;
      }
    });
    function Lv(r, o) {
      return new nr(r, o);
    }
    nr._flat = Ih;
    var Vi = nr.extend({
      options: {
        fill: !0
      },
      isEmpty: function() {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return Mh(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function(r) {
        var o = nr.prototype._convertLatLngs.call(this, r), s = o.length;
        return s >= 2 && o[0] instanceof Q && o[0].equals(o[s - 1]) && o.pop(), o;
      },
      _setLatLngs: function(r) {
        nr.prototype._setLatLngs.call(this, r), dn(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function() {
        return dn(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function() {
        var r = this._renderer._bounds, o = this.options.weight, s = new R(o, o);
        if (r = new K(r.min.subtract(s), r.max.add(s)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(r))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var u = 0, d = this._rings.length, g; u < d; u++)
            g = bh(this._rings[u], r, !0), g.length && this._parts.push(g);
        }
      },
      _updatePath: function() {
        this._renderer._updatePoly(this, !0);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(r) {
        var o = !1, s, u, d, g, E, M, N, D;
        if (!this._pxBounds || !this._pxBounds.contains(r))
          return !1;
        for (g = 0, N = this._parts.length; g < N; g++)
          for (s = this._parts[g], E = 0, D = s.length, M = D - 1; E < D; M = E++)
            u = s[E], d = s[M], u.y > r.y != d.y > r.y && r.x < (d.x - u.x) * (r.y - u.y) / (d.y - u.y) + u.x && (o = !o);
        return o || nr.prototype._containsPoint.call(this, r, !0);
      }
    });
    function Tv(r, o) {
      return new Vi(r, o);
    }
    var rr = tr.extend({
      /* @section
       * @aka GeoJSON options
       *
       * @option pointToLayer: Function = *
       * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
       * called when data is added, passing the GeoJSON point feature and its `LatLng`.
       * The default is to spawn a default `Marker`:
       * ```js
       * function(geoJsonPoint, latlng) {
       * 	return L.marker(latlng);
       * }
       * ```
       *
       * @option style: Function = *
       * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
       * called internally when data is added.
       * The default value is to not override any defaults:
       * ```js
       * function (geoJsonFeature) {
       * 	return {}
       * }
       * ```
       *
       * @option onEachFeature: Function = *
       * A `Function` that will be called once for each created `Feature`, after it has
       * been created and styled. Useful for attaching events and popups to features.
       * The default is to do nothing with the newly created layers:
       * ```js
       * function (feature, layer) {}
       * ```
       *
       * @option filter: Function = *
       * A `Function` that will be used to decide whether to include a feature or not.
       * The default is to include all features:
       * ```js
       * function (geoJsonFeature) {
       * 	return true;
       * }
       * ```
       * Note: dynamically changing the `filter` option will have effect only on newly
       * added data. It will _not_ re-evaluate already included features.
       *
       * @option coordsToLatLng: Function = *
       * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
       * The default is the `coordsToLatLng` static method.
       *
       * @option markersInheritOptions: Boolean = false
       * Whether default Markers for "Point" type Features inherit from group options.
       */
      initialize: function(r, o) {
        T(this, o), this._layers = {}, r && this.addData(r);
      },
      // @method addData( <GeoJSON> data ): this
      // Adds a GeoJSON object to the layer.
      addData: function(r) {
        var o = x(r) ? r : r.features, s, u, d;
        if (o) {
          for (s = 0, u = o.length; s < u; s++)
            d = o[s], (d.geometries || d.geometry || d.features || d.coordinates) && this.addData(d);
          return this;
        }
        var g = this.options;
        if (g.filter && !g.filter(r))
          return this;
        var E = bs(r, g);
        return E ? (E.feature = zs(r), E.defaultOptions = E.options, this.resetStyle(E), g.onEachFeature && g.onEachFeature(r, E), this.addLayer(E)) : this;
      },
      // @method resetStyle( <Path> layer? ): this
      // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
      // If `layer` is omitted, the style of all features in the current layer is reset.
      resetStyle: function(r) {
        return r === void 0 ? this.eachLayer(this.resetStyle, this) : (r.options = a({}, r.defaultOptions), this._setLayerStyle(r, this.options.style), this);
      },
      // @method setStyle( <Function> style ): this
      // Changes styles of GeoJSON vector layers with the given style function.
      setStyle: function(r) {
        return this.eachLayer(function(o) {
          this._setLayerStyle(o, r);
        }, this);
      },
      _setLayerStyle: function(r, o) {
        r.setStyle && (typeof o == "function" && (o = o(r.feature)), r.setStyle(o));
      }
    });
    function bs(r, o) {
      var s = r.type === "Feature" ? r.geometry : r, u = s ? s.coordinates : null, d = [], g = o && o.pointToLayer, E = o && o.coordsToLatLng || Lc, M, N, D, H;
      if (!u && !s)
        return null;
      switch (s.type) {
        case "Point":
          return M = E(u), jh(g, r, M, o);
        case "MultiPoint":
          for (D = 0, H = u.length; D < H; D++)
            M = E(u[D]), d.push(jh(g, r, M, o));
          return new tr(d);
        case "LineString":
        case "MultiLineString":
          return N = Ms(u, s.type === "LineString" ? 0 : 1, E), new nr(N, o);
        case "Polygon":
        case "MultiPolygon":
          return N = Ms(u, s.type === "Polygon" ? 1 : 2, E), new Vi(N, o);
        case "GeometryCollection":
          for (D = 0, H = s.geometries.length; D < H; D++) {
            var se = bs({
              geometry: s.geometries[D],
              type: "Feature",
              properties: r.properties
            }, o);
            se && d.push(se);
          }
          return new tr(d);
        case "FeatureCollection":
          for (D = 0, H = s.features.length; D < H; D++) {
            var ye = bs(s.features[D], o);
            ye && d.push(ye);
          }
          return new tr(d);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function jh(r, o, s, u) {
      return r ? r(o, s) : new Cs(s, u && u.markersInheritOptions && u);
    }
    function Lc(r) {
      return new Q(r[1], r[0], r[2]);
    }
    function Ms(r, o, s) {
      for (var u = [], d = 0, g = r.length, E; d < g; d++)
        E = o ? Ms(r[d], o - 1, s) : (s || Lc)(r[d]), u.push(E);
      return u;
    }
    function Tc(r, o) {
      return r = le(r), r.alt !== void 0 ? [h(r.lng, o), h(r.lat, o), h(r.alt, o)] : [h(r.lng, o), h(r.lat, o)];
    }
    function As(r, o, s, u) {
      for (var d = [], g = 0, E = r.length; g < E; g++)
        d.push(o ? As(r[g], dn(r[g]) ? 0 : o - 1, s, u) : Tc(r[g], u));
      return !o && s && d.length > 0 && d.push(d[0].slice()), d;
    }
    function Ui(r, o) {
      return r.feature ? a({}, r.feature, { geometry: o }) : zs(o);
    }
    function zs(r) {
      return r.type === "Feature" || r.type === "FeatureCollection" ? r : {
        type: "Feature",
        properties: {},
        geometry: r
      };
    }
    var Oc = {
      toGeoJSON: function(r) {
        return Ui(this, {
          type: "Point",
          coordinates: Tc(this.getLatLng(), r)
        });
      }
    };
    Cs.include(Oc), Ec.include(Oc), ks.include(Oc), nr.include({
      toGeoJSON: function(r) {
        var o = !dn(this._latlngs), s = As(this._latlngs, o ? 1 : 0, !1, r);
        return Ui(this, {
          type: (o ? "Multi" : "") + "LineString",
          coordinates: s
        });
      }
    }), Vi.include({
      toGeoJSON: function(r) {
        var o = !dn(this._latlngs), s = o && !dn(this._latlngs[0]), u = As(this._latlngs, s ? 2 : o ? 1 : 0, !0, r);
        return o || (u = [u]), Ui(this, {
          type: (s ? "Multi" : "") + "Polygon",
          coordinates: u
        });
      }
    }), Fi.include({
      toMultiPoint: function(r) {
        var o = [];
        return this.eachLayer(function(s) {
          o.push(s.toGeoJSON(r).geometry.coordinates);
        }), Ui(this, {
          type: "MultiPoint",
          coordinates: o
        });
      },
      // @method toGeoJSON(precision?: Number|false): Object
      // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
      // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
      toGeoJSON: function(r) {
        var o = this.feature && this.feature.geometry && this.feature.geometry.type;
        if (o === "MultiPoint")
          return this.toMultiPoint(r);
        var s = o === "GeometryCollection", u = [];
        return this.eachLayer(function(d) {
          if (d.toGeoJSON) {
            var g = d.toGeoJSON(r);
            if (s)
              u.push(g.geometry);
            else {
              var E = zs(g);
              E.type === "FeatureCollection" ? u.push.apply(u, E.features) : u.push(E);
            }
          }
        }), s ? Ui(this, {
          geometries: u,
          type: "GeometryCollection"
        }) : {
          type: "FeatureCollection",
          features: u
        };
      }
    });
    function Fh(r, o) {
      return new rr(r, o);
    }
    var Ov = Fh, Ns = Tn.extend({
      // @section
      // @aka ImageOverlay options
      options: {
        // @option opacity: Number = 1.0
        // The opacity of the image overlay.
        opacity: 1,
        // @option alt: String = ''
        // Text for the `alt` attribute of the image (useful for accessibility).
        alt: "",
        // @option interactive: Boolean = false
        // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
        interactive: !1,
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the image.
        // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1,
        // @option errorOverlayUrl: String = ''
        // URL to the overlay image to show in place of the overlay that failed to load.
        errorOverlayUrl: "",
        // @option zIndex: Number = 1
        // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
        zIndex: 1,
        // @option className: String = ''
        // A custom class name to assign to the image. Empty by default.
        className: ""
      },
      initialize: function(r, o, s) {
        this._url = r, this._bounds = ae(o), T(this, s);
      },
      onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (de(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      },
      onRemove: function() {
        ze(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      // @method setOpacity(opacity: Number): this
      // Sets the opacity of the overlay.
      setOpacity: function(r) {
        return this.options.opacity = r, this._image && this._updateOpacity(), this;
      },
      setStyle: function(r) {
        return r.opacity && this.setOpacity(r.opacity), this;
      },
      // @method bringToFront(): this
      // Brings the layer to the top of all overlays.
      bringToFront: function() {
        return this._map && Sn(this._image), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all overlays.
      bringToBack: function() {
        return this._map && Pr(this._image), this;
      },
      // @method setUrl(url: String): this
      // Changes the URL of the image.
      setUrl: function(r) {
        return this._url = r, this._image && (this._image.src = r), this;
      },
      // @method setBounds(bounds: LatLngBounds): this
      // Update the bounds that this ImageOverlay covers
      setBounds: function(r) {
        return this._bounds = ae(r), this._map && this._reset(), this;
      },
      getEvents: function() {
        var r = {
          zoom: this._reset,
          viewreset: this._reset
        };
        return this._zoomAnimated && (r.zoomanim = this._animateZoom), r;
      },
      // @method setZIndex(value: Number): this
      // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
      setZIndex: function(r) {
        return this.options.zIndex = r, this._updateZIndex(), this;
      },
      // @method getBounds(): LatLngBounds
      // Get the bounds that this ImageOverlay covers
      getBounds: function() {
        return this._bounds;
      },
      // @method getElement(): HTMLElement
      // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
      // used by this overlay.
      getElement: function() {
        return this._image;
      },
      _initImage: function() {
        var r = this._url.tagName === "IMG", o = this._image = r ? this._url : Se("img");
        if (de(o, "leaflet-image-layer"), this._zoomAnimated && de(o, "leaflet-zoom-animated"), this.options.className && de(o, this.options.className), o.onselectstart = v, o.onmousemove = v, o.onload = c(this.fire, this, "load"), o.onerror = c(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (o.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), r) {
          this._url = o.src;
          return;
        }
        o.src = this._url, o.alt = this.options.alt;
      },
      _animateZoom: function(r) {
        var o = this._map.getZoomScale(r.zoom), s = this._map._latLngBoundsToNewLayerBounds(this._bounds, r.zoom, r.center).min;
        Qn(this._image, s, o);
      },
      _reset: function() {
        var r = this._image, o = new K(
          this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
          this._map.latLngToLayerPoint(this._bounds.getSouthEast())
        ), s = o.getSize();
        He(r, o.min), r.style.width = s.x + "px", r.style.height = s.y + "px";
      },
      _updateOpacity: function() {
        Bt(this._image, this.options.opacity);
      },
      _updateZIndex: function() {
        this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function() {
        this.fire("error");
        var r = this.options.errorOverlayUrl;
        r && this._url !== r && (this._url = r, this._image.src = r);
      },
      // @method getCenter(): LatLng
      // Returns the center of the ImageOverlay.
      getCenter: function() {
        return this._bounds.getCenter();
      }
    }), Cv = function(r, o, s) {
      return new Ns(r, o, s);
    }, Zh = Ns.extend({
      // @section
      // @aka VideoOverlay options
      options: {
        // @option autoplay: Boolean = true
        // Whether the video starts playing automatically when loaded.
        // On some browsers autoplay will only work with `muted: true`
        autoplay: !0,
        // @option loop: Boolean = true
        // Whether the video will loop back to the beginning when played.
        loop: !0,
        // @option keepAspectRatio: Boolean = true
        // Whether the video will save aspect ratio after the projection.
        // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
        keepAspectRatio: !0,
        // @option muted: Boolean = false
        // Whether the video starts on mute when loaded.
        muted: !1,
        // @option playsInline: Boolean = true
        // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
        playsInline: !0
      },
      _initImage: function() {
        var r = this._url.tagName === "VIDEO", o = this._image = r ? this._url : Se("video");
        if (de(o, "leaflet-image-layer"), this._zoomAnimated && de(o, "leaflet-zoom-animated"), this.options.className && de(o, this.options.className), o.onselectstart = v, o.onmousemove = v, o.onloadeddata = c(this.fire, this, "load"), r) {
          for (var s = o.getElementsByTagName("source"), u = [], d = 0; d < s.length; d++)
            u.push(s[d].src);
          this._url = s.length > 0 ? u : [o.src];
          return;
        }
        x(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(o.style, "objectFit") && (o.style.objectFit = "fill"), o.autoplay = !!this.options.autoplay, o.loop = !!this.options.loop, o.muted = !!this.options.muted, o.playsInline = !!this.options.playsInline;
        for (var g = 0; g < this._url.length; g++) {
          var E = Se("source");
          E.src = this._url[g], o.appendChild(E);
        }
      }
      // @method getElement(): HTMLVideoElement
      // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
      // used by this overlay.
    });
    function kv(r, o, s) {
      return new Zh(r, o, s);
    }
    var Vh = Ns.extend({
      _initImage: function() {
        var r = this._image = this._url;
        de(r, "leaflet-image-layer"), this._zoomAnimated && de(r, "leaflet-zoom-animated"), this.options.className && de(r, this.options.className), r.onselectstart = v, r.onmousemove = v;
      }
      // @method getElement(): SVGElement
      // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
      // used by this overlay.
    });
    function bv(r, o, s) {
      return new Vh(r, o, s);
    }
    var Dn = Tn.extend({
      // @section
      // @aka DivOverlay options
      options: {
        // @option interactive: Boolean = false
        // If true, the popup/tooltip will listen to the mouse events.
        interactive: !1,
        // @option offset: Point = Point(0, 0)
        // The offset of the overlay position.
        offset: [0, 0],
        // @option className: String = ''
        // A custom CSS class name to assign to the overlay.
        className: "",
        // @option pane: String = undefined
        // `Map pane` where the overlay will be added.
        pane: void 0,
        // @option content: String|HTMLElement|Function = ''
        // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
        // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
        content: ""
      },
      initialize: function(r, o) {
        r && (r instanceof Q || x(r)) ? (this._latlng = le(r), T(this, o)) : (T(this, r), this._source = o), this.options.content && (this._content = this.options.content);
      },
      // @method openOn(map: Map): this
      // Adds the overlay to the map.
      // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
      openOn: function(r) {
        return r = arguments.length ? r : this._source._map, r.hasLayer(this) || r.addLayer(this), this;
      },
      // @method close(): this
      // Closes the overlay.
      // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
      // and `layer.closePopup()`/`.closeTooltip()`.
      close: function() {
        return this._map && this._map.removeLayer(this), this;
      },
      // @method toggle(layer?: Layer): this
      // Opens or closes the overlay bound to layer depending on its current state.
      // Argument may be omitted only for overlay bound to layer.
      // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
      toggle: function(r) {
        return this._map ? this.close() : (arguments.length ? this._source = r : r = this._source, this._prepareOpen(), this.openOn(r._map)), this;
      },
      onAdd: function(r) {
        this._zoomAnimated = r._zoomAnimated, this._container || this._initLayout(), r._fadeAnimated && Bt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), r._fadeAnimated && Bt(this._container, 1), this.bringToFront(), this.options.interactive && (de(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      },
      onRemove: function(r) {
        r._fadeAnimated ? (Bt(this._container, 0), this._removeTimeout = setTimeout(c(ze, void 0, this._container), 200)) : ze(this._container), this.options.interactive && (Re(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
      },
      // @namespace DivOverlay
      // @method getLatLng: LatLng
      // Returns the geographical point of the overlay.
      getLatLng: function() {
        return this._latlng;
      },
      // @method setLatLng(latlng: LatLng): this
      // Sets the geographical point where the overlay will open.
      setLatLng: function(r) {
        return this._latlng = le(r), this._map && (this._updatePosition(), this._adjustPan()), this;
      },
      // @method getContent: String|HTMLElement
      // Returns the content of the overlay.
      getContent: function() {
        return this._content;
      },
      // @method setContent(htmlContent: String|HTMLElement|Function): this
      // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
      // The function should return a `String` or `HTMLElement` to be used in the overlay.
      setContent: function(r) {
        return this._content = r, this.update(), this;
      },
      // @method getElement: String|HTMLElement
      // Returns the HTML container of the overlay.
      getElement: function() {
        return this._container;
      },
      // @method update: null
      // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
      update: function() {
        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
      },
      getEvents: function() {
        var r = {
          zoom: this._updatePosition,
          viewreset: this._updatePosition
        };
        return this._zoomAnimated && (r.zoomanim = this._animateZoom), r;
      },
      // @method isOpen: Boolean
      // Returns `true` when the overlay is visible on the map.
      isOpen: function() {
        return !!this._map && this._map.hasLayer(this);
      },
      // @method bringToFront: this
      // Brings this overlay in front of other overlays (in the same map pane).
      bringToFront: function() {
        return this._map && Sn(this._container), this;
      },
      // @method bringToBack: this
      // Brings this overlay to the back of other overlays (in the same map pane).
      bringToBack: function() {
        return this._map && Pr(this._container), this;
      },
      // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
      _prepareOpen: function(r) {
        var o = this._source;
        if (!o._map)
          return !1;
        if (o instanceof tr) {
          o = null;
          var s = this._source._layers;
          for (var u in s)
            if (s[u]._map) {
              o = s[u];
              break;
            }
          if (!o)
            return !1;
          this._source = o;
        }
        if (!r)
          if (o.getCenter)
            r = o.getCenter();
          else if (o.getLatLng)
            r = o.getLatLng();
          else if (o.getBounds)
            r = o.getBounds().getCenter();
          else
            throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(r), this._map && this.update(), !0;
      },
      _updateContent: function() {
        if (this._content) {
          var r = this._contentNode, o = typeof this._content == "function" ? this._content(this._source || this) : this._content;
          if (typeof o == "string")
            r.innerHTML = o;
          else {
            for (; r.hasChildNodes(); )
              r.removeChild(r.firstChild);
            r.appendChild(o);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function() {
        if (this._map) {
          var r = this._map.latLngToLayerPoint(this._latlng), o = U(this.options.offset), s = this._getAnchor();
          this._zoomAnimated ? He(this._container, r.add(s)) : o = o.add(r).add(s);
          var u = this._containerBottom = -o.y, d = this._containerLeft = -Math.round(this._containerWidth / 2) + o.x;
          this._container.style.bottom = u + "px", this._container.style.left = d + "px";
        }
      },
      _getAnchor: function() {
        return [0, 0];
      }
    });
    ne.include({
      _initOverlay: function(r, o, s, u) {
        var d = o;
        return d instanceof r || (d = new r(u).setContent(o)), s && d.setLatLng(s), d;
      }
    }), Tn.include({
      _initOverlay: function(r, o, s, u) {
        var d = s;
        return d instanceof r ? (T(d, u), d._source = this) : (d = o && !u ? o : new r(u, this), d.setContent(s)), d;
      }
    });
    var $s = Dn.extend({
      // @section
      // @aka Popup options
      options: {
        // @option pane: String = 'popupPane'
        // `Map pane` where the popup will be added.
        pane: "popupPane",
        // @option offset: Point = Point(0, 7)
        // The offset of the popup position.
        offset: [0, 7],
        // @option maxWidth: Number = 300
        // Max width of the popup, in pixels.
        maxWidth: 300,
        // @option minWidth: Number = 50
        // Min width of the popup, in pixels.
        minWidth: 50,
        // @option maxHeight: Number = null
        // If set, creates a scrollable container of the given height
        // inside a popup if its content exceeds it.
        // The scrollable container can be styled using the
        // `leaflet-popup-scrolled` CSS class selector.
        maxHeight: null,
        // @option autoPan: Boolean = true
        // Set it to `false` if you don't want the map to do panning animation
        // to fit the opened popup.
        autoPan: !0,
        // @option autoPanPaddingTopLeft: Point = null
        // The margin between the popup and the top left corner of the map
        // view after autopanning was performed.
        autoPanPaddingTopLeft: null,
        // @option autoPanPaddingBottomRight: Point = null
        // The margin between the popup and the bottom right corner of the map
        // view after autopanning was performed.
        autoPanPaddingBottomRight: null,
        // @option autoPanPadding: Point = Point(5, 5)
        // Equivalent of setting both top left and bottom right autopan padding to the same value.
        autoPanPadding: [5, 5],
        // @option keepInView: Boolean = false
        // Set it to `true` if you want to prevent users from panning the popup
        // off of the screen while it is open.
        keepInView: !1,
        // @option closeButton: Boolean = true
        // Controls the presence of a close button in the popup.
        closeButton: !0,
        // @option autoClose: Boolean = true
        // Set it to `false` if you want to override the default behavior of
        // the popup closing when another popup is opened.
        autoClose: !0,
        // @option closeOnEscapeKey: Boolean = true
        // Set it to `false` if you want to override the default behavior of
        // the ESC key for closing of the popup.
        closeOnEscapeKey: !0,
        // @option closeOnClick: Boolean = *
        // Set it if you want to override the default behavior of the popup closing when user clicks
        // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
        // @option className: String = ''
        // A custom CSS class name to assign to the popup.
        className: ""
      },
      // @namespace Popup
      // @method openOn(map: Map): this
      // Alternative to `map.openPopup(popup)`.
      // Adds the popup to the map and closes the previous one.
      openOn: function(r) {
        return r = arguments.length ? r : this._source._map, !r.hasLayer(this) && r._popup && r._popup.options.autoClose && r.removeLayer(r._popup), r._popup = this, Dn.prototype.openOn.call(this, r);
      },
      onAdd: function(r) {
        Dn.prototype.onAdd.call(this, r), r.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Sr || this._source.on("preclick", qt));
      },
      onRemove: function(r) {
        Dn.prototype.onRemove.call(this, r), r.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Sr || this._source.off("preclick", qt));
      },
      getEvents: function() {
        var r = Dn.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (r.preclick = this.close), this.options.keepInView && (r.moveend = this._adjustPan), r;
      },
      _initLayout: function() {
        var r = "leaflet-popup", o = this._container = Se(
          "div",
          r + " " + (this.options.className || "") + " leaflet-zoom-animated"
        ), s = this._wrapper = Se("div", r + "-content-wrapper", o);
        if (this._contentNode = Se("div", r + "-content", s), ti(o), Bi(this._contentNode), ue(o, "contextmenu", qt), this._tipContainer = Se("div", r + "-tip-container", o), this._tip = Se("div", r + "-tip", this._tipContainer), this.options.closeButton) {
          var u = this._closeButton = Se("a", r + "-close-button", o);
          u.setAttribute("role", "button"), u.setAttribute("aria-label", "Close popup"), u.href = "#close", u.innerHTML = '<span aria-hidden="true">&#215;</span>', ue(u, "click", function(d) {
            nt(d), this.close();
          }, this);
        }
      },
      _updateLayout: function() {
        var r = this._contentNode, o = r.style;
        o.width = "", o.whiteSpace = "nowrap";
        var s = r.offsetWidth;
        s = Math.min(s, this.options.maxWidth), s = Math.max(s, this.options.minWidth), o.width = s + 1 + "px", o.whiteSpace = "", o.height = "";
        var u = r.offsetHeight, d = this.options.maxHeight, g = "leaflet-popup-scrolled";
        d && u > d ? (o.height = d + "px", de(r, g)) : Re(r, g), this._containerWidth = this._container.offsetWidth;
      },
      _animateZoom: function(r) {
        var o = this._map._latLngToNewLayerPoint(this._latlng, r.zoom, r.center), s = this._getAnchor();
        He(this._container, o.add(s));
      },
      _adjustPan: function() {
        if (this.options.autoPan) {
          if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
            this._autopanning = !1;
            return;
          }
          var r = this._map, o = parseInt(Qr(this._container, "marginBottom"), 10) || 0, s = this._container.offsetHeight + o, u = this._containerWidth, d = new R(this._containerLeft, -s - this._containerBottom);
          d._add(In(this._container));
          var g = r.layerPointToContainerPoint(d), E = U(this.options.autoPanPadding), M = U(this.options.autoPanPaddingTopLeft || E), N = U(this.options.autoPanPaddingBottomRight || E), D = r.getSize(), H = 0, se = 0;
          g.x + u + N.x > D.x && (H = g.x + u - D.x + N.x), g.x - H - M.x < 0 && (H = g.x - M.x), g.y + s + N.y > D.y && (se = g.y + s - D.y + N.y), g.y - se - M.y < 0 && (se = g.y - M.y), (H || se) && (this.options.keepInView && (this._autopanning = !0), r.fire("autopanstart").panBy([H, se]));
        }
      },
      _getAnchor: function() {
        return U(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      }
    }), Mv = function(r, o) {
      return new $s(r, o);
    };
    ne.mergeOptions({
      closePopupOnClick: !0
    }), ne.include({
      // @method openPopup(popup: Popup): this
      // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
      // @alternative
      // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
      // Creates a popup with the specified content and options and opens it in the given point on a map.
      openPopup: function(r, o, s) {
        return this._initOverlay($s, r, o, s).openOn(this), this;
      },
      // @method closePopup(popup?: Popup): this
      // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
      closePopup: function(r) {
        return r = arguments.length ? r : this._popup, r && r.close(), this;
      }
    }), Tn.include({
      // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
      // Binds a popup to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindPopup: function(r, o) {
        return this._popup = this._initOverlay($s, this._popup, r, o), this._popupHandlersAdded || (this.on({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !0), this;
      },
      // @method unbindPopup(): this
      // Removes the popup previously bound with `bindPopup`.
      unbindPopup: function() {
        return this._popup && (this.off({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !1, this._popup = null), this;
      },
      // @method openPopup(latlng?: LatLng): this
      // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
      openPopup: function(r) {
        return this._popup && (this instanceof tr || (this._popup._source = this), this._popup._prepareOpen(r || this._latlng) && this._popup.openOn(this._map)), this;
      },
      // @method closePopup(): this
      // Closes the popup bound to this layer if it is open.
      closePopup: function() {
        return this._popup && this._popup.close(), this;
      },
      // @method togglePopup(): this
      // Opens or closes the popup bound to this layer depending on its current state.
      togglePopup: function() {
        return this._popup && this._popup.toggle(this), this;
      },
      // @method isPopupOpen(): boolean
      // Returns `true` if the popup bound to this layer is currently open.
      isPopupOpen: function() {
        return this._popup ? this._popup.isOpen() : !1;
      },
      // @method setPopupContent(content: String|HTMLElement|Popup): this
      // Sets the content of the popup bound to this layer.
      setPopupContent: function(r) {
        return this._popup && this._popup.setContent(r), this;
      },
      // @method getPopup(): Popup
      // Returns the popup bound to this layer.
      getPopup: function() {
        return this._popup;
      },
      _openPopup: function(r) {
        if (!(!this._popup || !this._map)) {
          Xn(r);
          var o = r.layer || r.target;
          if (this._popup._source === o && !(o instanceof Sr)) {
            this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(r.latlng);
            return;
          }
          this._popup._source = o, this.openPopup(r.latlng);
        }
      },
      _movePopup: function(r) {
        this._popup.setLatLng(r.latlng);
      },
      _onKeyPress: function(r) {
        r.originalEvent.keyCode === 13 && this._openPopup(r);
      }
    });
    var Is = Dn.extend({
      // @section
      // @aka Tooltip options
      options: {
        // @option pane: String = 'tooltipPane'
        // `Map pane` where the tooltip will be added.
        pane: "tooltipPane",
        // @option offset: Point = Point(0, 0)
        // Optional offset of the tooltip position.
        offset: [0, 0],
        // @option direction: String = 'auto'
        // Direction where to open the tooltip. Possible values are: `right`, `left`,
        // `top`, `bottom`, `center`, `auto`.
        // `auto` will dynamically switch between `right` and `left` according to the tooltip
        // position on the map.
        direction: "auto",
        // @option permanent: Boolean = false
        // Whether to open the tooltip permanently or only on mouseover.
        permanent: !1,
        // @option sticky: Boolean = false
        // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
        sticky: !1,
        // @option opacity: Number = 0.9
        // Tooltip container opacity.
        opacity: 0.9
      },
      onAdd: function(r) {
        Dn.prototype.onAdd.call(this, r), this.setOpacity(this.options.opacity), r.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
      },
      onRemove: function(r) {
        Dn.prototype.onRemove.call(this, r), r.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
      },
      getEvents: function() {
        var r = Dn.prototype.getEvents.call(this);
        return this.options.permanent || (r.preclick = this.close), r;
      },
      _initLayout: function() {
        var r = "leaflet-tooltip", o = r + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = Se("div", o), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + m(this));
      },
      _updateLayout: function() {
      },
      _adjustPan: function() {
      },
      _setPosition: function(r) {
        var o, s, u = this._map, d = this._container, g = u.latLngToContainerPoint(u.getCenter()), E = u.layerPointToContainerPoint(r), M = this.options.direction, N = d.offsetWidth, D = d.offsetHeight, H = U(this.options.offset), se = this._getAnchor();
        M === "top" ? (o = N / 2, s = D) : M === "bottom" ? (o = N / 2, s = 0) : M === "center" ? (o = N / 2, s = D / 2) : M === "right" ? (o = 0, s = D / 2) : M === "left" ? (o = N, s = D / 2) : E.x < g.x ? (M = "right", o = 0, s = D / 2) : (M = "left", o = N + (H.x + se.x) * 2, s = D / 2), r = r.subtract(U(o, s, !0)).add(H).add(se), Re(d, "leaflet-tooltip-right"), Re(d, "leaflet-tooltip-left"), Re(d, "leaflet-tooltip-top"), Re(d, "leaflet-tooltip-bottom"), de(d, "leaflet-tooltip-" + M), He(d, r);
      },
      _updatePosition: function() {
        var r = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(r);
      },
      setOpacity: function(r) {
        this.options.opacity = r, this._container && Bt(this._container, r);
      },
      _animateZoom: function(r) {
        var o = this._map._latLngToNewLayerPoint(this._latlng, r.zoom, r.center);
        this._setPosition(o);
      },
      _getAnchor: function() {
        return U(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      }
    }), Av = function(r, o) {
      return new Is(r, o);
    };
    ne.include({
      // @method openTooltip(tooltip: Tooltip): this
      // Opens the specified tooltip.
      // @alternative
      // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
      // Creates a tooltip with the specified content and options and open it.
      openTooltip: function(r, o, s) {
        return this._initOverlay(Is, r, o, s).openOn(this), this;
      },
      // @method closeTooltip(tooltip: Tooltip): this
      // Closes the tooltip given as parameter.
      closeTooltip: function(r) {
        return r.close(), this;
      }
    }), Tn.include({
      // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
      // Binds a tooltip to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindTooltip: function(r, o) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Is, this._tooltip, r, o), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      },
      // @method unbindTooltip(): this
      // Removes the tooltip previously bound with `bindTooltip`.
      unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
      },
      _initTooltipInteractions: function(r) {
        if (!(!r && this._tooltipHandlersAdded)) {
          var o = r ? "off" : "on", s = {
            remove: this.closeTooltip,
            move: this._moveTooltip
          };
          this._tooltip.options.permanent ? s.add = this._openTooltip : (s.mouseover = this._openTooltip, s.mouseout = this.closeTooltip, s.click = this._openTooltip, this._map ? this._addFocusListeners() : s.add = this._addFocusListeners), this._tooltip.options.sticky && (s.mousemove = this._moveTooltip), this[o](s), this._tooltipHandlersAdded = !r;
        }
      },
      // @method openTooltip(latlng?: LatLng): this
      // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
      openTooltip: function(r) {
        return this._tooltip && (this instanceof tr || (this._tooltip._source = this), this._tooltip._prepareOpen(r) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
      },
      // @method closeTooltip(): this
      // Closes the tooltip bound to this layer if it is open.
      closeTooltip: function() {
        if (this._tooltip)
          return this._tooltip.close();
      },
      // @method toggleTooltip(): this
      // Opens or closes the tooltip bound to this layer depending on its current state.
      toggleTooltip: function() {
        return this._tooltip && this._tooltip.toggle(this), this;
      },
      // @method isTooltipOpen(): boolean
      // Returns `true` if the tooltip bound to this layer is currently open.
      isTooltipOpen: function() {
        return this._tooltip.isOpen();
      },
      // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
      // Sets the content of the tooltip bound to this layer.
      setTooltipContent: function(r) {
        return this._tooltip && this._tooltip.setContent(r), this;
      },
      // @method getTooltip(): Tooltip
      // Returns the tooltip bound to this layer.
      getTooltip: function() {
        return this._tooltip;
      },
      _addFocusListeners: function() {
        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
      },
      _addFocusListenersOnLayer: function(r) {
        var o = typeof r.getElement == "function" && r.getElement();
        o && (ue(o, "focus", function() {
          this._tooltip._source = r, this.openTooltip();
        }, this), ue(o, "blur", this.closeTooltip, this));
      },
      _setAriaDescribedByOnLayer: function(r) {
        var o = typeof r.getElement == "function" && r.getElement();
        o && o.setAttribute("aria-describedby", this._tooltip._container.id);
      },
      _openTooltip: function(r) {
        if (!(!this._tooltip || !this._map)) {
          if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
            this._openOnceFlag = !0;
            var o = this;
            this._map.once("moveend", function() {
              o._openOnceFlag = !1, o._openTooltip(r);
            });
            return;
          }
          this._tooltip._source = r.layer || r.target, this.openTooltip(this._tooltip.options.sticky ? r.latlng : void 0);
        }
      },
      _moveTooltip: function(r) {
        var o = r.latlng, s, u;
        this._tooltip.options.sticky && r.originalEvent && (s = this._map.mouseEventToContainerPoint(r.originalEvent), u = this._map.containerPointToLayerPoint(s), o = this._map.layerPointToLatLng(u)), this._tooltip.setLatLng(o);
      }
    });
    var Uh = Zi.extend({
      options: {
        // @section
        // @aka DivIcon options
        iconSize: [12, 12],
        // also can be set through CSS
        // iconAnchor: (Point),
        // popupAnchor: (Point),
        // @option html: String|HTMLElement = ''
        // Custom HTML code to put inside the div element, empty by default. Alternatively,
        // an instance of `HTMLElement`.
        html: !1,
        // @option bgPos: Point = [0, 0]
        // Optional relative position of the background, in pixels
        bgPos: null,
        className: "leaflet-div-icon"
      },
      createIcon: function(r) {
        var o = r && r.tagName === "DIV" ? r : document.createElement("div"), s = this.options;
        if (s.html instanceof Element ? (bi(o), o.appendChild(s.html)) : o.innerHTML = s.html !== !1 ? s.html : "", s.bgPos) {
          var u = U(s.bgPos);
          o.style.backgroundPosition = -u.x + "px " + -u.y + "px";
        }
        return this._setIconStyles(o, "icon"), o;
      },
      createShadow: function() {
        return null;
      }
    });
    function zv(r) {
      return new Uh(r);
    }
    Zi.Default = na;
    var ra = Tn.extend({
      // @section
      // @aka GridLayer options
      options: {
        // @option tileSize: Number|Point = 256
        // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
        tileSize: 256,
        // @option opacity: Number = 1.0
        // Opacity of the tiles. Can be used in the `createTile()` function.
        opacity: 1,
        // @option updateWhenIdle: Boolean = (depends)
        // Load new tiles only when panning ends.
        // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
        // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
        // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
        updateWhenIdle: X.mobile,
        // @option updateWhenZooming: Boolean = true
        // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
        updateWhenZooming: !0,
        // @option updateInterval: Number = 200
        // Tiles will not update more than once every `updateInterval` milliseconds when panning.
        updateInterval: 200,
        // @option zIndex: Number = 1
        // The explicit zIndex of the tile layer.
        zIndex: 1,
        // @option bounds: LatLngBounds = undefined
        // If set, tiles will only be loaded inside the set `LatLngBounds`.
        bounds: null,
        // @option minZoom: Number = 0
        // The minimum zoom level down to which this layer will be displayed (inclusive).
        minZoom: 0,
        // @option maxZoom: Number = undefined
        // The maximum zoom level up to which this layer will be displayed (inclusive).
        maxZoom: void 0,
        // @option maxNativeZoom: Number = undefined
        // Maximum zoom number the tile source has available. If it is specified,
        // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
        // from `maxNativeZoom` level and auto-scaled.
        maxNativeZoom: void 0,
        // @option minNativeZoom: Number = undefined
        // Minimum zoom number the tile source has available. If it is specified,
        // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
        // from `minNativeZoom` level and auto-scaled.
        minNativeZoom: void 0,
        // @option noWrap: Boolean = false
        // Whether the layer is wrapped around the antimeridian. If `true`, the
        // GridLayer will only be displayed once at low zoom levels. Has no
        // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
        // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
        // tiles outside the CRS limits.
        noWrap: !1,
        // @option pane: String = 'tilePane'
        // `Map pane` where the grid layer will be added.
        pane: "tilePane",
        // @option className: String = ''
        // A custom class name to assign to the tile layer. Empty by default.
        className: "",
        // @option keepBuffer: Number = 2
        // When panning the map, keep this many rows and columns of tiles before unloading them.
        keepBuffer: 2
      },
      initialize: function(r) {
        T(this, r);
      },
      onAdd: function() {
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
      },
      beforeAdd: function(r) {
        r._addZoomLimit(this);
      },
      onRemove: function(r) {
        this._removeAllTiles(), ze(this._container), r._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      },
      // @method bringToFront: this
      // Brings the tile layer to the top of all tile layers.
      bringToFront: function() {
        return this._map && (Sn(this._container), this._setAutoZIndex(Math.max)), this;
      },
      // @method bringToBack: this
      // Brings the tile layer to the bottom of all tile layers.
      bringToBack: function() {
        return this._map && (Pr(this._container), this._setAutoZIndex(Math.min)), this;
      },
      // @method getContainer: HTMLElement
      // Returns the HTML element that contains the tiles for this layer.
      getContainer: function() {
        return this._container;
      },
      // @method setOpacity(opacity: Number): this
      // Changes the [opacity](#gridlayer-opacity) of the grid layer.
      setOpacity: function(r) {
        return this.options.opacity = r, this._updateOpacity(), this;
      },
      // @method setZIndex(zIndex: Number): this
      // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
      setZIndex: function(r) {
        return this.options.zIndex = r, this._updateZIndex(), this;
      },
      // @method isLoading: Boolean
      // Returns `true` if any tile in the grid layer has not finished loading.
      isLoading: function() {
        return this._loading;
      },
      // @method redraw: this
      // Causes the layer to clear all the tiles and request them again.
      redraw: function() {
        if (this._map) {
          this._removeAllTiles();
          var r = this._clampZoom(this._map.getZoom());
          r !== this._tileZoom && (this._tileZoom = r, this._updateLevels()), this._update();
        }
        return this;
      },
      getEvents: function() {
        var r = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd
        };
        return this.options.updateWhenIdle || (this._onMove || (this._onMove = _(this._onMoveEnd, this.options.updateInterval, this)), r.move = this._onMove), this._zoomAnimated && (r.zoomanim = this._animateZoom), r;
      },
      // @section Extension methods
      // Layers extending `GridLayer` shall reimplement the following method.
      // @method createTile(coords: Object, done?: Function): HTMLElement
      // Called only internally, must be overridden by classes extending `GridLayer`.
      // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
      // is specified, it must be called when the tile has finished loading and drawing.
      createTile: function() {
        return document.createElement("div");
      },
      // @section
      // @method getTileSize: Point
      // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
      getTileSize: function() {
        var r = this.options.tileSize;
        return r instanceof R ? r : new R(r, r);
      },
      _updateZIndex: function() {
        this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function(r) {
        for (var o = this.getPane().children, s = -r(-1 / 0, 1 / 0), u = 0, d = o.length, g; u < d; u++)
          g = o[u].style.zIndex, o[u] !== this._container && g && (s = r(s, +g));
        isFinite(s) && (this.options.zIndex = s + r(-1, 1), this._updateZIndex());
      },
      _updateOpacity: function() {
        if (this._map && !X.ielt9) {
          Bt(this._container, this.options.opacity);
          var r = +/* @__PURE__ */ new Date(), o = !1, s = !1;
          for (var u in this._tiles) {
            var d = this._tiles[u];
            if (!(!d.current || !d.loaded)) {
              var g = Math.min(1, (r - d.loaded) / 200);
              Bt(d.el, g), g < 1 ? o = !0 : (d.active ? s = !0 : this._onOpaqueTile(d), d.active = !0);
            }
          }
          s && !this._noPrune && this._pruneTiles(), o && (Ee(this._fadeFrame), this._fadeFrame = ce(this._updateOpacity, this));
        }
      },
      _onOpaqueTile: v,
      _initContainer: function() {
        this._container || (this._container = Se("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      },
      _updateLevels: function() {
        var r = this._tileZoom, o = this.options.maxZoom;
        if (r !== void 0) {
          for (var s in this._levels)
            s = Number(s), this._levels[s].el.children.length || s === r ? (this._levels[s].el.style.zIndex = o - Math.abs(r - s), this._onUpdateLevel(s)) : (ze(this._levels[s].el), this._removeTilesAtZoom(s), this._onRemoveLevel(s), delete this._levels[s]);
          var u = this._levels[r], d = this._map;
          return u || (u = this._levels[r] = {}, u.el = Se("div", "leaflet-tile-container leaflet-zoom-animated", this._container), u.el.style.zIndex = o, u.origin = d.project(d.unproject(d.getPixelOrigin()), r).round(), u.zoom = r, this._setZoomTransform(u, d.getCenter(), d.getZoom()), v(u.el.offsetWidth), this._onCreateLevel(u)), this._level = u, u;
        }
      },
      _onUpdateLevel: v,
      _onRemoveLevel: v,
      _onCreateLevel: v,
      _pruneTiles: function() {
        if (this._map) {
          var r, o, s = this._map.getZoom();
          if (s > this.options.maxZoom || s < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (r in this._tiles)
            o = this._tiles[r], o.retain = o.current;
          for (r in this._tiles)
            if (o = this._tiles[r], o.current && !o.active) {
              var u = o.coords;
              this._retainParent(u.x, u.y, u.z, u.z - 5) || this._retainChildren(u.x, u.y, u.z, u.z + 2);
            }
          for (r in this._tiles)
            this._tiles[r].retain || this._removeTile(r);
        }
      },
      _removeTilesAtZoom: function(r) {
        for (var o in this._tiles)
          this._tiles[o].coords.z === r && this._removeTile(o);
      },
      _removeAllTiles: function() {
        for (var r in this._tiles)
          this._removeTile(r);
      },
      _invalidateAll: function() {
        for (var r in this._levels)
          ze(this._levels[r].el), this._onRemoveLevel(Number(r)), delete this._levels[r];
        this._removeAllTiles(), this._tileZoom = void 0;
      },
      _retainParent: function(r, o, s, u) {
        var d = Math.floor(r / 2), g = Math.floor(o / 2), E = s - 1, M = new R(+d, +g);
        M.z = +E;
        var N = this._tileCoordsToKey(M), D = this._tiles[N];
        return D && D.active ? (D.retain = !0, !0) : (D && D.loaded && (D.retain = !0), E > u ? this._retainParent(d, g, E, u) : !1);
      },
      _retainChildren: function(r, o, s, u) {
        for (var d = 2 * r; d < 2 * r + 2; d++)
          for (var g = 2 * o; g < 2 * o + 2; g++) {
            var E = new R(d, g);
            E.z = s + 1;
            var M = this._tileCoordsToKey(E), N = this._tiles[M];
            if (N && N.active) {
              N.retain = !0;
              continue;
            } else
              N && N.loaded && (N.retain = !0);
            s + 1 < u && this._retainChildren(d, g, s + 1, u);
          }
      },
      _resetView: function(r) {
        var o = r && (r.pinch || r.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), o, o);
      },
      _animateZoom: function(r) {
        this._setView(r.center, r.zoom, !0, r.noUpdate);
      },
      _clampZoom: function(r) {
        var o = this.options;
        return o.minNativeZoom !== void 0 && r < o.minNativeZoom ? o.minNativeZoom : o.maxNativeZoom !== void 0 && o.maxNativeZoom < r ? o.maxNativeZoom : r;
      },
      _setView: function(r, o, s, u) {
        var d = Math.round(o);
        this.options.maxZoom !== void 0 && d > this.options.maxZoom || this.options.minZoom !== void 0 && d < this.options.minZoom ? d = void 0 : d = this._clampZoom(d);
        var g = this.options.updateWhenZooming && d !== this._tileZoom;
        (!u || g) && (this._tileZoom = d, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), d !== void 0 && this._update(r), s || this._pruneTiles(), this._noPrune = !!s), this._setZoomTransforms(r, o);
      },
      _setZoomTransforms: function(r, o) {
        for (var s in this._levels)
          this._setZoomTransform(this._levels[s], r, o);
      },
      _setZoomTransform: function(r, o, s) {
        var u = this._map.getZoomScale(s, r.zoom), d = r.origin.multiplyBy(u).subtract(this._map._getNewPixelOrigin(o, s)).round();
        X.any3d ? Qn(r.el, d, u) : He(r.el, d);
      },
      _resetGrid: function() {
        var r = this._map, o = r.options.crs, s = this._tileSize = this.getTileSize(), u = this._tileZoom, d = this._map.getPixelWorldBounds(this._tileZoom);
        d && (this._globalTileRange = this._pxBoundsToTileRange(d)), this._wrapX = o.wrapLng && !this.options.noWrap && [
          Math.floor(r.project([0, o.wrapLng[0]], u).x / s.x),
          Math.ceil(r.project([0, o.wrapLng[1]], u).x / s.y)
        ], this._wrapY = o.wrapLat && !this.options.noWrap && [
          Math.floor(r.project([o.wrapLat[0], 0], u).y / s.x),
          Math.ceil(r.project([o.wrapLat[1], 0], u).y / s.y)
        ];
      },
      _onMoveEnd: function() {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function(r) {
        var o = this._map, s = o._animatingZoom ? Math.max(o._animateToZoom, o.getZoom()) : o.getZoom(), u = o.getZoomScale(s, this._tileZoom), d = o.project(r, this._tileZoom).floor(), g = o.getSize().divideBy(u * 2);
        return new K(d.subtract(g), d.add(g));
      },
      // Private method to load tiles in the grid's active zoom level according to map bounds
      _update: function(r) {
        var o = this._map;
        if (o) {
          var s = this._clampZoom(o.getZoom());
          if (r === void 0 && (r = o.getCenter()), this._tileZoom !== void 0) {
            var u = this._getTiledPixelBounds(r), d = this._pxBoundsToTileRange(u), g = d.getCenter(), E = [], M = this.options.keepBuffer, N = new K(
              d.getBottomLeft().subtract([M, -M]),
              d.getTopRight().add([M, -M])
            );
            if (!(isFinite(d.min.x) && isFinite(d.min.y) && isFinite(d.max.x) && isFinite(d.max.y)))
              throw new Error("Attempted to load an infinite number of tiles");
            for (var D in this._tiles) {
              var H = this._tiles[D].coords;
              (H.z !== this._tileZoom || !N.contains(new R(H.x, H.y))) && (this._tiles[D].current = !1);
            }
            if (Math.abs(s - this._tileZoom) > 1) {
              this._setView(r, s);
              return;
            }
            for (var se = d.min.y; se <= d.max.y; se++)
              for (var ye = d.min.x; ye <= d.max.x; ye++) {
                var Mt = new R(ye, se);
                if (Mt.z = this._tileZoom, !!this._isValidTile(Mt)) {
                  var ct = this._tiles[this._tileCoordsToKey(Mt)];
                  ct ? ct.current = !0 : E.push(Mt);
                }
              }
            if (E.sort(function(Ft, Hi) {
              return Ft.distanceTo(g) - Hi.distanceTo(g);
            }), E.length !== 0) {
              this._loading || (this._loading = !0, this.fire("loading"));
              var hn = document.createDocumentFragment();
              for (ye = 0; ye < E.length; ye++)
                this._addTile(E[ye], hn);
              this._level.el.appendChild(hn);
            }
          }
        }
      },
      _isValidTile: function(r) {
        var o = this._map.options.crs;
        if (!o.infinite) {
          var s = this._globalTileRange;
          if (!o.wrapLng && (r.x < s.min.x || r.x > s.max.x) || !o.wrapLat && (r.y < s.min.y || r.y > s.max.y))
            return !1;
        }
        if (!this.options.bounds)
          return !0;
        var u = this._tileCoordsToBounds(r);
        return ae(this.options.bounds).overlaps(u);
      },
      _keyToBounds: function(r) {
        return this._tileCoordsToBounds(this._keyToTileCoords(r));
      },
      _tileCoordsToNwSe: function(r) {
        var o = this._map, s = this.getTileSize(), u = r.scaleBy(s), d = u.add(s), g = o.unproject(u, r.z), E = o.unproject(d, r.z);
        return [g, E];
      },
      // converts tile coordinates to its geographical bounds
      _tileCoordsToBounds: function(r) {
        var o = this._tileCoordsToNwSe(r), s = new De(o[0], o[1]);
        return this.options.noWrap || (s = this._map.wrapLatLngBounds(s)), s;
      },
      // converts tile coordinates to key for the tile cache
      _tileCoordsToKey: function(r) {
        return r.x + ":" + r.y + ":" + r.z;
      },
      // converts tile cache key to coordinates
      _keyToTileCoords: function(r) {
        var o = r.split(":"), s = new R(+o[0], +o[1]);
        return s.z = +o[2], s;
      },
      _removeTile: function(r) {
        var o = this._tiles[r];
        o && (ze(o.el), delete this._tiles[r], this.fire("tileunload", {
          tile: o.el,
          coords: this._keyToTileCoords(r)
        }));
      },
      _initTile: function(r) {
        de(r, "leaflet-tile");
        var o = this.getTileSize();
        r.style.width = o.x + "px", r.style.height = o.y + "px", r.onselectstart = v, r.onmousemove = v, X.ielt9 && this.options.opacity < 1 && Bt(r, this.options.opacity);
      },
      _addTile: function(r, o) {
        var s = this._getTilePos(r), u = this._tileCoordsToKey(r), d = this.createTile(this._wrapCoords(r), c(this._tileReady, this, r));
        this._initTile(d), this.createTile.length < 2 && ce(c(this._tileReady, this, r, null, d)), He(d, s), this._tiles[u] = {
          el: d,
          coords: r,
          current: !0
        }, o.appendChild(d), this.fire("tileloadstart", {
          tile: d,
          coords: r
        });
      },
      _tileReady: function(r, o, s) {
        o && this.fire("tileerror", {
          error: o,
          tile: s,
          coords: r
        });
        var u = this._tileCoordsToKey(r);
        s = this._tiles[u], s && (s.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (Bt(s.el, 0), Ee(this._fadeFrame), this._fadeFrame = ce(this._updateOpacity, this)) : (s.active = !0, this._pruneTiles()), o || (de(s.el, "leaflet-tile-loaded"), this.fire("tileload", {
          tile: s.el,
          coords: r
        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), X.ielt9 || !this._map._fadeAnimated ? ce(this._pruneTiles, this) : setTimeout(c(this._pruneTiles, this), 250)));
      },
      _getTilePos: function(r) {
        return r.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function(r) {
        var o = new R(
          this._wrapX ? y(r.x, this._wrapX) : r.x,
          this._wrapY ? y(r.y, this._wrapY) : r.y
        );
        return o.z = r.z, o;
      },
      _pxBoundsToTileRange: function(r) {
        var o = this.getTileSize();
        return new K(
          r.min.unscaleBy(o).floor(),
          r.max.unscaleBy(o).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function() {
        for (var r in this._tiles)
          if (!this._tiles[r].loaded)
            return !1;
        return !0;
      }
    });
    function Nv(r) {
      return new ra(r);
    }
    var Wi = ra.extend({
      // @section
      // @aka TileLayer options
      options: {
        // @option minZoom: Number = 0
        // The minimum zoom level down to which this layer will be displayed (inclusive).
        minZoom: 0,
        // @option maxZoom: Number = 18
        // The maximum zoom level up to which this layer will be displayed (inclusive).
        maxZoom: 18,
        // @option subdomains: String|String[] = 'abc'
        // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
        subdomains: "abc",
        // @option errorTileUrl: String = ''
        // URL to the tile image to show in place of the tile that failed to load.
        errorTileUrl: "",
        // @option zoomOffset: Number = 0
        // The zoom number used in tile URLs will be offset with this value.
        zoomOffset: 0,
        // @option tms: Boolean = false
        // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
        tms: !1,
        // @option zoomReverse: Boolean = false
        // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
        zoomReverse: !1,
        // @option detectRetina: Boolean = false
        // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
        detectRetina: !1,
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the tiles.
        // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1,
        // @option referrerPolicy: Boolean|String = false
        // Whether the referrerPolicy attribute will be added to the tiles.
        // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
        // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
        // (e.g. to validate an API token).
        // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
        referrerPolicy: !1
      },
      initialize: function(r, o) {
        this._url = r, o = T(this, o), o.detectRetina && X.retina && o.maxZoom > 0 ? (o.tileSize = Math.floor(o.tileSize / 2), o.zoomReverse ? (o.zoomOffset--, o.minZoom = Math.min(o.maxZoom, o.minZoom + 1)) : (o.zoomOffset++, o.maxZoom = Math.max(o.minZoom, o.maxZoom - 1)), o.minZoom = Math.max(0, o.minZoom)) : o.zoomReverse ? o.minZoom = Math.min(o.maxZoom, o.minZoom) : o.maxZoom = Math.max(o.minZoom, o.maxZoom), typeof o.subdomains == "string" && (o.subdomains = o.subdomains.split("")), this.on("tileunload", this._onTileRemove);
      },
      // @method setUrl(url: String, noRedraw?: Boolean): this
      // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
      // If the URL does not change, the layer will not be redrawn unless
      // the noRedraw parameter is set to false.
      setUrl: function(r, o) {
        return this._url === r && o === void 0 && (o = !0), this._url = r, o || this.redraw(), this;
      },
      // @method createTile(coords: Object, done?: Function): HTMLElement
      // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
      // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
      // callback is called when the tile has been loaded.
      createTile: function(r, o) {
        var s = document.createElement("img");
        return ue(s, "load", c(this._tileOnLoad, this, o, s)), ue(s, "error", c(this._tileOnError, this, o, s)), (this.options.crossOrigin || this.options.crossOrigin === "") && (s.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (s.referrerPolicy = this.options.referrerPolicy), s.alt = "", s.src = this.getTileUrl(r), s;
      },
      // @section Extension methods
      // @uninheritable
      // Layers extending `TileLayer` might reimplement the following method.
      // @method getTileUrl(coords: Object): String
      // Called only internally, returns the URL for a tile given its coordinates.
      // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
      getTileUrl: function(r) {
        var o = {
          r: X.retina ? "@2x" : "",
          s: this._getSubdomain(r),
          x: r.x,
          y: r.y,
          z: this._getZoomForUrl()
        };
        if (this._map && !this._map.options.crs.infinite) {
          var s = this._globalTileRange.max.y - r.y;
          this.options.tms && (o.y = s), o["-y"] = s;
        }
        return P(this._url, a(o, this.options));
      },
      _tileOnLoad: function(r, o) {
        X.ielt9 ? setTimeout(c(r, this, null, o), 0) : r(null, o);
      },
      _tileOnError: function(r, o, s) {
        var u = this.options.errorTileUrl;
        u && o.getAttribute("src") !== u && (o.src = u), r(s, o);
      },
      _onTileRemove: function(r) {
        r.tile.onload = null;
      },
      _getZoomForUrl: function() {
        var r = this._tileZoom, o = this.options.maxZoom, s = this.options.zoomReverse, u = this.options.zoomOffset;
        return s && (r = o - r), r + u;
      },
      _getSubdomain: function(r) {
        var o = Math.abs(r.x + r.y) % this.options.subdomains.length;
        return this.options.subdomains[o];
      },
      // stops loading all tiles in the background layer
      _abortLoading: function() {
        var r, o;
        for (r in this._tiles)
          if (this._tiles[r].coords.z !== this._tileZoom && (o = this._tiles[r].el, o.onload = v, o.onerror = v, !o.complete)) {
            o.src = k;
            var s = this._tiles[r].coords;
            ze(o), delete this._tiles[r], this.fire("tileabort", {
              tile: o,
              coords: s
            });
          }
      },
      _removeTile: function(r) {
        var o = this._tiles[r];
        if (o)
          return o.el.setAttribute("src", k), ra.prototype._removeTile.call(this, r);
      },
      _tileReady: function(r, o, s) {
        if (!(!this._map || s && s.getAttribute("src") === k))
          return ra.prototype._tileReady.call(this, r, o, s);
      }
    });
    function Wh(r, o) {
      return new Wi(r, o);
    }
    var Hh = Wi.extend({
      // @section
      // @aka TileLayer.WMS options
      // If any custom options not documented here are used, they will be sent to the
      // WMS server as extra parameters in each request URL. This can be useful for
      // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        // @option layers: String = ''
        // **(required)** Comma-separated list of WMS layers to show.
        layers: "",
        // @option styles: String = ''
        // Comma-separated list of WMS styles.
        styles: "",
        // @option format: String = 'image/jpeg'
        // WMS image format (use `'image/png'` for layers with transparency).
        format: "image/jpeg",
        // @option transparent: Boolean = false
        // If `true`, the WMS service will return images with transparency.
        transparent: !1,
        // @option version: String = '1.1.1'
        // Version of the WMS service to use
        version: "1.1.1"
      },
      options: {
        // @option crs: CRS = null
        // Coordinate Reference System to use for the WMS requests, defaults to
        // map CRS. Don't change this if you're not sure what it means.
        crs: null,
        // @option uppercase: Boolean = false
        // If `true`, WMS request parameter keys will be uppercase.
        uppercase: !1
      },
      initialize: function(r, o) {
        this._url = r;
        var s = a({}, this.defaultWmsParams);
        for (var u in o)
          u in this.options || (s[u] = o[u]);
        o = T(this, o);
        var d = o.detectRetina && X.retina ? 2 : 1, g = this.getTileSize();
        s.width = g.x * d, s.height = g.y * d, this.wmsParams = s;
      },
      onAdd: function(r) {
        this._crs = this.options.crs || r.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var o = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[o] = this._crs.code, Wi.prototype.onAdd.call(this, r);
      },
      getTileUrl: function(r) {
        var o = this._tileCoordsToNwSe(r), s = this._crs, u = me(s.project(o[0]), s.project(o[1])), d = u.min, g = u.max, E = (this._wmsVersion >= 1.3 && this._crs === Bh ? [d.y, d.x, g.y, g.x] : [d.x, d.y, g.x, g.y]).join(","), M = Wi.prototype.getTileUrl.call(this, r);
        return M + j(this.wmsParams, M, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + E;
      },
      // @method setParams(params: Object, noRedraw?: Boolean): this
      // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
      setParams: function(r, o) {
        return a(this.wmsParams, r), o || this.redraw(), this;
      }
    });
    function $v(r, o) {
      return new Hh(r, o);
    }
    Wi.WMS = Hh, Wh.wms = $v;
    var ir = Tn.extend({
      // @section
      // @aka Renderer options
      options: {
        // @option padding: Number = 0.1
        // How much to extend the clip area around the map view (relative to its size)
        // e.g. 0.1 would be 10% of map view in each direction
        padding: 0.1
      },
      initialize: function(r) {
        T(this, r), m(this), this._layers = this._layers || {};
      },
      onAdd: function() {
        this._container || (this._initContainer(), de(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
      },
      onRemove: function() {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function() {
        var r = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd
        };
        return this._zoomAnimated && (r.zoomanim = this._onAnimZoom), r;
      },
      _onAnimZoom: function(r) {
        this._updateTransform(r.center, r.zoom);
      },
      _onZoom: function() {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function(r, o) {
        var s = this._map.getZoomScale(o, this._zoom), u = this._map.getSize().multiplyBy(0.5 + this.options.padding), d = this._map.project(this._center, o), g = u.multiplyBy(-s).add(d).subtract(this._map._getNewPixelOrigin(r, o));
        X.any3d ? Qn(this._container, g, s) : He(this._container, g);
      },
      _reset: function() {
        this._update(), this._updateTransform(this._center, this._zoom);
        for (var r in this._layers)
          this._layers[r]._reset();
      },
      _onZoomEnd: function() {
        for (var r in this._layers)
          this._layers[r]._project();
      },
      _updatePaths: function() {
        for (var r in this._layers)
          this._layers[r]._update();
      },
      _update: function() {
        var r = this.options.padding, o = this._map.getSize(), s = this._map.containerPointToLayerPoint(o.multiplyBy(-r)).round();
        this._bounds = new K(s, s.add(o.multiplyBy(1 + r * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      }
    }), Gh = ir.extend({
      // @section
      // @aka Canvas options
      options: {
        // @option tolerance: Number = 0
        // How much to extend the click tolerance around a path/object on the map.
        tolerance: 0
      },
      getEvents: function() {
        var r = ir.prototype.getEvents.call(this);
        return r.viewprereset = this._onViewPreReset, r;
      },
      _onViewPreReset: function() {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function() {
        ir.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function() {
        var r = this._container = document.createElement("canvas");
        ue(r, "mousemove", this._onMouseMove, this), ue(r, "click dblclick mousedown mouseup contextmenu", this._onClick, this), ue(r, "mouseout", this._handleMouseOut, this), r._leaflet_disable_events = !0, this._ctx = r.getContext("2d");
      },
      _destroyContainer: function() {
        Ee(this._redrawRequest), delete this._ctx, ze(this._container), Ce(this._container), delete this._container;
      },
      _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          var r;
          this._redrawBounds = null;
          for (var o in this._layers)
            r = this._layers[o], r._update();
          this._redraw();
        }
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          ir.prototype._update.call(this);
          var r = this._bounds, o = this._container, s = r.getSize(), u = X.retina ? 2 : 1;
          He(o, r.min), o.width = u * s.x, o.height = u * s.y, o.style.width = s.x + "px", o.style.height = s.y + "px", X.retina && this._ctx.scale(2, 2), this._ctx.translate(-r.min.x, -r.min.y), this.fire("update");
        }
      },
      _reset: function() {
        ir.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
      },
      _initPath: function(r) {
        this._updateDashArray(r), this._layers[m(r)] = r;
        var o = r._order = {
          layer: r,
          prev: this._drawLast,
          next: null
        };
        this._drawLast && (this._drawLast.next = o), this._drawLast = o, this._drawFirst = this._drawFirst || this._drawLast;
      },
      _addPath: function(r) {
        this._requestRedraw(r);
      },
      _removePath: function(r) {
        var o = r._order, s = o.next, u = o.prev;
        s ? s.prev = u : this._drawLast = u, u ? u.next = s : this._drawFirst = s, delete r._order, delete this._layers[m(r)], this._requestRedraw(r);
      },
      _updatePath: function(r) {
        this._extendRedrawBounds(r), r._project(), r._update(), this._requestRedraw(r);
      },
      _updateStyle: function(r) {
        this._updateDashArray(r), this._requestRedraw(r);
      },
      _updateDashArray: function(r) {
        if (typeof r.options.dashArray == "string") {
          var o = r.options.dashArray.split(/[, ]+/), s = [], u, d;
          for (d = 0; d < o.length; d++) {
            if (u = Number(o[d]), isNaN(u))
              return;
            s.push(u);
          }
          r.options._dashArray = s;
        } else
          r.options._dashArray = r.options.dashArray;
      },
      _requestRedraw: function(r) {
        this._map && (this._extendRedrawBounds(r), this._redrawRequest = this._redrawRequest || ce(this._redraw, this));
      },
      _extendRedrawBounds: function(r) {
        if (r._pxBounds) {
          var o = (r.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new K(), this._redrawBounds.extend(r._pxBounds.min.subtract([o, o])), this._redrawBounds.extend(r._pxBounds.max.add([o, o]));
        }
      },
      _redraw: function() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      },
      _clear: function() {
        var r = this._redrawBounds;
        if (r) {
          var o = r.getSize();
          this._ctx.clearRect(r.min.x, r.min.y, o.x, o.y);
        } else
          this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
      },
      _draw: function() {
        var r, o = this._redrawBounds;
        if (this._ctx.save(), o) {
          var s = o.getSize();
          this._ctx.beginPath(), this._ctx.rect(o.min.x, o.min.y, s.x, s.y), this._ctx.clip();
        }
        this._drawing = !0;
        for (var u = this._drawFirst; u; u = u.next)
          r = u.layer, (!o || r._pxBounds && r._pxBounds.intersects(o)) && r._updatePath();
        this._drawing = !1, this._ctx.restore();
      },
      _updatePoly: function(r, o) {
        if (this._drawing) {
          var s, u, d, g, E = r._parts, M = E.length, N = this._ctx;
          if (M) {
            for (N.beginPath(), s = 0; s < M; s++) {
              for (u = 0, d = E[s].length; u < d; u++)
                g = E[s][u], N[u ? "lineTo" : "moveTo"](g.x, g.y);
              o && N.closePath();
            }
            this._fillStroke(N, r);
          }
        }
      },
      _updateCircle: function(r) {
        if (!(!this._drawing || r._empty())) {
          var o = r._point, s = this._ctx, u = Math.max(Math.round(r._radius), 1), d = (Math.max(Math.round(r._radiusY), 1) || u) / u;
          d !== 1 && (s.save(), s.scale(1, d)), s.beginPath(), s.arc(o.x, o.y / d, u, 0, Math.PI * 2, !1), d !== 1 && s.restore(), this._fillStroke(s, r);
        }
      },
      _fillStroke: function(r, o) {
        var s = o.options;
        s.fill && (r.globalAlpha = s.fillOpacity, r.fillStyle = s.fillColor || s.color, r.fill(s.fillRule || "evenodd")), s.stroke && s.weight !== 0 && (r.setLineDash && r.setLineDash(o.options && o.options._dashArray || []), r.globalAlpha = s.opacity, r.lineWidth = s.weight, r.strokeStyle = s.color, r.lineCap = s.lineCap, r.lineJoin = s.lineJoin, r.stroke());
      },
      // Canvas obviously doesn't have mouse events for individual drawn objects,
      // so we emulate that by calculating what's under the mouse on mousemove/click manually
      _onClick: function(r) {
        for (var o = this._map.mouseEventToLayerPoint(r), s, u, d = this._drawFirst; d; d = d.next)
          s = d.layer, s.options.interactive && s._containsPoint(o) && (!(r.type === "click" || r.type === "preclick") || !this._map._draggableMoved(s)) && (u = s);
        this._fireEvent(u ? [u] : !1, r);
      },
      _onMouseMove: function(r) {
        if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
          var o = this._map.mouseEventToLayerPoint(r);
          this._handleMouseHover(r, o);
        }
      },
      _handleMouseOut: function(r) {
        var o = this._hoveredLayer;
        o && (Re(this._container, "leaflet-interactive"), this._fireEvent([o], r, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
      },
      _handleMouseHover: function(r, o) {
        if (!this._mouseHoverThrottled) {
          for (var s, u, d = this._drawFirst; d; d = d.next)
            s = d.layer, s.options.interactive && s._containsPoint(o) && (u = s);
          u !== this._hoveredLayer && (this._handleMouseOut(r), u && (de(this._container, "leaflet-interactive"), this._fireEvent([u], r, "mouseover"), this._hoveredLayer = u)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, r), this._mouseHoverThrottled = !0, setTimeout(c(function() {
            this._mouseHoverThrottled = !1;
          }, this), 32);
        }
      },
      _fireEvent: function(r, o, s) {
        this._map._fireDOMEvent(o, s || o.type, r);
      },
      _bringToFront: function(r) {
        var o = r._order;
        if (o) {
          var s = o.next, u = o.prev;
          if (s)
            s.prev = u;
          else
            return;
          u ? u.next = s : s && (this._drawFirst = s), o.prev = this._drawLast, this._drawLast.next = o, o.next = null, this._drawLast = o, this._requestRedraw(r);
        }
      },
      _bringToBack: function(r) {
        var o = r._order;
        if (o) {
          var s = o.next, u = o.prev;
          if (u)
            u.next = s;
          else
            return;
          s ? s.prev = u : u && (this._drawLast = u), o.prev = null, o.next = this._drawFirst, this._drawFirst.prev = o, this._drawFirst = o, this._requestRedraw(r);
        }
      }
    });
    function Kh(r) {
      return X.canvas ? new Gh(r) : null;
    }
    var ia = function() {
      try {
        return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(r) {
          return document.createElement("<lvml:" + r + ' class="lvml">');
        };
      } catch {
      }
      return function(r) {
        return document.createElement("<" + r + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }(), Iv = {
      _initContainer: function() {
        this._container = Se("div", "leaflet-vml-container");
      },
      _update: function() {
        this._map._animatingZoom || (ir.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function(r) {
        var o = r._container = ia("shape");
        de(o, "leaflet-vml-shape " + (this.options.className || "")), o.coordsize = "1 1", r._path = ia("path"), o.appendChild(r._path), this._updateStyle(r), this._layers[m(r)] = r;
      },
      _addPath: function(r) {
        var o = r._container;
        this._container.appendChild(o), r.options.interactive && r.addInteractiveTarget(o);
      },
      _removePath: function(r) {
        var o = r._container;
        ze(o), r.removeInteractiveTarget(o), delete this._layers[m(r)];
      },
      _updateStyle: function(r) {
        var o = r._stroke, s = r._fill, u = r.options, d = r._container;
        d.stroked = !!u.stroke, d.filled = !!u.fill, u.stroke ? (o || (o = r._stroke = ia("stroke")), d.appendChild(o), o.weight = u.weight + "px", o.color = u.color, o.opacity = u.opacity, u.dashArray ? o.dashStyle = x(u.dashArray) ? u.dashArray.join(" ") : u.dashArray.replace(/( *, *)/g, " ") : o.dashStyle = "", o.endcap = u.lineCap.replace("butt", "flat"), o.joinstyle = u.lineJoin) : o && (d.removeChild(o), r._stroke = null), u.fill ? (s || (s = r._fill = ia("fill")), d.appendChild(s), s.color = u.fillColor || u.color, s.opacity = u.fillOpacity) : s && (d.removeChild(s), r._fill = null);
      },
      _updateCircle: function(r) {
        var o = r._point.round(), s = Math.round(r._radius), u = Math.round(r._radiusY || s);
        this._setPath(r, r._empty() ? "M0 0" : "AL " + o.x + "," + o.y + " " + s + "," + u + " 0," + 65535 * 360);
      },
      _setPath: function(r, o) {
        r._path.v = o;
      },
      _bringToFront: function(r) {
        Sn(r._container);
      },
      _bringToBack: function(r) {
        Pr(r._container);
      }
    }, Rs = X.vml ? ia : Ei, oa = ir.extend({
      _initContainer: function() {
        this._container = Rs("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Rs("g"), this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function() {
        ze(this._container), Ce(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          ir.prototype._update.call(this);
          var r = this._bounds, o = r.getSize(), s = this._container;
          (!this._svgSize || !this._svgSize.equals(o)) && (this._svgSize = o, s.setAttribute("width", o.x), s.setAttribute("height", o.y)), He(s, r.min), s.setAttribute("viewBox", [r.min.x, r.min.y, o.x, o.y].join(" ")), this.fire("update");
        }
      },
      // methods below are called by vector layers implementations
      _initPath: function(r) {
        var o = r._path = Rs("path");
        r.options.className && de(o, r.options.className), r.options.interactive && de(o, "leaflet-interactive"), this._updateStyle(r), this._layers[m(r)] = r;
      },
      _addPath: function(r) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(r._path), r.addInteractiveTarget(r._path);
      },
      _removePath: function(r) {
        ze(r._path), r.removeInteractiveTarget(r._path), delete this._layers[m(r)];
      },
      _updatePath: function(r) {
        r._project(), r._update();
      },
      _updateStyle: function(r) {
        var o = r._path, s = r.options;
        o && (s.stroke ? (o.setAttribute("stroke", s.color), o.setAttribute("stroke-opacity", s.opacity), o.setAttribute("stroke-width", s.weight), o.setAttribute("stroke-linecap", s.lineCap), o.setAttribute("stroke-linejoin", s.lineJoin), s.dashArray ? o.setAttribute("stroke-dasharray", s.dashArray) : o.removeAttribute("stroke-dasharray"), s.dashOffset ? o.setAttribute("stroke-dashoffset", s.dashOffset) : o.removeAttribute("stroke-dashoffset")) : o.setAttribute("stroke", "none"), s.fill ? (o.setAttribute("fill", s.fillColor || s.color), o.setAttribute("fill-opacity", s.fillOpacity), o.setAttribute("fill-rule", s.fillRule || "evenodd")) : o.setAttribute("fill", "none"));
      },
      _updatePoly: function(r, o) {
        this._setPath(r, Li(r._parts, o));
      },
      _updateCircle: function(r) {
        var o = r._point, s = Math.max(Math.round(r._radius), 1), u = Math.max(Math.round(r._radiusY), 1) || s, d = "a" + s + "," + u + " 0 1,0 ", g = r._empty() ? "M0 0" : "M" + (o.x - s) + "," + o.y + d + s * 2 + ",0 " + d + -s * 2 + ",0 ";
        this._setPath(r, g);
      },
      _setPath: function(r, o) {
        r._path.setAttribute("d", o);
      },
      // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
      _bringToFront: function(r) {
        Sn(r._path);
      },
      _bringToBack: function(r) {
        Pr(r._path);
      }
    });
    X.vml && oa.include(Iv);
    function Jh(r) {
      return X.svg || X.vml ? new oa(r) : null;
    }
    ne.include({
      // @namespace Map; @method getRenderer(layer: Path): Renderer
      // Returns the instance of `Renderer` that should be used to render the given
      // `Path`. It will ensure that the `renderer` options of the map and paths
      // are respected, and that the renderers do exist on the map.
      getRenderer: function(r) {
        var o = r.options.renderer || this._getPaneRenderer(r.options.pane) || this.options.renderer || this._renderer;
        return o || (o = this._renderer = this._createRenderer()), this.hasLayer(o) || this.addLayer(o), o;
      },
      _getPaneRenderer: function(r) {
        if (r === "overlayPane" || r === void 0)
          return !1;
        var o = this._paneRenderers[r];
        return o === void 0 && (o = this._createRenderer({ pane: r }), this._paneRenderers[r] = o), o;
      },
      _createRenderer: function(r) {
        return this.options.preferCanvas && Kh(r) || Jh(r);
      }
    });
    var qh = Vi.extend({
      initialize: function(r, o) {
        Vi.prototype.initialize.call(this, this._boundsToLatLngs(r), o);
      },
      // @method setBounds(latLngBounds: LatLngBounds): this
      // Redraws the rectangle with the passed bounds.
      setBounds: function(r) {
        return this.setLatLngs(this._boundsToLatLngs(r));
      },
      _boundsToLatLngs: function(r) {
        return r = ae(r), [
          r.getSouthWest(),
          r.getNorthWest(),
          r.getNorthEast(),
          r.getSouthEast()
        ];
      }
    });
    function Rv(r, o) {
      return new qh(r, o);
    }
    oa.create = Rs, oa.pointsToPath = Li, rr.geometryToLayer = bs, rr.coordsToLatLng = Lc, rr.coordsToLatLngs = Ms, rr.latLngToCoords = Tc, rr.latLngsToCoords = As, rr.getFeature = Ui, rr.asFeature = zs, ne.mergeOptions({
      // @option boxZoom: Boolean = true
      // Whether the map can be zoomed to a rectangular area specified by
      // dragging the mouse while pressing the shift key.
      boxZoom: !0
    });
    var Yh = bt.extend({
      initialize: function(r) {
        this._map = r, this._container = r._container, this._pane = r._panes.overlayPane, this._resetStateTimeout = 0, r.on("unload", this._destroy, this);
      },
      addHooks: function() {
        ue(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function() {
        Ce(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function() {
        return this._moved;
      },
      _destroy: function() {
        ze(this._pane), delete this._pane;
      },
      _resetState: function() {
        this._resetStateTimeout = 0, this._moved = !1;
      },
      _clearDeferredResetState: function() {
        this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
      },
      _onMouseDown: function(r) {
        if (!r.shiftKey || r.which !== 1 && r.button !== 1)
          return !1;
        this._clearDeferredResetState(), this._resetState(), Rn(), cn(), this._startPoint = this._map.mouseEventToContainerPoint(r), ue(document, {
          contextmenu: Xn,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseMove: function(r) {
        this._moved || (this._moved = !0, this._box = Se("div", "leaflet-zoom-box", this._container), de(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(r);
        var o = new K(this._point, this._startPoint), s = o.getSize();
        He(this._box, o.min), this._box.style.width = s.x + "px", this._box.style.height = s.y + "px";
      },
      _finish: function() {
        this._moved && (ze(this._box), Re(this._container, "leaflet-crosshair")), un(), Qo(), Ce(document, {
          contextmenu: Xn,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseUp: function(r) {
        if (!(r.which !== 1 && r.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(c(this._resetState, this), 0);
          var o = new De(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          );
          this._map.fitBounds(o).fire("boxzoomend", { boxZoomBounds: o });
        }
      },
      _onKeyDown: function(r) {
        r.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      }
    });
    ne.addInitHook("addHandler", "boxZoom", Yh), ne.mergeOptions({
      // @option doubleClickZoom: Boolean|String = true
      // Whether the map can be zoomed in by double clicking on it and
      // zoomed out by double clicking while holding shift. If passed
      // `'center'`, double-click zoom will zoom to the center of the
      //  view regardless of where the mouse was.
      doubleClickZoom: !0
    });
    var Qh = bt.extend({
      addHooks: function() {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function() {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function(r) {
        var o = this._map, s = o.getZoom(), u = o.options.zoomDelta, d = r.originalEvent.shiftKey ? s - u : s + u;
        o.options.doubleClickZoom === "center" ? o.setZoom(d) : o.setZoomAround(r.containerPoint, d);
      }
    });
    ne.addInitHook("addHandler", "doubleClickZoom", Qh), ne.mergeOptions({
      // @option dragging: Boolean = true
      // Whether the map is draggable with mouse/touch or not.
      dragging: !0,
      // @section Panning Inertia Options
      // @option inertia: Boolean = *
      // If enabled, panning of the map will have an inertia effect where
      // the map builds momentum while dragging and continues moving in
      // the same direction for some time. Feels especially nice on touch
      // devices. Enabled by default.
      inertia: !0,
      // @option inertiaDeceleration: Number = 3000
      // The rate with which the inertial movement slows down, in pixels/second².
      inertiaDeceleration: 3400,
      // px/s^2
      // @option inertiaMaxSpeed: Number = Infinity
      // Max speed of the inertial movement, in pixels/second.
      inertiaMaxSpeed: 1 / 0,
      // px/s
      // @option easeLinearity: Number = 0.2
      easeLinearity: 0.2,
      // TODO refactor, move to CRS
      // @option worldCopyJump: Boolean = false
      // With this option enabled, the map tracks when you pan to another "copy"
      // of the world and seamlessly jumps to the original one so that all overlays
      // like markers and vector layers are still visible.
      worldCopyJump: !1,
      // @option maxBoundsViscosity: Number = 0.0
      // If `maxBounds` is set, this option will control how solid the bounds
      // are when dragging the map around. The default value of `0.0` allows the
      // user to drag outside the bounds at normal speed, higher values will
      // slow down map dragging outside bounds, and `1.0` makes the bounds fully
      // solid, preventing the user from dragging outside the bounds.
      maxBoundsViscosity: 0
    });
    var Xh = bt.extend({
      addHooks: function() {
        if (!this._draggable) {
          var r = this._map;
          this._draggable = new xr(r._mapPane, r._container), this._draggable.on({
            dragstart: this._onDragStart,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this), this._draggable.on("predrag", this._onPreDragLimit, this), r.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), r.on("zoomend", this._onZoomEnd, this), r.whenReady(this._onZoomEnd, this));
        }
        de(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      },
      removeHooks: function() {
        Re(this._map._container, "leaflet-grab"), Re(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      moving: function() {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function() {
        var r = this._map;
        if (r._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
          var o = ae(this._map.options.maxBounds);
          this._offsetLimit = me(
            this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),
            this._map.latLngToContainerPoint(o.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
          ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
        } else
          this._offsetLimit = null;
        r.fire("movestart").fire("dragstart"), r.options.inertia && (this._positions = [], this._times = []);
      },
      _onDrag: function(r) {
        if (this._map.options.inertia) {
          var o = this._lastTime = +/* @__PURE__ */ new Date(), s = this._lastPos = this._draggable._absPos || this._draggable._newPos;
          this._positions.push(s), this._times.push(o), this._prunePositions(o);
        }
        this._map.fire("move", r).fire("drag", r);
      },
      _prunePositions: function(r) {
        for (; this._positions.length > 1 && r - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function() {
        var r = this._map.getSize().divideBy(2), o = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = o.subtract(r).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      },
      _viscousLimit: function(r, o) {
        return r - (r - o) * this._viscosity;
      },
      _onPreDragLimit: function() {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var r = this._draggable._newPos.subtract(this._draggable._startPos), o = this._offsetLimit;
          r.x < o.min.x && (r.x = this._viscousLimit(r.x, o.min.x)), r.y < o.min.y && (r.y = this._viscousLimit(r.y, o.min.y)), r.x > o.max.x && (r.x = this._viscousLimit(r.x, o.max.x)), r.y > o.max.y && (r.y = this._viscousLimit(r.y, o.max.y)), this._draggable._newPos = this._draggable._startPos.add(r);
        }
      },
      _onPreDragWrap: function() {
        var r = this._worldWidth, o = Math.round(r / 2), s = this._initialWorldOffset, u = this._draggable._newPos.x, d = (u - o + s) % r + o - s, g = (u + o + s) % r - o - s, E = Math.abs(d + s) < Math.abs(g + s) ? d : g;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = E;
      },
      _onDragEnd: function(r) {
        var o = this._map, s = o.options, u = !s.inertia || r.noInertia || this._times.length < 2;
        if (o.fire("dragend", r), u)
          o.fire("moveend");
        else {
          this._prunePositions(+/* @__PURE__ */ new Date());
          var d = this._lastPos.subtract(this._positions[0]), g = (this._lastTime - this._times[0]) / 1e3, E = s.easeLinearity, M = d.multiplyBy(E / g), N = M.distanceTo([0, 0]), D = Math.min(s.inertiaMaxSpeed, N), H = M.multiplyBy(D / N), se = D / (s.inertiaDeceleration * E), ye = H.multiplyBy(-se / 2).round();
          !ye.x && !ye.y ? o.fire("moveend") : (ye = o._limitOffset(ye, o.options.maxBounds), ce(function() {
            o.panBy(ye, {
              duration: se,
              easeLinearity: E,
              noMoveStart: !0,
              animate: !0
            });
          }));
        }
      }
    });
    ne.addInitHook("addHandler", "dragging", Xh), ne.mergeOptions({
      // @option keyboard: Boolean = true
      // Makes the map focusable and allows users to navigate the map with keyboard
      // arrows and `+`/`-` keys.
      keyboard: !0,
      // @option keyboardPanDelta: Number = 80
      // Amount of pixels to pan when pressing an arrow key.
      keyboardPanDelta: 80
    });
    var ep = bt.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173]
      },
      initialize: function(r) {
        this._map = r, this._setPanDelta(r.options.keyboardPanDelta), this._setZoomDelta(r.options.zoomDelta);
      },
      addHooks: function() {
        var r = this._map._container;
        r.tabIndex <= 0 && (r.tabIndex = "0"), ue(r, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.on({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      removeHooks: function() {
        this._removeHooks(), Ce(this._map._container, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.off({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      _onMouseDown: function() {
        if (!this._focused) {
          var r = document.body, o = document.documentElement, s = r.scrollTop || o.scrollTop, u = r.scrollLeft || o.scrollLeft;
          this._map._container.focus(), window.scrollTo(u, s);
        }
      },
      _onFocus: function() {
        this._focused = !0, this._map.fire("focus");
      },
      _onBlur: function() {
        this._focused = !1, this._map.fire("blur");
      },
      _setPanDelta: function(r) {
        var o = this._panKeys = {}, s = this.keyCodes, u, d;
        for (u = 0, d = s.left.length; u < d; u++)
          o[s.left[u]] = [-1 * r, 0];
        for (u = 0, d = s.right.length; u < d; u++)
          o[s.right[u]] = [r, 0];
        for (u = 0, d = s.down.length; u < d; u++)
          o[s.down[u]] = [0, r];
        for (u = 0, d = s.up.length; u < d; u++)
          o[s.up[u]] = [0, -1 * r];
      },
      _setZoomDelta: function(r) {
        var o = this._zoomKeys = {}, s = this.keyCodes, u, d;
        for (u = 0, d = s.zoomIn.length; u < d; u++)
          o[s.zoomIn[u]] = r;
        for (u = 0, d = s.zoomOut.length; u < d; u++)
          o[s.zoomOut[u]] = -r;
      },
      _addHooks: function() {
        ue(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function() {
        Ce(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function(r) {
        if (!(r.altKey || r.ctrlKey || r.metaKey)) {
          var o = r.keyCode, s = this._map, u;
          if (o in this._panKeys) {
            if (!s._panAnim || !s._panAnim._inProgress)
              if (u = this._panKeys[o], r.shiftKey && (u = U(u).multiplyBy(3)), s.options.maxBounds && (u = s._limitOffset(U(u), s.options.maxBounds)), s.options.worldCopyJump) {
                var d = s.wrapLatLng(s.unproject(s.project(s.getCenter()).add(u)));
                s.panTo(d);
              } else
                s.panBy(u);
          } else if (o in this._zoomKeys)
            s.setZoom(s.getZoom() + (r.shiftKey ? 3 : 1) * this._zoomKeys[o]);
          else if (o === 27 && s._popup && s._popup.options.closeOnEscapeKey)
            s.closePopup();
          else
            return;
          Xn(r);
        }
      }
    });
    ne.addInitHook("addHandler", "keyboard", ep), ne.mergeOptions({
      // @section Mouse wheel options
      // @option scrollWheelZoom: Boolean|String = true
      // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
      // it will zoom to the center of the view regardless of where the mouse was.
      scrollWheelZoom: !0,
      // @option wheelDebounceTime: Number = 40
      // Limits the rate at which a wheel can fire (in milliseconds). By default
      // user can't zoom via wheel more often than once per 40 ms.
      wheelDebounceTime: 40,
      // @option wheelPxPerZoomLevel: Number = 60
      // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
      // mean a change of one full zoom level. Smaller values will make wheel-zooming
      // faster (and vice versa).
      wheelPxPerZoomLevel: 60
    });
    var tp = bt.extend({
      addHooks: function() {
        ue(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      },
      removeHooks: function() {
        Ce(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function(r) {
        var o = G(r), s = this._map.options.wheelDebounceTime;
        this._delta += o, this._lastMousePos = this._map.mouseEventToContainerPoint(r), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
        var u = Math.max(s - (+/* @__PURE__ */ new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(c(this._performZoom, this), u), Xn(r);
      },
      _performZoom: function() {
        var r = this._map, o = r.getZoom(), s = this._map.options.zoomSnap || 0;
        r._stop();
        var u = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), d = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(u)))) / Math.LN2, g = s ? Math.ceil(d / s) * s : d, E = r._limitZoom(o + (this._delta > 0 ? g : -g)) - o;
        this._delta = 0, this._startTime = null, E && (r.options.scrollWheelZoom === "center" ? r.setZoom(o + E) : r.setZoomAround(this._lastMousePos, o + E));
      }
    });
    ne.addInitHook("addHandler", "scrollWheelZoom", tp);
    var Bv = 600;
    ne.mergeOptions({
      // @section Touch interaction options
      // @option tapHold: Boolean
      // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
      tapHold: X.touchNative && X.safari && X.mobile,
      // @option tapTolerance: Number = 15
      // The max number of pixels a user can shift his finger during touch
      // for it to be considered a valid tap.
      tapTolerance: 15
    });
    var np = bt.extend({
      addHooks: function() {
        ue(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function() {
        Ce(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function(r) {
        if (clearTimeout(this._holdTimeout), r.touches.length === 1) {
          var o = r.touches[0];
          this._startPos = this._newPos = new R(o.clientX, o.clientY), this._holdTimeout = setTimeout(c(function() {
            this._cancel(), this._isTapValid() && (ue(document, "touchend", nt), ue(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", o));
          }, this), Bv), ue(document, "touchend touchcancel contextmenu", this._cancel, this), ue(document, "touchmove", this._onMove, this);
        }
      },
      _cancelClickPrevent: function r() {
        Ce(document, "touchend", nt), Ce(document, "touchend touchcancel", r);
      },
      _cancel: function() {
        clearTimeout(this._holdTimeout), Ce(document, "touchend touchcancel contextmenu", this._cancel, this), Ce(document, "touchmove", this._onMove, this);
      },
      _onMove: function(r) {
        var o = r.touches[0];
        this._newPos = new R(o.clientX, o.clientY);
      },
      _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _simulateEvent: function(r, o) {
        var s = new MouseEvent(r, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          // detail: 1,
          screenX: o.screenX,
          screenY: o.screenY,
          clientX: o.clientX,
          clientY: o.clientY
          // button: 2,
          // buttons: 2
        });
        s._simulated = !0, o.target.dispatchEvent(s);
      }
    });
    ne.addInitHook("addHandler", "tapHold", np), ne.mergeOptions({
      // @section Touch interaction options
      // @option touchZoom: Boolean|String = *
      // Whether the map can be zoomed by touch-dragging with two fingers. If
      // passed `'center'`, it will zoom to the center of the view regardless of
      // where the touch events (fingers) were. Enabled for touch-capable web
      // browsers.
      touchZoom: X.touch,
      // @option bounceAtZoomLimits: Boolean = true
      // Set it to false if you don't want the map to zoom beyond min/max zoom
      // and then bounce back when pinch-zooming.
      bounceAtZoomLimits: !0
    });
    var rp = bt.extend({
      addHooks: function() {
        de(this._map._container, "leaflet-touch-zoom"), ue(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function() {
        Re(this._map._container, "leaflet-touch-zoom"), Ce(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function(r) {
        var o = this._map;
        if (!(!r.touches || r.touches.length !== 2 || o._animatingZoom || this._zooming)) {
          var s = o.mouseEventToContainerPoint(r.touches[0]), u = o.mouseEventToContainerPoint(r.touches[1]);
          this._centerPoint = o.getSize()._divideBy(2), this._startLatLng = o.containerPointToLatLng(this._centerPoint), o.options.touchZoom !== "center" && (this._pinchStartLatLng = o.containerPointToLatLng(s.add(u)._divideBy(2))), this._startDist = s.distanceTo(u), this._startZoom = o.getZoom(), this._moved = !1, this._zooming = !0, o._stop(), ue(document, "touchmove", this._onTouchMove, this), ue(document, "touchend touchcancel", this._onTouchEnd, this), nt(r);
        }
      },
      _onTouchMove: function(r) {
        if (!(!r.touches || r.touches.length !== 2 || !this._zooming)) {
          var o = this._map, s = o.mouseEventToContainerPoint(r.touches[0]), u = o.mouseEventToContainerPoint(r.touches[1]), d = s.distanceTo(u) / this._startDist;
          if (this._zoom = o.getScaleZoom(d, this._startZoom), !o.options.bounceAtZoomLimits && (this._zoom < o.getMinZoom() && d < 1 || this._zoom > o.getMaxZoom() && d > 1) && (this._zoom = o._limitZoom(this._zoom)), o.options.touchZoom === "center") {
            if (this._center = this._startLatLng, d === 1)
              return;
          } else {
            var g = s._add(u)._divideBy(2)._subtract(this._centerPoint);
            if (d === 1 && g.x === 0 && g.y === 0)
              return;
            this._center = o.unproject(o.project(this._pinchStartLatLng, this._zoom).subtract(g), this._zoom);
          }
          this._moved || (o._moveStart(!0, !1), this._moved = !0), Ee(this._animRequest);
          var E = c(o._move, o, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
          this._animRequest = ce(E, this, !0), nt(r);
        }
      },
      _onTouchEnd: function() {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        this._zooming = !1, Ee(this._animRequest), Ce(document, "touchmove", this._onTouchMove, this), Ce(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      }
    });
    ne.addInitHook("addHandler", "touchZoom", rp), ne.BoxZoom = Yh, ne.DoubleClickZoom = Qh, ne.Drag = Xh, ne.Keyboard = ep, ne.ScrollWheelZoom = tp, ne.TapHold = np, ne.TouchZoom = rp, n.Bounds = K, n.Browser = X, n.CRS = lt, n.Canvas = Gh, n.Circle = Ec, n.CircleMarker = ks, n.Class = st, n.Control = Pe, n.DivIcon = Uh, n.DivOverlay = Dn, n.DomEvent = he, n.DomUtil = vc, n.Draggable = xr, n.Evented = It, n.FeatureGroup = tr, n.GeoJSON = rr, n.GridLayer = ra, n.Handler = bt, n.Icon = Zi, n.ImageOverlay = Ns, n.LatLng = Q, n.LatLngBounds = De, n.Layer = Tn, n.LayerGroup = Fi, n.LineUtil = mv, n.Map = ne, n.Marker = Cs, n.Mixin = uv, n.Path = Sr, n.Point = R, n.PolyUtil = cv, n.Polygon = Vi, n.Polyline = nr, n.Popup = $s, n.PosAnimation = Ne, n.Projection = gv, n.Rectangle = qh, n.Renderer = ir, n.SVG = oa, n.SVGOverlay = Vh, n.TileLayer = Wi, n.Tooltip = Is, n.Transformation = Kt, n.Util = sn, n.VideoOverlay = Zh, n.bind = c, n.bounds = me, n.canvas = Kh, n.circle = Ev, n.circleMarker = Sv, n.control = it, n.divIcon = zv, n.extend = a, n.featureGroup = wv, n.geoJSON = Fh, n.geoJson = Ov, n.gridLayer = Nv, n.icon = Pv, n.imageOverlay = Cv, n.latLng = le, n.latLngBounds = ae, n.layerGroup = vv, n.map = rt, n.marker = xv, n.point = U, n.polygon = Tv, n.polyline = Lv, n.popup = Mv, n.rectangle = Rv, n.setOptions = T, n.stamp = m, n.svg = Jh, n.svgOverlay = bv, n.tileLayer = Wh, n.tooltip = Av, n.transformation = ln, n.version = i, n.videoOverlay = kv;
    var Dv = window.L;
    n.noConflict = function() {
      return window.L = Dv, this;
    }, window.L = n;
  });
})(sf, sf.exports);
var _0 = sf.exports;
const Gi = /* @__PURE__ */ ng(_0);
var aa = {}, y0 = (
  /** @class */
  function() {
    function e() {
      this.array = !1, this.set = !1, this.readonly = !1, this.writeonly = !1;
    }
    return e;
  }()
), v0 = (
  /** @class */
  function() {
    function e() {
      this.ctr = function() {
      }, this.beforeDeserialized = function() {
      }, this.onDeserialized = function() {
      }, this.properties = /* @__PURE__ */ new Map();
    }
    return e.prototype.getProperty = function(t) {
      var n = this.properties.get(t);
      return n || (n = new y0(), this.properties.set(t, n)), n;
    }, e;
  }()
), Kn = /* @__PURE__ */ new Map();
function Pn(e) {
  var t = Kn.get(e);
  return t || (t = new v0(), Kn.set(e, t)), t;
}
function gg(e) {
  if (!e)
    return [];
  var t = Object.getPrototypeOf(e);
  return [e.constructor].concat(gg(t));
}
function cp(e) {
  var t = [];
  return Kn.forEach(function(n, i) {
    var a = Object.getPrototypeOf(i.prototype).constructor;
    a === e && t.push([i, n]);
  }), t;
}
function hd(e, t) {
  var n = Kn.get(e), i = [];
  t && n && n.discriminatorProperty && (i = i.concat(cp(e)));
  for (var a; i.length !== 0 && !a; ) {
    var l = i.shift(), c = l[0], p = l[1];
    if (p.hasOwnProperty("discriminatorValue")) {
      if (t && n && p.discriminatorValue === t[n.discriminatorProperty]) {
        if (p.hasOwnProperty("discriminatorProperty"))
          return hd(c, t);
        a = c;
      }
    } else
      i = i.concat(cp(c));
  }
  a || (a = e);
  var m = new Set(gg(Object.create(a.prototype)));
  return Array.from(m).filter(function(_) {
    return Kn.has(_);
  });
}
function w0() {
  return function(e) {
    Pn(e);
  };
}
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var fp;
(function(e) {
  (function(t) {
    var n = typeof _e == "object" ? _e : typeof self == "object" ? self : typeof this == "object" ? this : Function("return this;")(), i = a(e);
    typeof n.Reflect > "u" ? n.Reflect = e : i = a(n.Reflect, i), t(i);
    function a(l, c) {
      return function(p, m) {
        typeof l[p] != "function" && Object.defineProperty(l, p, { configurable: !0, writable: !0, value: m }), c && c(p, m);
      };
    }
  })(function(t) {
    var n = Object.prototype.hasOwnProperty, i = typeof Symbol == "function", a = i && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = i && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", c = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, m = !c && !p, _ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: c ? function() {
        return vr(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return vr({ __proto__: null });
      } : function() {
        return vr({});
      },
      has: m ? function(z, I) {
        return n.call(z, I);
      } : function(z, I) {
        return I in z;
      },
      get: m ? function(z, I) {
        return n.call(z, I) ? z[I] : void 0;
      } : function(z, I) {
        return z[I];
      }
    }, y = Object.getPrototypeOf(Function), v = typeof process == "object" && process["env"] && process["env"].REFLECT_METADATA_USE_MAP_POLYFILL === "true", h = !v && typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ti(), A = !v && typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Kr(), b = !v && typeof WeakMap == "function" ? WeakMap : Oi(), T = new b();
    function j(z, I, F, W) {
      if (K(F)) {
        if (!Jn(z))
          throw new TypeError();
        if (!ln(I))
          throw new TypeError();
        return Y(z, I);
      } else {
        if (!Jn(z))
          throw new TypeError();
        if (!ae(I))
          throw new TypeError();
        if (!ae(W) && !K(W) && !me(W))
          throw new TypeError();
        return me(W) && (W = void 0), F = kt(F), ce(z, I, F, W);
      }
    }
    t("decorate", j);
    function S(z, I) {
      function F(W, q) {
        if (!ae(W))
          throw new TypeError();
        if (!K(q) && !_r(q))
          throw new TypeError();
        It(z, I, W, q);
      }
      return F;
    }
    t("metadata", S);
    function P(z, I, F, W) {
      if (!ae(F))
        throw new TypeError();
      return K(W) || (W = kt(W)), It(z, I, F, W);
    }
    t("defineMetadata", P);
    function x(z, I, F) {
      if (!ae(I))
        throw new TypeError();
      return K(F) || (F = kt(F)), sn(z, I, F);
    }
    t("hasMetadata", x);
    function $(z, I, F) {
      if (!ae(I))
        throw new TypeError();
      return K(F) || (F = kt(F)), st(z, I, F);
    }
    t("hasOwnMetadata", $);
    function k(z, I, F) {
      if (!ae(I))
        throw new TypeError();
      return K(F) || (F = kt(F)), gr(z, I, F);
    }
    t("getMetadata", k);
    function f(z, I, F) {
      if (!ae(I))
        throw new TypeError();
      return K(F) || (F = kt(F)), Ue(z, I, F);
    }
    t("getOwnMetadata", f);
    function O(z, I) {
      if (!ae(z))
        throw new TypeError();
      return K(I) || (I = kt(I)), R(z, I);
    }
    t("getMetadataKeys", O);
    function Z(z, I) {
      if (!ae(z))
        throw new TypeError();
      return K(I) || (I = kt(I)), oe(z, I);
    }
    t("getOwnMetadataKeys", Z);
    function re(z, I, F) {
      if (!ae(I))
        throw new TypeError();
      K(F) || (F = kt(F));
      var W = Ee(
        I,
        F,
        /*Create*/
        !1
      );
      if (K(W) || !W.delete(z))
        return !1;
      if (W.size > 0)
        return !0;
      var q = T.get(I);
      return q.delete(F), q.size > 0 || T.delete(I), !0;
    }
    t("deleteMetadata", re);
    function Y(z, I) {
      for (var F = z.length - 1; F >= 0; --F) {
        var W = z[F], q = W(I);
        if (!K(q) && !me(q)) {
          if (!ln(q))
            throw new TypeError();
          I = q;
        }
      }
      return I;
    }
    function ce(z, I, F, W) {
      for (var q = z.length - 1; q >= 0; --q) {
        var We = z[q], te = We(I, F, W);
        if (!K(te) && !me(te)) {
          if (!ae(te))
            throw new TypeError();
          W = te;
        }
      }
      return W;
    }
    function Ee(z, I, F) {
      var W = T.get(z);
      if (K(W)) {
        if (!F)
          return;
        W = new h(), T.set(z, W);
      }
      var q = W.get(I);
      if (K(q)) {
        if (!F)
          return;
        q = new h(), W.set(I, q);
      }
      return q;
    }
    function sn(z, I, F) {
      var W = st(z, I, F);
      if (W)
        return !0;
      var q = Gr(I);
      return me(q) ? !1 : sn(z, q, F);
    }
    function st(z, I, F) {
      var W = Ee(
        I,
        F,
        /*Create*/
        !1
      );
      return K(W) ? !1 : lt(W.has(z));
    }
    function gr(z, I, F) {
      var W = st(z, I, F);
      if (W)
        return Ue(z, I, F);
      var q = Gr(I);
      if (!me(q))
        return gr(z, q, F);
    }
    function Ue(z, I, F) {
      var W = Ee(
        I,
        F,
        /*Create*/
        !1
      );
      if (!K(W))
        return W.get(z);
    }
    function It(z, I, F, W) {
      var q = Ee(
        F,
        W,
        /*Create*/
        !0
      );
      q.set(z, I);
    }
    function R(z, I) {
      var F = oe(z, I), W = Gr(z);
      if (W === null)
        return F;
      var q = R(W, I);
      if (q.length <= 0)
        return F;
      if (F.length <= 0)
        return q;
      for (var We = new A(), te = [], fe = 0, ee = F; fe < ee.length; fe++) {
        var ve = ee[fe], ge = We.has(ve);
        ge || (We.add(ve), te.push(ve));
      }
      for (var Pt = 0, Jr = q; Pt < Jr.length; Pt++) {
        var ve = Jr[Pt], ge = We.has(ve);
        ge || (We.add(ve), te.push(ve));
      }
      return te;
    }
    function oe(z, I) {
      var F = [], W = Ee(
        z,
        I,
        /*Create*/
        !1
      );
      if (K(W))
        return F;
      for (var q = W.keys(), We = Ei(q), te = 0; ; ) {
        var fe = Hr(We);
        if (!fe)
          return F.length = te, F;
        var ee = Li(fe);
        try {
          F[te] = ee;
        } catch (ve) {
          try {
            yr(We);
          } finally {
            throw ve;
          }
        }
        te++;
      }
    }
    function U(z) {
      if (z === null)
        return 1;
      switch (typeof z) {
        case "undefined":
          return 0;
        case "boolean":
          return 2;
        case "string":
          return 3;
        case "symbol":
          return 4;
        case "number":
          return 5;
        case "object":
          return z === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function K(z) {
      return z === void 0;
    }
    function me(z) {
      return z === null;
    }
    function De(z) {
      return typeof z == "symbol";
    }
    function ae(z) {
      return typeof z == "object" ? z !== null : typeof z == "function";
    }
    function Q(z, I) {
      switch (U(z)) {
        case 0:
          return z;
        case 1:
          return z;
        case 2:
          return z;
        case 3:
          return z;
        case 4:
          return z;
        case 5:
          return z;
      }
      var F = I === 3 ? "string" : I === 5 ? "number" : "default", W = Wr(z, a);
      if (W !== void 0) {
        var q = W.call(z, F);
        if (ae(q))
          throw new TypeError();
        return q;
      }
      return le(z, F === "default" ? "number" : F);
    }
    function le(z, I) {
      if (I === "string") {
        var F = z.toString;
        if (Kt(F)) {
          var W = F.call(z);
          if (!ae(W))
            return W;
        }
        var q = z.valueOf;
        if (Kt(q)) {
          var W = q.call(z);
          if (!ae(W))
            return W;
        }
      } else {
        var q = z.valueOf;
        if (Kt(q)) {
          var W = q.call(z);
          if (!ae(W))
            return W;
        }
        var We = z.toString;
        if (Kt(We)) {
          var W = We.call(z);
          if (!ae(W))
            return W;
        }
      }
      throw new TypeError();
    }
    function lt(z) {
      return !!z;
    }
    function Qe(z) {
      return "" + z;
    }
    function kt(z) {
      var I = Q(
        z,
        3
        /* String */
      );
      return De(I) ? I : Qe(I);
    }
    function Jn(z) {
      return Array.isArray ? Array.isArray(z) : z instanceof Object ? z instanceof Array : Object.prototype.toString.call(z) === "[object Array]";
    }
    function Kt(z) {
      return typeof z == "function";
    }
    function ln(z) {
      return typeof z == "function";
    }
    function _r(z) {
      switch (U(z)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Wr(z, I) {
      var F = z[I];
      if (F != null) {
        if (!Kt(F))
          throw new TypeError();
        return F;
      }
    }
    function Ei(z) {
      var I = Wr(z, l);
      if (!Kt(I))
        throw new TypeError();
      var F = I.call(z);
      if (!ae(F))
        throw new TypeError();
      return F;
    }
    function Li(z) {
      return z.value;
    }
    function Hr(z) {
      var I = z.next();
      return I.done ? !1 : I;
    }
    function yr(z) {
      var I = z.return;
      I && I.call(z);
    }
    function Gr(z) {
      var I = Object.getPrototypeOf(z);
      if (typeof z != "function" || z === y || I !== y)
        return I;
      var F = z.prototype, W = F && Object.getPrototypeOf(F);
      if (W == null || W === Object.prototype)
        return I;
      var q = W.constructor;
      return typeof q != "function" || q === z ? I : q;
    }
    function Ti() {
      var z = {}, I = [], F = (
        /** @class */
        function() {
          function te(fe, ee, ve) {
            this._index = 0, this._keys = fe, this._values = ee, this._selector = ve;
          }
          return te.prototype["@@iterator"] = function() {
            return this;
          }, te.prototype[l] = function() {
            return this;
          }, te.prototype.next = function() {
            var fe = this._index;
            if (fe >= 0 && fe < this._keys.length) {
              var ee = this._selector(this._keys[fe], this._values[fe]);
              return fe + 1 >= this._keys.length ? (this._index = -1, this._keys = I, this._values = I) : this._index++, { value: ee, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, te.prototype.throw = function(fe) {
            throw this._index >= 0 && (this._index = -1, this._keys = I, this._values = I), fe;
          }, te.prototype.return = function(fe) {
            return this._index >= 0 && (this._index = -1, this._keys = I, this._values = I), { value: fe, done: !0 };
          }, te;
        }()
      );
      return (
        /** @class */
        function() {
          function te() {
            this._keys = [], this._values = [], this._cacheKey = z, this._cacheIndex = -2;
          }
          return Object.defineProperty(te.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), te.prototype.has = function(fe) {
            return this._find(
              fe,
              /*insert*/
              !1
            ) >= 0;
          }, te.prototype.get = function(fe) {
            var ee = this._find(
              fe,
              /*insert*/
              !1
            );
            return ee >= 0 ? this._values[ee] : void 0;
          }, te.prototype.set = function(fe, ee) {
            var ve = this._find(
              fe,
              /*insert*/
              !0
            );
            return this._values[ve] = ee, this;
          }, te.prototype.delete = function(fe) {
            var ee = this._find(
              fe,
              /*insert*/
              !1
            );
            if (ee >= 0) {
              for (var ve = this._keys.length, ge = ee + 1; ge < ve; ge++)
                this._keys[ge - 1] = this._keys[ge], this._values[ge - 1] = this._values[ge];
              return this._keys.length--, this._values.length--, fe === this._cacheKey && (this._cacheKey = z, this._cacheIndex = -2), !0;
            }
            return !1;
          }, te.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = z, this._cacheIndex = -2;
          }, te.prototype.keys = function() {
            return new F(this._keys, this._values, W);
          }, te.prototype.values = function() {
            return new F(this._keys, this._values, q);
          }, te.prototype.entries = function() {
            return new F(this._keys, this._values, We);
          }, te.prototype["@@iterator"] = function() {
            return this.entries();
          }, te.prototype[l] = function() {
            return this.entries();
          }, te.prototype._find = function(fe, ee) {
            return this._cacheKey !== fe && (this._cacheIndex = this._keys.indexOf(this._cacheKey = fe)), this._cacheIndex < 0 && ee && (this._cacheIndex = this._keys.length, this._keys.push(fe), this._values.push(void 0)), this._cacheIndex;
          }, te;
        }()
      );
      function W(te, fe) {
        return te;
      }
      function q(te, fe) {
        return fe;
      }
      function We(te, fe) {
        return [te, fe];
      }
    }
    function Kr() {
      return (
        /** @class */
        function() {
          function z() {
            this._map = new h();
          }
          return Object.defineProperty(z.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), z.prototype.has = function(I) {
            return this._map.has(I);
          }, z.prototype.add = function(I) {
            return this._map.set(I, I), this;
          }, z.prototype.delete = function(I) {
            return this._map.delete(I);
          }, z.prototype.clear = function() {
            this._map.clear();
          }, z.prototype.keys = function() {
            return this._map.keys();
          }, z.prototype.values = function() {
            return this._map.values();
          }, z.prototype.entries = function() {
            return this._map.entries();
          }, z.prototype["@@iterator"] = function() {
            return this.keys();
          }, z.prototype[l] = function() {
            return this.keys();
          }, z;
        }()
      );
    }
    function Oi() {
      var z = 16, I = _.create(), F = W();
      return (
        /** @class */
        function() {
          function ee() {
            this._key = W();
          }
          return ee.prototype.has = function(ve) {
            var ge = q(
              ve,
              /*create*/
              !1
            );
            return ge !== void 0 ? _.has(ge, this._key) : !1;
          }, ee.prototype.get = function(ve) {
            var ge = q(
              ve,
              /*create*/
              !1
            );
            return ge !== void 0 ? _.get(ge, this._key) : void 0;
          }, ee.prototype.set = function(ve, ge) {
            var Pt = q(
              ve,
              /*create*/
              !0
            );
            return Pt[this._key] = ge, this;
          }, ee.prototype.delete = function(ve) {
            var ge = q(
              ve,
              /*create*/
              !1
            );
            return ge !== void 0 ? delete ge[this._key] : !1;
          }, ee.prototype.clear = function() {
            this._key = W();
          }, ee;
        }()
      );
      function W() {
        var ee;
        do
          ee = "@@WeakMap@@" + fe();
        while (_.has(I, ee));
        return I[ee] = !0, ee;
      }
      function q(ee, ve) {
        if (!n.call(ee, F)) {
          if (!ve)
            return;
          Object.defineProperty(ee, F, { value: _.create() });
        }
        return ee[F];
      }
      function We(ee, ve) {
        for (var ge = 0; ge < ve; ++ge)
          ee[ge] = Math.random() * 255 | 0;
        return ee;
      }
      function te(ee) {
        return typeof Uint8Array == "function" ? typeof crypto < "u" ? crypto.getRandomValues(new Uint8Array(ee)) : typeof msCrypto < "u" ? msCrypto.getRandomValues(new Uint8Array(ee)) : We(new Uint8Array(ee), ee) : We(new Array(ee), ee);
      }
      function fe() {
        var ee = te(z);
        ee[6] = ee[6] & 79 | 64, ee[8] = ee[8] & 191 | 128;
        for (var ve = "", ge = 0; ge < z; ++ge) {
          var Pt = ee[ge];
          (ge === 4 || ge === 6 || ge === 8) && (ve += "-"), Pt < 16 && (ve += "0"), ve += Pt.toString(16).toLowerCase();
        }
        return ve;
      }
    }
    function vr(z) {
      return z.__ = void 0, delete z.__, z;
    }
  });
})(fp || (fp = {}));
function P0(e) {
  return function(t, n) {
    var i = Reflect.getMetadata("design:type", t, n.toString()), a = Pn(t.constructor).getProperty(n.toString());
    a.serializedName = e || n.toString(), a.array = i === Array, a.set = i === Set, !a.array && !a.set && !a.type && (a.type = i);
  };
}
function x0(e) {
  return function(t, n) {
    var i = Pn(t.constructor).getProperty(n.toString());
    i.type = e;
  };
}
function S0(e) {
  return function(t, n) {
    var i = Pn(t.constructor).getProperty(n.toString());
    i.type = e;
  };
}
function E0(e) {
  return function(t, n) {
    var i = Pn(t.constructor).getProperty(n.toString());
    typeof e == "function" ? i.converter = new e() : i.converter = e;
  };
}
function L0() {
  return function(e, t) {
    var n = Pn(e.constructor).getProperty(t.toString());
    n.readonly = !0;
  };
}
function T0() {
  return function(e, t) {
    var n = Pn(e.constructor).getProperty(t.toString());
    n.writeonly = !0;
  };
}
function O0(e) {
  return function(t) {
    Pn(t).discriminatorProperty = e;
  };
}
function C0(e) {
  return function(t) {
    Pn(t).discriminatorValue = e;
  };
}
function k0() {
  return function(e, t) {
    var n = Pn(e.constructor);
    n.ctr = e[t.toString()];
  };
}
function b0() {
  return function(e, t) {
    var n = Pn(e.constructor);
    n.beforeDeserialized = e[t.toString()];
  };
}
function M0() {
  return function(e, t) {
    var n = Pn(e.constructor);
    n.onDeserialized = e[t.toString()];
  };
}
var _g = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.serialize = function(t) {
      return t.toString();
    }, e.prototype.deserialize = function(t) {
      return new Date(t);
    }, e;
  }()
), yg = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = "json"), this._encoding = t;
    }
    return e.prototype.serialize = function(t) {
      return this._encoding === "json" ? t.toJSON() : t.toString(this._encoding);
    }, e.prototype.deserialize = function(t) {
      return this._encoding === "json" ? Buffer.from(t.data) : Buffer.from(t, this._encoding);
    }, e;
  }()
), es = /* @__PURE__ */ new Map();
typeof window > "u" && es.set(Buffer, new yg());
es.set(Date, new _g());
function lf(e, t) {
  return e.constructor === Array ? e.map(function(n) {
    return dp(n, t);
  }) : dp(e, t);
}
function dp(e, t) {
  t === void 0 && (t = Object.getPrototypeOf(e).constructor);
  var n = hd(t);
  if (n.length === 0)
    return e;
  var i = n.map(function(l) {
    return Kn.get(l);
  }).filter(function(l) {
    return !!l;
  }), a = {};
  return i.forEach(function(l) {
    l.properties.forEach(function(c, p) {
      if (!c.type)
        throw new Error("Cannot serialize property '" + p + "' without type!");
      var m = e[p];
      if (!(m == null || c.writeonly)) {
        if (c.set) {
          a[c.serializedName] = hp(Array.from(m || []), c);
          return;
        }
        if (c.array) {
          a[c.serializedName] = hp(m, c);
          return;
        }
        a[c.serializedName] = vg(m, c);
      }
    });
  }), a;
}
function hp(e, t) {
  return e.map(function(n) {
    return vg(n, t);
  });
}
function vg(e, t) {
  var n = t.type === String || t.type === Boolean || t.type === Number, i = e, a = t.converter || es.get(t.type);
  if (a)
    return a.serialize(i);
  if (!n) {
    var l = Kn.get(t.type);
    if (l)
      return i instanceof t.type ? lf(i) : lf(i, t.type);
  }
  return i;
}
function wg(e, t, n) {
  return n === void 0 && (n = { runConstructor: !1 }), e && e.constructor === Array ? e.map(function(i) {
    return pp(i, t, n);
  }) : pp(e, t, n);
}
function pp(e, t, n) {
  if (t === void 0 && (t = Object), !Kn.has(t))
    return e;
  var i = e, a = hd(t, i), l = a[0], c = a.slice(1), p = Object.create(l.prototype), m = c.reverse().concat([l]).map(function(_) {
    return Kn.get(_);
  }).filter(function(_) {
    return !!_;
  });
  return m.forEach(function(_) {
    n.runConstructor && _.ctr.call(p), _.beforeDeserialized.call(p), _.properties.forEach(function(y, v) {
      if (!y.type)
        throw new Error("Cannot deserialize property '" + v + "' without type!");
      var h = i[y.serializedName];
      if (!(h == null || y.readonly)) {
        if (y.array || y.set) {
          p[v] = A0(h, y), y.set && (p[v] = new Set(p[v]));
          return;
        }
        p[v] = Pg(h, y);
      }
    }), _.onDeserialized.call(p);
  }), p;
}
function A0(e, t, n) {
  return e.map(function(i) {
    return Pg(i, t);
  });
}
function Pg(e, t, n) {
  var i = t.type === String || t.type === Boolean || t.type === Number, a = e, l = t.converter || es.get(t.type);
  if (l)
    return l.deserialize(a);
  if (!i) {
    var c = Kn.get(t.type);
    if (c)
      return wg(a, t.type);
  }
  return a;
}
var mp = (
  /** @class */
  function() {
    function e() {
    }
    return e.deserialize = function(t, n, i) {
      return wg(t, n, i);
    }, e.parse = function(t, n, i) {
      return this.deserialize(JSON.parse(t), n, i);
    }, e.serialize = function(t) {
      return lf(t);
    }, e.stringify = function(t) {
      return JSON.stringify(this.serialize(t));
    }, e;
  }()
);
const z0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BeforeDeserialized: b0,
  BufferConverter: yg,
  DateConverter: _g,
  JSON: mp,
  JsonConstructor: k0,
  JsonConverter: E0,
  JsonDiscriminatorProperty: O0,
  JsonDiscriminatorValue: C0,
  JsonElementType: S0,
  JsonObject: w0,
  JsonProperty: P0,
  JsonReadonly: L0,
  JsonType: x0,
  JsonWriteonly: T0,
  OnDeserialized: M0,
  TaJson: mp,
  propertyConverters: es
}, Symbol.toStringTag, { value: "Module" })), ts = /* @__PURE__ */ Jv(z0);
var ns = {}, rs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.LoadOption = void 0, function(t) {
    t[t.None = 0] = "None", t[t.Default = 1] = "Default", t[t.Custom = 2] = "Custom", t[t.All = 3] = "All";
  }(e.LoadOption || (e.LoadOption = {}));
})(rs);
var pd = _e && _e.__decorate || function(e, t, n, i) {
  var a = arguments.length, l = a < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, n) : i, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    l = Reflect.decorate(e, t, n, i);
  else
    for (var p = e.length - 1; p >= 0; p--)
      (c = e[p]) && (l = (a < 3 ? c(l) : a > 3 ? c(t, n, l) : c(t, n)) || l);
  return a > 3 && l && Object.defineProperty(t, n, l), l;
}, md = _e && _e.__metadata || function(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}, ci;
Object.defineProperty(ns, "__esModule", { value: !0 });
var uf = ns.CultureLoadOption = void 0;
const vl = ts, ai = rs;
let Dr = ci = class {
  constructor(t) {
    var n;
    this.loadOption = ai.LoadOption.None, this.cultures = [], t != null && (t instanceof ci ? (this.cultures = [...t.cultures], this.loadOption = t.loadOption) : t instanceof Array ? (this.cultures = [...t], this.loadOption = this.cultures.length ? ai.LoadOption.Custom : ai.LoadOption.None) : typeof t == "object" ? (this.cultures = [...(n = t.cultures) !== null && n !== void 0 ? n : []], this.loadOption = t.loadOption != null ? t.loadOption : ai.LoadOption.Custom) : this.loadOption = t);
  }
  deepClone() {
    return new ci({ cultures: [...this.cultures], loadOption: this.loadOption });
  }
};
Dr.None = new ci(ai.LoadOption.None);
Dr.Default = new ci(ai.LoadOption.Default);
Dr.All = new ci(ai.LoadOption.All);
pd([
  (0, vl.JsonProperty)("load_option"),
  md("design:type", Number)
], Dr.prototype, "loadOption", void 0);
pd([
  (0, vl.JsonProperty)("cultures"),
  (0, vl.JsonElementType)(String),
  md("design:type", Array)
], Dr.prototype, "cultures", void 0);
Dr = ci = pd([
  (0, vl.JsonObject)(),
  md("design:paramtypes", [Object])
], Dr);
uf = ns.CultureLoadOption = Dr;
var sa = {}, is = {}, xg = {}, gd = { exports: {} };
const Sg = () => {
  const e = Error.prepareStackTrace;
  Error.prepareStackTrace = (n, i) => i;
  const t = new Error().stack.slice(1);
  return Error.prepareStackTrace = e, t;
};
gd.exports = Sg;
gd.exports.default = Sg;
var N0 = gd.exports, Xl = {};
Object.defineProperty(Xl, "__esModule", { value: !0 });
Xl.inferLabel = void 0;
const $0 = () => {
};
Xl.inferLabel = $0;
var bc = {}, cf = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const n = [
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array",
    "BigInt64Array",
    "BigUint64Array"
  ];
  function i(f) {
    return n.includes(f);
  }
  const a = [
    "Function",
    "Generator",
    "AsyncGenerator",
    "GeneratorFunction",
    "AsyncGeneratorFunction",
    "AsyncFunction",
    "Observable",
    "Array",
    "Buffer",
    "Blob",
    "Object",
    "RegExp",
    "Date",
    "Error",
    "Map",
    "Set",
    "WeakMap",
    "WeakSet",
    "ArrayBuffer",
    "SharedArrayBuffer",
    "DataView",
    "Promise",
    "URL",
    "FormData",
    "URLSearchParams",
    "HTMLElement",
    ...n
  ];
  function l(f) {
    return a.includes(f);
  }
  const c = [
    "null",
    "undefined",
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol"
  ];
  function p(f) {
    return c.includes(f);
  }
  function m(f) {
    return (O) => typeof O === f;
  }
  const { toString: _ } = Object.prototype, y = (f) => {
    const O = _.call(f).slice(8, -1);
    if (/HTML\w+Element/.test(O) && h.domElement(f))
      return "HTMLElement";
    if (l(O))
      return O;
  }, v = (f) => (O) => y(O) === f;
  function h(f) {
    if (f === null)
      return "null";
    switch (typeof f) {
      case "undefined":
        return "undefined";
      case "string":
        return "string";
      case "number":
        return "number";
      case "boolean":
        return "boolean";
      case "function":
        return "Function";
      case "bigint":
        return "bigint";
      case "symbol":
        return "symbol";
    }
    if (h.observable(f))
      return "Observable";
    if (h.array(f))
      return "Array";
    if (h.buffer(f))
      return "Buffer";
    const O = y(f);
    if (O)
      return O;
    if (f instanceof String || f instanceof Boolean || f instanceof Number)
      throw new TypeError("Please don't use object wrappers for primitive types");
    return "Object";
  }
  h.undefined = m("undefined"), h.string = m("string");
  const A = m("number");
  h.number = (f) => A(f) && !h.nan(f), h.bigint = m("bigint"), h.function_ = m("function"), h.null_ = (f) => f === null, h.class_ = (f) => h.function_(f) && f.toString().startsWith("class "), h.boolean = (f) => f === !0 || f === !1, h.symbol = m("symbol"), h.numericString = (f) => h.string(f) && !h.emptyStringOrWhitespace(f) && !Number.isNaN(Number(f)), h.array = (f, O) => Array.isArray(f) ? h.function_(O) ? f.every(O) : !0 : !1, h.buffer = (f) => {
    var O, Z, re, Y;
    return (Y = (re = (Z = (O = f) === null || O === void 0 ? void 0 : O.constructor) === null || Z === void 0 ? void 0 : Z.isBuffer) === null || re === void 0 ? void 0 : re.call(Z, f)) !== null && Y !== void 0 ? Y : !1;
  }, h.blob = (f) => v("Blob")(f), h.nullOrUndefined = (f) => h.null_(f) || h.undefined(f), h.object = (f) => !h.null_(f) && (typeof f == "object" || h.function_(f)), h.iterable = (f) => {
    var O;
    return h.function_((O = f) === null || O === void 0 ? void 0 : O[Symbol.iterator]);
  }, h.asyncIterable = (f) => {
    var O;
    return h.function_((O = f) === null || O === void 0 ? void 0 : O[Symbol.asyncIterator]);
  }, h.generator = (f) => {
    var O, Z;
    return h.iterable(f) && h.function_((O = f) === null || O === void 0 ? void 0 : O.next) && h.function_((Z = f) === null || Z === void 0 ? void 0 : Z.throw);
  }, h.asyncGenerator = (f) => h.asyncIterable(f) && h.function_(f.next) && h.function_(f.throw), h.nativePromise = (f) => v("Promise")(f);
  const b = (f) => {
    var O, Z;
    return h.function_((O = f) === null || O === void 0 ? void 0 : O.then) && h.function_((Z = f) === null || Z === void 0 ? void 0 : Z.catch);
  };
  h.promise = (f) => h.nativePromise(f) || b(f), h.generatorFunction = v("GeneratorFunction"), h.asyncGeneratorFunction = (f) => y(f) === "AsyncGeneratorFunction", h.asyncFunction = (f) => y(f) === "AsyncFunction", h.boundFunction = (f) => h.function_(f) && !f.hasOwnProperty("prototype"), h.regExp = v("RegExp"), h.date = v("Date"), h.error = v("Error"), h.map = (f) => v("Map")(f), h.set = (f) => v("Set")(f), h.weakMap = (f) => v("WeakMap")(f), h.weakSet = (f) => v("WeakSet")(f), h.int8Array = v("Int8Array"), h.uint8Array = v("Uint8Array"), h.uint8ClampedArray = v("Uint8ClampedArray"), h.int16Array = v("Int16Array"), h.uint16Array = v("Uint16Array"), h.int32Array = v("Int32Array"), h.uint32Array = v("Uint32Array"), h.float32Array = v("Float32Array"), h.float64Array = v("Float64Array"), h.bigInt64Array = v("BigInt64Array"), h.bigUint64Array = v("BigUint64Array"), h.arrayBuffer = v("ArrayBuffer"), h.sharedArrayBuffer = v("SharedArrayBuffer"), h.dataView = v("DataView"), h.enumCase = (f, O) => Object.values(O).includes(f), h.directInstanceOf = (f, O) => Object.getPrototypeOf(f) === O.prototype, h.urlInstance = (f) => v("URL")(f), h.urlString = (f) => {
    if (!h.string(f))
      return !1;
    try {
      return new URL(f), !0;
    } catch {
      return !1;
    }
  }, h.truthy = (f) => !!f, h.falsy = (f) => !f, h.nan = (f) => Number.isNaN(f), h.primitive = (f) => h.null_(f) || p(typeof f), h.integer = (f) => Number.isInteger(f), h.safeInteger = (f) => Number.isSafeInteger(f), h.plainObject = (f) => {
    if (_.call(f) !== "[object Object]")
      return !1;
    const O = Object.getPrototypeOf(f);
    return O === null || O === Object.getPrototypeOf({});
  }, h.typedArray = (f) => i(y(f));
  const T = (f) => h.safeInteger(f) && f >= 0;
  h.arrayLike = (f) => !h.nullOrUndefined(f) && !h.function_(f) && T(f.length), h.inRange = (f, O) => {
    if (h.number(O))
      return f >= Math.min(0, O) && f <= Math.max(O, 0);
    if (h.array(O) && O.length === 2)
      return f >= Math.min(...O) && f <= Math.max(...O);
    throw new TypeError(`Invalid range: ${JSON.stringify(O)}`);
  };
  const j = 1, S = [
    "innerHTML",
    "ownerDocument",
    "style",
    "attributes",
    "nodeValue"
  ];
  h.domElement = (f) => h.object(f) && f.nodeType === j && h.string(f.nodeName) && !h.plainObject(f) && S.every((O) => O in f), h.observable = (f) => {
    var O, Z, re, Y;
    return f ? f === ((Z = (O = f)[Symbol.observable]) === null || Z === void 0 ? void 0 : Z.call(O)) || f === ((Y = (re = f)["@@observable"]) === null || Y === void 0 ? void 0 : Y.call(re)) : !1;
  }, h.nodeStream = (f) => h.object(f) && h.function_(f.pipe) && !h.observable(f), h.infinite = (f) => f === 1 / 0 || f === -1 / 0;
  const P = (f) => (O) => h.integer(O) && Math.abs(O % 2) === f;
  h.evenInteger = P(0), h.oddInteger = P(1), h.emptyArray = (f) => h.array(f) && f.length === 0, h.nonEmptyArray = (f) => h.array(f) && f.length > 0, h.emptyString = (f) => h.string(f) && f.length === 0;
  const x = (f) => h.string(f) && !/\S/.test(f);
  h.emptyStringOrWhitespace = (f) => h.emptyString(f) || x(f), h.nonEmptyString = (f) => h.string(f) && f.length > 0, h.nonEmptyStringAndNotWhitespace = (f) => h.string(f) && !h.emptyStringOrWhitespace(f), h.emptyObject = (f) => h.object(f) && !h.map(f) && !h.set(f) && Object.keys(f).length === 0, h.nonEmptyObject = (f) => h.object(f) && !h.map(f) && !h.set(f) && Object.keys(f).length > 0, h.emptySet = (f) => h.set(f) && f.size === 0, h.nonEmptySet = (f) => h.set(f) && f.size > 0, h.emptyMap = (f) => h.map(f) && f.size === 0, h.nonEmptyMap = (f) => h.map(f) && f.size > 0, h.propertyKey = (f) => h.any([h.string, h.number, h.symbol], f), h.formData = (f) => v("FormData")(f), h.urlSearchParams = (f) => v("URLSearchParams")(f);
  const $ = (f, O, Z) => {
    if (!h.function_(O))
      throw new TypeError(`Invalid predicate: ${JSON.stringify(O)}`);
    if (Z.length === 0)
      throw new TypeError("Invalid number of values");
    return f.call(Z, O);
  };
  h.any = (f, ...O) => (h.array(f) ? f : [f]).some((re) => $(Array.prototype.some, re, O)), h.all = (f, ...O) => $(Array.prototype.every, f, O);
  const k = (f, O, Z, re = {}) => {
    if (!f) {
      const { multipleValues: Y } = re, ce = Y ? `received values of types ${[
        ...new Set(Z.map((Ee) => `\`${h(Ee)}\``))
      ].join(", ")}` : `received value of type \`${h(Z)}\``;
      throw new TypeError(`Expected value which is \`${O}\`, ${ce}.`);
    }
  };
  t.assert = {
    // Unknowns.
    undefined: (f) => k(h.undefined(f), "undefined", f),
    string: (f) => k(h.string(f), "string", f),
    number: (f) => k(h.number(f), "number", f),
    bigint: (f) => k(h.bigint(f), "bigint", f),
    // eslint-disable-next-line @typescript-eslint/ban-types
    function_: (f) => k(h.function_(f), "Function", f),
    null_: (f) => k(h.null_(f), "null", f),
    class_: (f) => k(h.class_(f), "Class", f),
    boolean: (f) => k(h.boolean(f), "boolean", f),
    symbol: (f) => k(h.symbol(f), "symbol", f),
    numericString: (f) => k(h.numericString(f), "string with a number", f),
    array: (f, O) => {
      k(h.array(f), "Array", f), O && f.forEach(O);
    },
    buffer: (f) => k(h.buffer(f), "Buffer", f),
    blob: (f) => k(h.blob(f), "Blob", f),
    nullOrUndefined: (f) => k(h.nullOrUndefined(f), "null or undefined", f),
    object: (f) => k(h.object(f), "Object", f),
    iterable: (f) => k(h.iterable(f), "Iterable", f),
    asyncIterable: (f) => k(h.asyncIterable(f), "AsyncIterable", f),
    generator: (f) => k(h.generator(f), "Generator", f),
    asyncGenerator: (f) => k(h.asyncGenerator(f), "AsyncGenerator", f),
    nativePromise: (f) => k(h.nativePromise(f), "native Promise", f),
    promise: (f) => k(h.promise(f), "Promise", f),
    generatorFunction: (f) => k(h.generatorFunction(f), "GeneratorFunction", f),
    asyncGeneratorFunction: (f) => k(h.asyncGeneratorFunction(f), "AsyncGeneratorFunction", f),
    // eslint-disable-next-line @typescript-eslint/ban-types
    asyncFunction: (f) => k(h.asyncFunction(f), "AsyncFunction", f),
    // eslint-disable-next-line @typescript-eslint/ban-types
    boundFunction: (f) => k(h.boundFunction(f), "Function", f),
    regExp: (f) => k(h.regExp(f), "RegExp", f),
    date: (f) => k(h.date(f), "Date", f),
    error: (f) => k(h.error(f), "Error", f),
    map: (f) => k(h.map(f), "Map", f),
    set: (f) => k(h.set(f), "Set", f),
    weakMap: (f) => k(h.weakMap(f), "WeakMap", f),
    weakSet: (f) => k(h.weakSet(f), "WeakSet", f),
    int8Array: (f) => k(h.int8Array(f), "Int8Array", f),
    uint8Array: (f) => k(h.uint8Array(f), "Uint8Array", f),
    uint8ClampedArray: (f) => k(h.uint8ClampedArray(f), "Uint8ClampedArray", f),
    int16Array: (f) => k(h.int16Array(f), "Int16Array", f),
    uint16Array: (f) => k(h.uint16Array(f), "Uint16Array", f),
    int32Array: (f) => k(h.int32Array(f), "Int32Array", f),
    uint32Array: (f) => k(h.uint32Array(f), "Uint32Array", f),
    float32Array: (f) => k(h.float32Array(f), "Float32Array", f),
    float64Array: (f) => k(h.float64Array(f), "Float64Array", f),
    bigInt64Array: (f) => k(h.bigInt64Array(f), "BigInt64Array", f),
    bigUint64Array: (f) => k(h.bigUint64Array(f), "BigUint64Array", f),
    arrayBuffer: (f) => k(h.arrayBuffer(f), "ArrayBuffer", f),
    sharedArrayBuffer: (f) => k(h.sharedArrayBuffer(f), "SharedArrayBuffer", f),
    dataView: (f) => k(h.dataView(f), "DataView", f),
    enumCase: (f, O) => k(h.enumCase(f, O), "EnumCase", f),
    urlInstance: (f) => k(h.urlInstance(f), "URL", f),
    urlString: (f) => k(h.urlString(f), "string with a URL", f),
    truthy: (f) => k(h.truthy(f), "truthy", f),
    falsy: (f) => k(h.falsy(f), "falsy", f),
    nan: (f) => k(h.nan(f), "NaN", f),
    primitive: (f) => k(h.primitive(f), "primitive", f),
    integer: (f) => k(h.integer(f), "integer", f),
    safeInteger: (f) => k(h.safeInteger(f), "integer", f),
    plainObject: (f) => k(h.plainObject(f), "plain object", f),
    typedArray: (f) => k(h.typedArray(f), "TypedArray", f),
    arrayLike: (f) => k(h.arrayLike(f), "array-like", f),
    domElement: (f) => k(h.domElement(f), "HTMLElement", f),
    observable: (f) => k(h.observable(f), "Observable", f),
    nodeStream: (f) => k(h.nodeStream(f), "Node.js Stream", f),
    infinite: (f) => k(h.infinite(f), "infinite number", f),
    emptyArray: (f) => k(h.emptyArray(f), "empty array", f),
    nonEmptyArray: (f) => k(h.nonEmptyArray(f), "non-empty array", f),
    emptyString: (f) => k(h.emptyString(f), "empty string", f),
    emptyStringOrWhitespace: (f) => k(h.emptyStringOrWhitespace(f), "empty string or whitespace", f),
    nonEmptyString: (f) => k(h.nonEmptyString(f), "non-empty string", f),
    nonEmptyStringAndNotWhitespace: (f) => k(h.nonEmptyStringAndNotWhitespace(f), "non-empty string and not whitespace", f),
    emptyObject: (f) => k(h.emptyObject(f), "empty object", f),
    nonEmptyObject: (f) => k(h.nonEmptyObject(f), "non-empty object", f),
    emptySet: (f) => k(h.emptySet(f), "empty set", f),
    nonEmptySet: (f) => k(h.nonEmptySet(f), "non-empty set", f),
    emptyMap: (f) => k(h.emptyMap(f), "empty map", f),
    nonEmptyMap: (f) => k(h.nonEmptyMap(f), "non-empty map", f),
    propertyKey: (f) => k(h.propertyKey(f), "PropertyKey", f),
    formData: (f) => k(h.formData(f), "FormData", f),
    urlSearchParams: (f) => k(h.urlSearchParams(f), "URLSearchParams", f),
    // Numbers.
    evenInteger: (f) => k(h.evenInteger(f), "even integer", f),
    oddInteger: (f) => k(h.oddInteger(f), "odd integer", f),
    // Two arguments.
    directInstanceOf: (f, O) => k(h.directInstanceOf(f, O), "T", f),
    inRange: (f, O) => k(h.inRange(f, O), "in range", f),
    // Variadic functions.
    any: (f, ...O) => k(h.any(f, ...O), "predicate returns truthy for any value", O, { multipleValues: !0 }),
    all: (f, ...O) => k(h.all(f, ...O), "predicate returns truthy for all values", O, { multipleValues: !0 })
  }, Object.defineProperties(h, {
    class: {
      value: h.class_
    },
    function: {
      value: h.function_
    },
    null: {
      value: h.null_
    }
  }), Object.defineProperties(t.assert, {
    class: {
      value: t.assert.class_
    },
    function: {
      value: t.assert.function_
    },
    null: {
      value: t.assert.null_
    }
  }), t.default = h, e.exports = h, e.exports.default = h, e.exports.assert = t.assert;
})(cf, cf.exports);
var No = cf.exports, $o = {}, eu = {};
Object.defineProperty(eu, "__esModule", { value: !0 });
eu.generateStackTrace = void 0;
const I0 = () => new RangeError("INTERNAL_OW_ERROR").stack;
eu.generateStackTrace = I0;
Object.defineProperty($o, "__esModule", { value: !0 });
$o.ArgumentError = void 0;
const R0 = eu, B0 = (e, t) => `${e.name}: ${e.message}
${t}`;
class D0 extends Error {
  constructor(t, n, i = /* @__PURE__ */ new Map()) {
    super(t), Object.defineProperty(this, "validationErrors", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.name = "ArgumentError", Error.captureStackTrace ? Error.captureStackTrace(this, n) : this.stack = B0(this, (0, R0.generateStackTrace)()), this.validationErrors = i;
  }
}
$o.ArgumentError = D0;
var la = {}, _d = {};
Object.defineProperty(_d, "__esModule", { value: !0 });
_d.default = () => Math.random().toString(16).slice(2);
var gp;
function j0() {
  if (gp)
    return la;
  gp = 1, Object.defineProperty(la, "__esModule", { value: !0 }), la.not = void 0;
  const e = _d, t = pt(), n = (i) => {
    const a = i.addValidator;
    return i.addValidator = (l) => {
      const { validator: c, message: p, negatedMessage: m } = l, _ = (0, e.default)();
      return l.message = (y, v) => m ? m(y, v) : p(y, _).replace(/ to /, "$&not ").replace(_, v), l.validator = (y) => !c(y), i[t.validatorSymbol].push(l), i.addValidator = a, i;
    }, i;
  };
  return la.not = n, la;
}
var Io = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isPredicate = e.testSymbol = void 0, e.testSymbol = Symbol("test");
  const t = (n) => !!n[e.testSymbol];
  e.isPredicate = t;
})(Io);
var os = {};
Object.defineProperty(os, "__esModule", { value: !0 });
os.generateArgumentErrorMessage = void 0;
const F0 = (e, t = !1) => {
  const n = [], i = [...e.entries()], a = i.some(([, l]) => l.size !== 1);
  if (i.length === 1) {
    const [, l] = i[0];
    if (!t && l.size === 1) {
      const [c] = l;
      return c;
    }
    for (const c of l)
      n.push(`${t ? "  - " : ""}${c}`);
    return n.join(`
`);
  }
  if (!a)
    return i.map(([, [l]]) => `  - ${l}`).join(`
`);
  for (const [l, c] of i) {
    n.push(`Errors from the "${l}" predicate:`);
    for (const p of c)
      n.push(`  - ${p}`);
  }
  return n.join(`
`);
};
os.generateArgumentErrorMessage = F0;
var _p;
function pt() {
  return _p || (_p = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Predicate = e.validatorSymbol = void 0;
    const t = No, n = $o, i = j0(), a = Io, l = os;
    e.validatorSymbol = Symbol("validators");
    class c {
      constructor(m, _ = {}) {
        Object.defineProperty(this, "type", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: m
        }), Object.defineProperty(this, "options", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: _
        }), Object.defineProperty(this, "context", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {
            validators: []
          }
        }), this.context = {
          ...this.context,
          ...this.options
        };
        const y = this.type.charAt(0).toLowerCase() + this.type.slice(1);
        this.addValidator({
          message: (v, h) => `Expected ${(h == null ? void 0 : h.slice(this.type.length + 1)) || "argument"} to be of type \`${this.type}\` but received type \`${(0, t.default)(v)}\``,
          validator: (v) => t.default[y](v)
        });
      }
      /**
      @hidden
      */
      [a.testSymbol](m, _, y, v) {
        const h = /* @__PURE__ */ new Map();
        for (const { validator: A, message: b } of this.context.validators) {
          if (this.options.optional === !0 && m === void 0)
            continue;
          let T;
          try {
            T = A(m);
          } catch (f) {
            T = f;
          }
          if (T === !0)
            continue;
          const j = t.default.function_(y) ? y() : y, S = j && v ? `\`${j}\`` : j, P = S ? `${this.type} ${S}` : this.type, x = j || this.type, $ = h.get(x), k = b(m, P, T);
          $ ? $.add(k) : h.set(x, /* @__PURE__ */ new Set([k]));
        }
        if (h.size > 0) {
          const A = (0, l.generateArgumentErrorMessage)(h);
          throw new n.ArgumentError(A, _, h);
        }
      }
      /**
      @hidden
      */
      get [e.validatorSymbol]() {
        return this.context.validators;
      }
      /**
      Invert the following validators.
      */
      get not() {
        return (0, i.not)(this);
      }
      /**
      		    Test if the value matches a custom validation function. The validation function should return an object containing a `validator` and `message`. If the `validator` is `false`, the validation fails and the `message` will be used as error message. If the `message` is a function, the function is invoked with the `label` as argument to let you further customize the error message.
      
      		    @param customValidator - Custom validation function.
      		    */
      validate(m) {
        return this.addValidator({
          message: (_, y, v) => typeof v == "string" ? `(${y}) ${v}` : v(y),
          validator: (_) => {
            const { message: y, validator: v } = m(_);
            return v ? !0 : y;
          }
        });
      }
      /**
      		    Test if the value matches a custom validation function. The validation function should return `true` if the value passes the function. If the function either returns `false` or a string, the function fails and the string will be used as error message.
      
      		    @param validator - Validation function.
      		    */
      is(m) {
        return this.addValidator({
          message: (_, y, v) => v ? `(${y}) ${v}` : `Expected ${y} \`${_}\` to pass custom validation function`,
          validator: m
        });
      }
      /**
      		    Provide a new error message to be thrown when the validation fails.
      
      		    @param newMessage - Either a string containing the new message or a function returning the new message.
      
      		    @example
      		    ```
      		    ow('🌈', 'unicorn', ow.string.equals('🦄').message('Expected unicorn, got rainbow'));
      		    //=> ArgumentError: Expected unicorn, got rainbow
      		    ```
      
      		    @example
      		    ```
      		    ow('🌈', ow.string.minLength(5).message((value, label) => `Expected ${label}, to have a minimum length of 5, got \`${value}\``));
      		    //=> ArgumentError: Expected string, to be have a minimum length of 5, got `🌈`
      		    ```
      		    */
      message(m) {
        const { validators: _ } = this.context;
        return _[_.length - 1].message = (y, v) => typeof m == "function" ? m(y, v) : m, this;
      }
      /**
      		    Register a new validator.
      
      		    @param validator - Validator to register.
      		    */
      addValidator(m) {
        return this.context.validators.push(m), this;
      }
    }
    e.Predicate = c;
  }(bc)), bc;
}
var yd = {}, wl = {}, tu = {}, Z0 = function(e) {
  return !isNaN(Date.parse(e));
};
Object.defineProperty(tu, "__esModule", { value: !0 });
tu.StringPredicate = void 0;
const V0 = No, U0 = Z0, W0 = pt();
class H0 extends W0.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("string", t);
  }
  /**
      Test a string to have a specific length.
  
      @param length - The length of the string.
      */
  length(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have length \`${t}\`, got \`${n}\``,
      validator: (n) => n.length === t
    });
  }
  /**
      Test a string to have a minimum length.
  
      @param length - The minimum length of the string.
      */
  minLength(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have a minimum length of \`${t}\`, got \`${n}\``,
      validator: (n) => n.length >= t,
      negatedMessage: (n, i) => `Expected ${i} to have a maximum length of \`${t - 1}\`, got \`${n}\``
    });
  }
  /**
      Test a string to have a maximum length.
  
      @param length - The maximum length of the string.
      */
  maxLength(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have a maximum length of \`${t}\`, got \`${n}\``,
      validator: (n) => n.length <= t,
      negatedMessage: (n, i) => `Expected ${i} to have a minimum length of \`${t + 1}\`, got \`${n}\``
    });
  }
  /**
      Test a string against a regular expression.
  
      @param regex - The regular expression to match the value with.
      */
  matches(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to match \`${t}\`, got \`${n}\``,
      validator: (n) => t.test(n)
    });
  }
  /**
      Test a string to start with a specific value.
  
      @param searchString - The value that should be the start of the string.
      */
  startsWith(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to start with \`${t}\`, got \`${n}\``,
      validator: (n) => n.startsWith(t)
    });
  }
  /**
      Test a string to end with a specific value.
  
      @param searchString - The value that should be the end of the string.
      */
  endsWith(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to end with \`${t}\`, got \`${n}\``,
      validator: (n) => n.endsWith(t)
    });
  }
  /**
      Test a string to include a specific value.
  
      @param searchString - The value that should be included in the string.
      */
  includes(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to include \`${t}\`, got \`${n}\``,
      validator: (n) => n.includes(t)
    });
  }
  /**
      Test if the string is an element of the provided list.
  
      @param list - List of possible values.
      */
  oneOf(t) {
    return this.addValidator({
      message: (n, i) => {
        let a = JSON.stringify(t);
        if (t.length > 10) {
          const l = t.length - 10;
          a = JSON.stringify(t.slice(0, 10)).replace(/]$/, `,…+${l} more]`);
        }
        return `Expected ${i} to be one of \`${a}\`, got \`${n}\``;
      },
      validator: (n) => t.includes(n)
    });
  }
  /**
  Test a string to be empty.
  */
  get empty() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be empty, got \`${t}\``,
      validator: (t) => t === ""
    });
  }
  /**
  Test a string to be not empty.
  */
  get nonEmpty() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to not be empty`,
      validator: (t) => t !== ""
    });
  }
  /**
      Test a string to be equal to a specified string.
  
      @param expected - Expected value to match.
      */
  equals(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to be equal to \`${t}\`, got \`${n}\``,
      validator: (n) => n === t
    });
  }
  /**
  Test a string to be alphanumeric.
  */
  get alphanumeric() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be alphanumeric, got \`${t}\``,
      validator: (t) => /^[a-z\d]+$/i.test(t)
    });
  }
  /**
  Test a string to be alphabetical.
  */
  get alphabetical() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be alphabetical, got \`${t}\``,
      validator: (t) => /^[a-z]+$/gi.test(t)
    });
  }
  /**
  Test a string to be numeric.
  */
  get numeric() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be numeric, got \`${t}\``,
      validator: (t) => /^[+-]?\d+$/i.test(t)
    });
  }
  /**
  Test a string to be a valid date.
  */
  get date() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be a date, got \`${t}\``,
      validator: U0
    });
  }
  /**
  Test a non-empty string to be lowercase. Matching both alphabetical & numbers.
  */
  get lowercase() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be lowercase, got \`${t}\``,
      validator: (t) => t.trim() !== "" && t === t.toLowerCase()
    });
  }
  /**
  Test a non-empty string to be uppercase. Matching both alphabetical & numbers.
  */
  get uppercase() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be uppercase, got \`${t}\``,
      validator: (t) => t.trim() !== "" && t === t.toUpperCase()
    });
  }
  /**
  Test a string to be a valid URL.
  */
  get url() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be a URL, got \`${t}\``,
      validator: V0.default.urlString
    });
  }
}
tu.StringPredicate = H0;
var nu = {};
Object.defineProperty(nu, "__esModule", { value: !0 });
nu.NumberPredicate = void 0;
const Ki = No, G0 = pt();
class K0 extends G0.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("number", t);
  }
  /**
      Test a number to be in a specified range.
  
      @param start - Start of the range.
      @param end - End of the range.
      */
  inRange(t, n) {
    return this.addValidator({
      message: (i, a) => `Expected ${a} to be in range [${t}..${n}], got ${i}`,
      validator: (i) => Ki.default.inRange(i, [t, n])
    });
  }
  /**
      Test a number to be greater than the provided value.
  
      @param number - Minimum value.
      */
  greaterThan(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to be greater than ${t}, got ${n}`,
      validator: (n) => n > t
    });
  }
  /**
      Test a number to be greater than or equal to the provided value.
  
      @param number - Minimum value.
      */
  greaterThanOrEqual(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to be greater than or equal to ${t}, got ${n}`,
      validator: (n) => n >= t
    });
  }
  /**
      Test a number to be less than the provided value.
  
      @param number - Maximum value.
      */
  lessThan(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to be less than ${t}, got ${n}`,
      validator: (n) => n < t
    });
  }
  /**
      Test a number to be less than or equal to the provided value.
  
      @param number - Minimum value.
      */
  lessThanOrEqual(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to be less than or equal to ${t}, got ${n}`,
      validator: (n) => n <= t
    });
  }
  /**
      Test a number to be equal to a specified number.
  
      @param expected - Expected value to match.
      */
  equal(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to be equal to ${t}, got ${n}`,
      validator: (n) => n === t
    });
  }
  /**
      Test if a number is an element of the provided list.
  
      @param list - List of possible values.
      */
  oneOf(t) {
    return this.addValidator({
      message: (n, i) => {
        let a = JSON.stringify(t);
        if (t.length > 10) {
          const l = t.length - 10;
          a = JSON.stringify(t.slice(0, 10)).replace(/]$/, `,…+${l} more]`);
        }
        return `Expected ${i} to be one of \`${a}\`, got ${n}`;
      },
      validator: (n) => t.includes(n)
    });
  }
  /**
  Test a number to be an integer.
  */
  get integer() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be an integer, got ${t}`,
      validator: (t) => Ki.default.integer(t)
    });
  }
  /**
  Test a number to be finite.
  */
  get finite() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be finite, got ${t}`,
      validator: (t) => !Ki.default.infinite(t)
    });
  }
  /**
  Test a number to be infinite.
  */
  get infinite() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be infinite, got ${t}`,
      validator: (t) => Ki.default.infinite(t)
    });
  }
  /**
  Test a number to be positive.
  */
  get positive() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be positive, got ${t}`,
      validator: (t) => t > 0
    });
  }
  /**
  Test a number to be negative.
  */
  get negative() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be negative, got ${t}`,
      validator: (t) => t < 0
    });
  }
  /**
  Test a number to be an integer or infinite.
  */
  get integerOrInfinite() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be an integer or infinite, got ${t}`,
      validator: (t) => Ki.default.integer(t) || Ki.default.infinite(t)
    });
  }
  /**
  Test a number to be in a valid range for a 8-bit unsigned integer.
  */
  get uint8() {
    return this.integer.inRange(0, 255);
  }
  /**
  Test a number to be in a valid range for a 16-bit unsigned integer.
  */
  get uint16() {
    return this.integer.inRange(0, 65535);
  }
  /**
  Test a number to be in a valid range for a 32-bit unsigned integer.
  */
  get uint32() {
    return this.integer.inRange(0, 4294967295);
  }
  /**
  Test a number to be in a valid range for a 8-bit signed integer.
  */
  get int8() {
    return this.integer.inRange(-128, 127);
  }
  /**
  Test a number to be in a valid range for a 16-bit signed integer.
  */
  get int16() {
    return this.integer.inRange(-32768, 32767);
  }
  /**
  Test a number to be in a valid range for a 32-bit signed integer.
  */
  get int32() {
    return this.integer.inRange(-2147483648, 2147483647);
  }
}
nu.NumberPredicate = K0;
var ru = {};
Object.defineProperty(ru, "__esModule", { value: !0 });
ru.BigIntPredicate = void 0;
const J0 = pt();
class q0 extends J0.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("bigint", t);
  }
}
ru.BigIntPredicate = q0;
var iu = {};
Object.defineProperty(iu, "__esModule", { value: !0 });
iu.BooleanPredicate = void 0;
const Y0 = pt();
class Q0 extends Y0.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("boolean", t);
  }
  /**
  Test a boolean to be true.
  */
  get true() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be true, got ${t}`,
      validator: (t) => t
    });
  }
  /**
  Test a boolean to be false.
  */
  get false() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be false, got ${t}`,
      validator: (t) => !t
    });
  }
}
iu.BooleanPredicate = Q0;
var ou = {}, Pl = { exports: {} };
Pl.exports;
(function(e, t) {
  var n = 200, i = "__lodash_hash_undefined__", a = 1, l = 2, c = 9007199254740991, p = "[object Arguments]", m = "[object Array]", _ = "[object AsyncFunction]", y = "[object Boolean]", v = "[object Date]", h = "[object Error]", A = "[object Function]", b = "[object GeneratorFunction]", T = "[object Map]", j = "[object Number]", S = "[object Null]", P = "[object Object]", x = "[object Promise]", $ = "[object Proxy]", k = "[object RegExp]", f = "[object Set]", O = "[object String]", Z = "[object Symbol]", re = "[object Undefined]", Y = "[object WeakMap]", ce = "[object ArrayBuffer]", Ee = "[object DataView]", sn = "[object Float32Array]", st = "[object Float64Array]", gr = "[object Int8Array]", Ue = "[object Int16Array]", It = "[object Int32Array]", R = "[object Uint8Array]", oe = "[object Uint8ClampedArray]", U = "[object Uint16Array]", K = "[object Uint32Array]", me = /[\\^$.*+?()[\]{}|]/g, De = /^\[object .+?Constructor\]$/, ae = /^(?:0|[1-9]\d*)$/, Q = {};
  Q[sn] = Q[st] = Q[gr] = Q[Ue] = Q[It] = Q[R] = Q[oe] = Q[U] = Q[K] = !0, Q[p] = Q[m] = Q[ce] = Q[y] = Q[Ee] = Q[v] = Q[h] = Q[A] = Q[T] = Q[j] = Q[P] = Q[k] = Q[f] = Q[O] = Q[Y] = !1;
  var le = typeof _e == "object" && _e && _e.Object === Object && _e, lt = typeof self == "object" && self && self.Object === Object && self, Qe = le || lt || Function("return this")(), kt = t && !t.nodeType && t, Jn = kt && !0 && e && !e.nodeType && e, Kt = Jn && Jn.exports === kt, ln = Kt && le.process, _r = function() {
    try {
      return ln && ln.binding && ln.binding("util");
    } catch {
    }
  }(), Wr = _r && _r.isTypedArray;
  function Ei(w, C) {
    for (var B = -1, G = w == null ? 0 : w.length, ke = 0, he = []; ++B < G; ) {
      var Ne = w[B];
      C(Ne, B, w) && (he[ke++] = Ne);
    }
    return he;
  }
  function Li(w, C) {
    for (var B = -1, G = C.length, ke = w.length; ++B < G; )
      w[ke + B] = C[B];
    return w;
  }
  function Hr(w, C) {
    for (var B = -1, G = w == null ? 0 : w.length; ++B < G; )
      if (C(w[B], B, w))
        return !0;
    return !1;
  }
  function yr(w, C) {
    for (var B = -1, G = Array(w); ++B < w; )
      G[B] = C(B);
    return G;
  }
  function Gr(w) {
    return function(C) {
      return w(C);
    };
  }
  function Ti(w, C) {
    return w.has(C);
  }
  function Kr(w, C) {
    return w == null ? void 0 : w[C];
  }
  function Oi(w) {
    var C = -1, B = Array(w.size);
    return w.forEach(function(G, ke) {
      B[++C] = [ke, G];
    }), B;
  }
  function vr(w, C) {
    return function(B) {
      return w(C(B));
    };
  }
  function z(w) {
    var C = -1, B = Array(w.size);
    return w.forEach(function(G) {
      B[++C] = G;
    }), B;
  }
  var I = Array.prototype, F = Function.prototype, W = Object.prototype, q = Qe["__core-js_shared__"], We = F.toString, te = W.hasOwnProperty, fe = function() {
    var w = /[^.]+$/.exec(q && q.keys && q.keys.IE_PROTO || "");
    return w ? "Symbol(src)_1." + w : "";
  }(), ee = W.toString, ve = RegExp(
    "^" + We.call(te).replace(me, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ge = Kt ? Qe.Buffer : void 0, Pt = Qe.Symbol, Jr = Qe.Uint8Array, wr = W.propertyIsEnumerable, ic = I.splice, qn = Pt ? Pt.toStringTag : void 0, Zo = Object.getOwnPropertySymbols, _s = ge ? ge.isBuffer : void 0, ys = vr(Object.keys, Object), Vo = un(Qe, "DataView"), qr = un(Qe, "Map"), Uo = un(Qe, "Promise"), Wo = un(Qe, "Set"), Ho = un(Qe, "WeakMap"), Yr = un(Object, "create"), Go = Bn(Vo), oc = Bn(qr), ac = Bn(Uo), sc = Bn(Wo), lc = Bn(Ho), Jt = Pt ? Pt.prototype : void 0, X = Jt ? Jt.valueOf : void 0;
  function Nn(w) {
    var C = -1, B = w == null ? 0 : w.length;
    for (this.clear(); ++C < B; ) {
      var G = w[C];
      this.set(G[0], G[1]);
    }
  }
  function vs() {
    this.__data__ = Yr ? Yr(null) : {}, this.size = 0;
  }
  function ws(w) {
    var C = this.has(w) && delete this.__data__[w];
    return this.size -= C ? 1 : 0, C;
  }
  function Ps(w) {
    var C = this.__data__;
    if (Yr) {
      var B = C[w];
      return B === i ? void 0 : B;
    }
    return te.call(C, w) ? C[w] : void 0;
  }
  function Ko(w) {
    var C = this.__data__;
    return Yr ? C[w] !== void 0 : te.call(C, w);
  }
  function xs(w, C) {
    var B = this.__data__;
    return this.size += this.has(w) ? 0 : 1, B[w] = Yr && C === void 0 ? i : C, this;
  }
  Nn.prototype.clear = vs, Nn.prototype.delete = ws, Nn.prototype.get = Ps, Nn.prototype.has = Ko, Nn.prototype.set = xs;
  function xt(w) {
    var C = -1, B = w == null ? 0 : w.length;
    for (this.clear(); ++C < B; ) {
      var G = w[C];
      this.set(G[0], G[1]);
    }
  }
  function Ss() {
    this.__data__ = [], this.size = 0;
  }
  function uc(w) {
    var C = this.__data__, B = Sn(C, w);
    if (B < 0)
      return !1;
    var G = C.length - 1;
    return B == G ? C.pop() : ic.call(C, B, 1), --this.size, !0;
  }
  function cc(w) {
    var C = this.__data__, B = Sn(C, w);
    return B < 0 ? void 0 : C[B][1];
  }
  function fc(w) {
    return Sn(this.__data__, w) > -1;
  }
  function dc(w, C) {
    var B = this.__data__, G = Sn(B, w);
    return G < 0 ? (++this.size, B.push([w, C])) : B[G][1] = C, this;
  }
  xt.prototype.clear = Ss, xt.prototype.delete = uc, xt.prototype.get = cc, xt.prototype.has = fc, xt.prototype.set = dc;
  function $n(w) {
    var C = -1, B = w == null ? 0 : w.length;
    for (this.clear(); ++C < B; ) {
      var G = w[C];
      this.set(G[0], G[1]);
    }
  }
  function hc() {
    this.size = 0, this.__data__ = {
      hash: new Nn(),
      map: new (qr || xt)(),
      string: new Nn()
    };
  }
  function Ci(w) {
    var C = Rn(this, w).delete(w);
    return this.size -= C ? 1 : 0, C;
  }
  function pc(w) {
    return Rn(this, w).get(w);
  }
  function mc(w) {
    return Rn(this, w).has(w);
  }
  function gc(w, C) {
    var B = Rn(this, w), G = B.size;
    return B.set(w, C), this.size += B.size == G ? 0 : 1, this;
  }
  $n.prototype.clear = hc, $n.prototype.delete = Ci, $n.prototype.get = pc, $n.prototype.has = mc, $n.prototype.set = gc;
  function ki(w) {
    var C = -1, B = w == null ? 0 : w.length;
    for (this.__data__ = new $n(); ++C < B; )
      this.add(w[C]);
  }
  function _c(w) {
    return this.__data__.set(w, i), this;
  }
  function Jo(w) {
    return this.__data__.has(w);
  }
  ki.prototype.add = ki.prototype.push = _c, ki.prototype.has = Jo;
  function Rt(w) {
    var C = this.__data__ = new xt(w);
    this.size = C.size;
  }
  function Es() {
    this.__data__ = new xt(), this.size = 0;
  }
  function Ls(w) {
    var C = this.__data__, B = C.delete(w);
    return this.size = C.size, B;
  }
  function Qr(w) {
    return this.__data__.get(w);
  }
  function Se(w) {
    return this.__data__.has(w);
  }
  function ze(w, C) {
    var B = this.__data__;
    if (B instanceof xt) {
      var G = B.__data__;
      if (!qr || G.length < n - 1)
        return G.push([w, C]), this.size = ++B.size, this;
      B = this.__data__ = new $n(G);
    }
    return B.set(w, C), this.size = B.size, this;
  }
  Rt.prototype.clear = Es, Rt.prototype.delete = Ls, Rt.prototype.get = Qr, Rt.prototype.has = Se, Rt.prototype.set = ze;
  function bi(w, C) {
    var B = ue(w), G = !B && vc(w), ke = !B && !G && Ce(w), he = !B && !G && !ke && Bi(w), Ne = B || G || ke || he, ne = Ne ? yr(w.length, String) : [], rt = ne.length;
    for (var Pe in w)
      (C || te.call(w, Pe)) && !(Ne && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Pe == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      ke && (Pe == "offset" || Pe == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      he && (Pe == "buffer" || Pe == "byteLength" || Pe == "byteOffset") || // Skip index properties.
      Qo(Pe, rt))) && ne.push(Pe);
    return ne;
  }
  function Sn(w, C) {
    for (var B = w.length; B--; )
      if (Ni(w[B][0], C))
        return B;
    return -1;
  }
  function Pr(w, C, B) {
    var G = C(w);
    return ue(w) ? G : Li(G, B(w));
  }
  function Yn(w) {
    return w == null ? w === void 0 ? re : S : qn && qn in Object(w) ? Yo(w) : zi(w);
  }
  function de(w) {
    return qt(w) && Yn(w) == p;
  }
  function Re(w, C, B, G, ke) {
    return w === C ? !0 : w == null || C == null || !qt(w) && !qt(C) ? w !== w && C !== C : qo(w, C, B, G, Re, ke);
  }
  function qo(w, C, B, G, ke, he) {
    var Ne = ue(w), ne = ue(C), rt = Ne ? m : cn(w), Pe = ne ? m : cn(C);
    rt = rt == p ? P : rt, Pe = Pe == p ? P : Pe;
    var it = rt == P, Dt = Pe == P, ut = rt == Pe;
    if (ut && Ce(w)) {
      if (!Ce(C))
        return !1;
      Ne = !0, it = !1;
    }
    if (ut && !it)
      return he || (he = new Rt()), Ne || Bi(w) ? Xr(w, C, B, G, ke, he) : Qn(w, C, rt, B, G, ke, he);
    if (!(B & a)) {
      var St = it && te.call(w, "__wrapped__"), jt = Dt && te.call(C, "__wrapped__");
      if (St || jt) {
        var En = St ? w.value() : w, Ln = jt ? C.value() : C;
        return he || (he = new Rt()), ke(En, Ln, B, G, he);
      }
    }
    return ut ? (he || (he = new Rt()), He(w, C, B, G, ke, he)) : !1;
  }
  function Mi(w) {
    if (!Ri(w) || Xo(w))
      return !1;
    var C = $i(w) ? ve : De;
    return C.test(Bn(w));
  }
  function Bt(w) {
    return qt(w) && Ii(w.length) && !!Q[Yn(w)];
  }
  function yc(w) {
    if (!ea(w))
      return ys(w);
    var C = [];
    for (var B in Object(w))
      te.call(w, B) && B != "constructor" && C.push(B);
    return C;
  }
  function Xr(w, C, B, G, ke, he) {
    var Ne = B & a, ne = w.length, rt = C.length;
    if (ne != rt && !(Ne && rt > ne))
      return !1;
    var Pe = he.get(w);
    if (Pe && he.get(C))
      return Pe == C;
    var it = -1, Dt = !0, ut = B & l ? new ki() : void 0;
    for (he.set(w, C), he.set(C, w); ++it < ne; ) {
      var St = w[it], jt = C[it];
      if (G)
        var En = Ne ? G(jt, St, it, C, w, he) : G(St, jt, it, w, C, he);
      if (En !== void 0) {
        if (En)
          continue;
        Dt = !1;
        break;
      }
      if (ut) {
        if (!Hr(C, function(Ln, er) {
          if (!Ti(ut, er) && (St === Ln || ke(St, Ln, B, G, he)))
            return ut.push(er);
        })) {
          Dt = !1;
          break;
        }
      } else if (!(St === jt || ke(St, jt, B, G, he))) {
        Dt = !1;
        break;
      }
    }
    return he.delete(w), he.delete(C), Dt;
  }
  function Qn(w, C, B, G, ke, he, Ne) {
    switch (B) {
      case Ee:
        if (w.byteLength != C.byteLength || w.byteOffset != C.byteOffset)
          return !1;
        w = w.buffer, C = C.buffer;
      case ce:
        return !(w.byteLength != C.byteLength || !he(new Jr(w), new Jr(C)));
      case y:
      case v:
      case j:
        return Ni(+w, +C);
      case h:
        return w.name == C.name && w.message == C.message;
      case k:
      case O:
        return w == C + "";
      case T:
        var ne = Oi;
      case f:
        var rt = G & a;
        if (ne || (ne = z), w.size != C.size && !rt)
          return !1;
        var Pe = Ne.get(w);
        if (Pe)
          return Pe == C;
        G |= l, Ne.set(w, C);
        var it = Xr(ne(w), ne(C), G, ke, he, Ne);
        return Ne.delete(w), it;
      case Z:
        if (X)
          return X.call(w) == X.call(C);
    }
    return !1;
  }
  function He(w, C, B, G, ke, he) {
    var Ne = B & a, ne = In(w), rt = ne.length, Pe = In(C), it = Pe.length;
    if (rt != it && !Ne)
      return !1;
    for (var Dt = rt; Dt--; ) {
      var ut = ne[Dt];
      if (!(Ne ? ut in C : te.call(C, ut)))
        return !1;
    }
    var St = he.get(w);
    if (St && he.get(C))
      return St == C;
    var jt = !0;
    he.set(w, C), he.set(C, w);
    for (var En = Ne; ++Dt < rt; ) {
      ut = ne[Dt];
      var Ln = w[ut], er = C[ut];
      if (G)
        var Di = Ne ? G(er, Ln, ut, C, w, he) : G(Ln, er, ut, w, C, he);
      if (!(Di === void 0 ? Ln === er || ke(Ln, er, B, G, he) : Di)) {
        jt = !1;
        break;
      }
      En || (En = ut == "constructor");
    }
    if (jt && !En) {
      var ji = w.constructor, bt = C.constructor;
      ji != bt && "constructor" in w && "constructor" in C && !(typeof ji == "function" && ji instanceof ji && typeof bt == "function" && bt instanceof bt) && (jt = !1);
    }
    return he.delete(w), he.delete(C), jt;
  }
  function In(w) {
    return Pr(w, ti, ei);
  }
  function Rn(w, C) {
    var B = w.__data__;
    return Ai(C) ? B[typeof C == "string" ? "string" : "hash"] : B.map;
  }
  function un(w, C) {
    var B = Kr(w, C);
    return Mi(B) ? B : void 0;
  }
  function Yo(w) {
    var C = te.call(w, qn), B = w[qn];
    try {
      w[qn] = void 0;
      var G = !0;
    } catch {
    }
    var ke = ee.call(w);
    return G && (C ? w[qn] = B : delete w[qn]), ke;
  }
  var ei = Zo ? function(w) {
    return w == null ? [] : (w = Object(w), Ei(Zo(w), function(C) {
      return wr.call(w, C);
    }));
  } : nt, cn = Yn;
  (Vo && cn(new Vo(new ArrayBuffer(1))) != Ee || qr && cn(new qr()) != T || Uo && cn(Uo.resolve()) != x || Wo && cn(new Wo()) != f || Ho && cn(new Ho()) != Y) && (cn = function(w) {
    var C = Yn(w), B = C == P ? w.constructor : void 0, G = B ? Bn(B) : "";
    if (G)
      switch (G) {
        case Go:
          return Ee;
        case oc:
          return T;
        case ac:
          return x;
        case sc:
          return f;
        case lc:
          return Y;
      }
    return C;
  });
  function Qo(w, C) {
    return C = C ?? c, !!C && (typeof w == "number" || ae.test(w)) && w > -1 && w % 1 == 0 && w < C;
  }
  function Ai(w) {
    var C = typeof w;
    return C == "string" || C == "number" || C == "symbol" || C == "boolean" ? w !== "__proto__" : w === null;
  }
  function Xo(w) {
    return !!fe && fe in w;
  }
  function ea(w) {
    var C = w && w.constructor, B = typeof C == "function" && C.prototype || W;
    return w === B;
  }
  function zi(w) {
    return ee.call(w);
  }
  function Bn(w) {
    if (w != null) {
      try {
        return We.call(w);
      } catch {
      }
      try {
        return w + "";
      } catch {
      }
    }
    return "";
  }
  function Ni(w, C) {
    return w === C || w !== w && C !== C;
  }
  var vc = de(function() {
    return arguments;
  }()) ? de : function(w) {
    return qt(w) && te.call(w, "callee") && !wr.call(w, "callee");
  }, ue = Array.isArray;
  function fn(w) {
    return w != null && Ii(w.length) && !$i(w);
  }
  var Ce = _s || Xn;
  function Ts(w, C) {
    return Re(w, C);
  }
  function $i(w) {
    if (!Ri(w))
      return !1;
    var C = Yn(w);
    return C == A || C == b || C == _ || C == $;
  }
  function Ii(w) {
    return typeof w == "number" && w > -1 && w % 1 == 0 && w <= c;
  }
  function Ri(w) {
    var C = typeof w;
    return w != null && (C == "object" || C == "function");
  }
  function qt(w) {
    return w != null && typeof w == "object";
  }
  var Bi = Wr ? Gr(Wr) : Bt;
  function ti(w) {
    return fn(w) ? bi(w) : yc(w);
  }
  function nt() {
    return [];
  }
  function Xn() {
    return !1;
  }
  e.exports = Ts;
})(Pl, Pl.exports);
var au = Pl.exports, hi = {}, Ro = {};
Object.defineProperty(Ro, "__esModule", { value: !0 });
const X0 = Io;
function Eg(e, t, n, i = !0) {
  n[X0.testSymbol](e, Eg, t, i);
}
Ro.default = Eg;
Object.defineProperty(hi, "__esModule", { value: !0 });
hi.exact = hi.partial = void 0;
const Lg = No, Tg = Ro, Og = Io;
function Cg(e, t, n) {
  try {
    for (const i of Object.keys(t)) {
      const a = n ? `${n}.${i}` : i;
      if ((0, Og.isPredicate)(t[i]))
        (0, Tg.default)(e[i], a, t[i]);
      else if (Lg.default.plainObject(t[i])) {
        const l = Cg(e[i], t[i], a);
        if (l !== !0)
          return l;
      }
    }
    return !0;
  } catch (i) {
    return i.message;
  }
}
hi.partial = Cg;
function kg(e, t, n, i) {
  try {
    const a = new Set(Object.keys(e));
    for (const l of Object.keys(t)) {
      a.delete(l);
      const c = n ? `${n}.${l}` : l;
      if ((0, Og.isPredicate)(t[l]))
        (0, Tg.default)(e[l], c, t[l]);
      else if (Lg.default.plainObject(t[l])) {
        if (!Object.prototype.hasOwnProperty.call(e, l))
          return `Expected \`${c}\` to exist`;
        const p = kg(e[l], t[l], c);
        if (p !== !0)
          return p;
      }
    }
    if (a.size > 0) {
      const l = [...a.keys()][0], c = n ? `${n}.${l}` : l;
      return `Did not expect ${i ? "element" : "property"} \`${c}\` to exist, got \`${e[l]}\``;
    }
    return !0;
  } catch (a) {
    return a.message;
  }
}
hi.exact = kg;
var Bo = {};
Object.defineProperty(Bo, "__esModule", { value: !0 });
const e1 = Ro;
Bo.default = (e, t, n) => {
  try {
    for (const i of e)
      (0, e1.default)(i, t, n, !1);
    return !0;
  } catch (i) {
    return i.message;
  }
};
Object.defineProperty(ou, "__esModule", { value: !0 });
ou.ArrayPredicate = void 0;
const t1 = au, n1 = pt(), r1 = hi, i1 = Bo;
class o1 extends n1.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("array", t);
  }
  /**
      Test an array to have a specific length.
  
      @param length - The length of the array.
      */
  length(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have length \`${t}\`, got \`${n.length}\``,
      validator: (n) => n.length === t
    });
  }
  /**
      Test an array to have a minimum length.
  
      @param length - The minimum length of the array.
      */
  minLength(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have a minimum length of \`${t}\`, got \`${n.length}\``,
      validator: (n) => n.length >= t,
      negatedMessage: (n, i) => `Expected ${i} to have a maximum length of \`${t - 1}\`, got \`${n.length}\``
    });
  }
  /**
      Test an array to have a maximum length.
  
      @param length - The maximum length of the array.
      */
  maxLength(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have a maximum length of \`${t}\`, got \`${n.length}\``,
      validator: (n) => n.length <= t,
      negatedMessage: (n, i) => `Expected ${i} to have a minimum length of \`${t + 1}\`, got \`${n.length}\``
    });
  }
  /**
      Test an array to start with a specific value. The value is tested by identity, not structure.
  
      @param searchElement - The value that should be the start of the array.
      */
  startsWith(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to start with \`${t}\`, got \`${n[0]}\``,
      validator: (n) => n[0] === t
    });
  }
  /**
      Test an array to end with a specific value. The value is tested by identity, not structure.
  
      @param searchElement - The value that should be the end of the array.
      */
  endsWith(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to end with \`${t}\`, got \`${n[n.length - 1]}\``,
      validator: (n) => n[n.length - 1] === t
    });
  }
  /**
      Test an array to include all the provided elements. The values are tested by identity, not structure.
  
      @param searchElements - The values that should be included in the array.
      */
  includes(...t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to include all elements of \`${JSON.stringify(t)}\`, got \`${JSON.stringify(n)}\``,
      validator: (n) => t.every((i) => n.includes(i))
    });
  }
  /**
      Test an array to include any of the provided elements. The values are tested by identity, not structure.
  
      @param searchElements - The values that should be included in the array.
      */
  includesAny(...t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to include any element of \`${JSON.stringify(t)}\`, got \`${JSON.stringify(n)}\``,
      validator: (n) => t.some((i) => n.includes(i))
    });
  }
  /**
  Test an array to be empty.
  */
  get empty() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be empty, got \`${JSON.stringify(t)}\``,
      validator: (t) => t.length === 0
    });
  }
  /**
  Test an array to be not empty.
  */
  get nonEmpty() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to not be empty`,
      validator: (t) => t.length > 0
    });
  }
  /**
      Test an array to be deeply equal to the provided array.
  
      @param expected - Expected value to match.
      */
  deepEqual(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to be deeply equal to \`${JSON.stringify(t)}\`, got \`${JSON.stringify(n)}\``,
      validator: (n) => t1(n, t)
    });
  }
  /**
      Test all elements in the array to match to provided predicate.
  
      @param predicate - The predicate that should be applied against every individual item.
  
      @example
      ```
      ow(['a', 1], ow.array.ofType(ow.any(ow.string, ow.number)));
      ```
      */
  ofType(t) {
    return this.addValidator({
      message: (n, i, a) => `(${i}) ${a}`,
      validator: (n) => (0, i1.default)(n, "values", t)
    });
  }
  /**
      Test if the elements in the array exactly matches the elements placed at the same indices in the predicates array.
  
      @param predicates - Predicates to test the array against. Describes what the tested array should look like.
  
      @example
      ```
      ow(['1', 2], ow.array.exactShape([ow.string, ow.number]));
      ```
      */
  exactShape(t) {
    const n = t;
    return this.addValidator({
      message: (i, a, l) => `${l.replace("Expected", "Expected element")} in ${a}`,
      validator: (i) => (0, r1.exact)(i, n, void 0, !0)
    });
  }
}
ou.ArrayPredicate = o1;
var su = {}, a1 = (e) => {
  const t = typeof e;
  return e !== null && (t === "object" || t === "function");
};
const ri = a1, s1 = /* @__PURE__ */ new Set([
  "__proto__",
  "prototype",
  "constructor"
]), l1 = (e) => !e.some((t) => s1.has(t));
function js(e) {
  const t = e.split("."), n = [];
  for (let i = 0; i < t.length; i++) {
    let a = t[i];
    for (; a[a.length - 1] === "\\" && t[i + 1] !== void 0; )
      a = a.slice(0, -1) + ".", a += t[++i];
    n.push(a);
  }
  return l1(n) ? n : [];
}
var u1 = {
  get(e, t, n) {
    if (!ri(e) || typeof t != "string")
      return n === void 0 ? e : n;
    const i = js(t);
    if (i.length !== 0) {
      for (let a = 0; a < i.length; a++)
        if (e = e[i[a]], e == null) {
          if (a !== i.length - 1)
            return n;
          break;
        }
      return e === void 0 ? n : e;
    }
  },
  set(e, t, n) {
    if (!ri(e) || typeof t != "string")
      return e;
    const i = e, a = js(t);
    for (let l = 0; l < a.length; l++) {
      const c = a[l];
      ri(e[c]) || (e[c] = {}), l === a.length - 1 && (e[c] = n), e = e[c];
    }
    return i;
  },
  delete(e, t) {
    if (!ri(e) || typeof t != "string")
      return !1;
    const n = js(t);
    for (let i = 0; i < n.length; i++) {
      const a = n[i];
      if (i === n.length - 1)
        return delete e[a], !0;
      if (e = e[a], !ri(e))
        return !1;
    }
  },
  has(e, t) {
    if (!ri(e) || typeof t != "string")
      return !1;
    const n = js(t);
    if (n.length === 0)
      return !1;
    for (let i = 0; i < n.length; i++)
      if (ri(e)) {
        if (!(n[i] in e))
          return !1;
        e = e[n[i]];
      } else
        return !1;
    return !0;
  }
}, Pi = {};
Object.defineProperty(Pi, "__esModule", { value: !0 });
Pi.default = (e, t, n = 5) => {
  const i = [];
  for (const a of t)
    if (!e.has(a) && (i.push(a), i.length === n))
      return i;
  return i.length === 0 ? !0 : i;
};
var vd = {};
Object.defineProperty(vd, "__esModule", { value: !0 });
const c1 = No, f1 = Ro, bg = (e, t) => c1.default.plainObject(e) ? Object.values(e).every((n) => bg(n, t)) : ((0, f1.default)(e, "deep values", t, !1), !0);
vd.default = (e, t) => {
  try {
    return bg(e, t);
  } catch (n) {
    return n.message;
  }
};
Object.defineProperty(su, "__esModule", { value: !0 });
su.ObjectPredicate = void 0;
const d1 = No, yp = u1, h1 = au, p1 = Pi, m1 = Bo, g1 = vd, vp = hi, _1 = pt();
class y1 extends _1.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("object", t);
  }
  /**
  Test if an Object is a plain object.
  */
  get plain() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be a plain object`,
      validator: (t) => d1.default.plainObject(t)
    });
  }
  /**
  Test an object to be empty.
  */
  get empty() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be empty, got \`${JSON.stringify(t)}\``,
      validator: (t) => Object.keys(t).length === 0
    });
  }
  /**
  Test an object to be not empty.
  */
  get nonEmpty() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to not be empty`,
      validator: (t) => Object.keys(t).length > 0
    });
  }
  /**
      Test all the values in the object to match the provided predicate.
  
      @param predicate - The predicate that should be applied against every value in the object.
      */
  valuesOfType(t) {
    return this.addValidator({
      message: (n, i, a) => `(${i}) ${a}`,
      validator: (n) => (0, m1.default)(Object.values(n), "values", t)
    });
  }
  /**
      Test all the values in the object deeply to match the provided predicate.
  
      @param predicate - The predicate that should be applied against every value in the object.
      */
  deepValuesOfType(t) {
    return this.addValidator({
      message: (n, i, a) => `(${i}) ${a}`,
      validator: (n) => (0, g1.default)(n, t)
    });
  }
  /**
      Test an object to be deeply equal to the provided object.
  
      @param expected - Expected object to match.
      */
  deepEqual(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to be deeply equal to \`${JSON.stringify(t)}\`, got \`${JSON.stringify(n)}\``,
      validator: (n) => h1(n, t)
    });
  }
  /**
      Test an object to be of a specific instance type.
  
      @param instance - The expected instance type of the object.
      */
  instanceOf(t) {
    return this.addValidator({
      message: (n, i) => {
        var a;
        let { name: l } = (a = n == null ? void 0 : n.constructor) !== null && a !== void 0 ? a : {};
        return (!l || l === "Object") && (l = JSON.stringify(n)), `Expected ${i} \`${l}\` to be of type \`${t.name}\``;
      },
      validator: (n) => n instanceof t
    });
  }
  /**
      Test an object to include all the provided keys. You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a key to access nested properties.
  
      @param keys - The keys that should be present in the object.
      */
  hasKeys(...t) {
    return this.addValidator({
      message: (n, i, a) => `Expected ${i} to have keys \`${JSON.stringify(a)}\``,
      validator: (n) => (0, p1.default)({
        has: (i) => yp.has(n, i)
      }, t)
    });
  }
  /**
      Test an object to include any of the provided keys. You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a key to access nested properties.
  
      @param keys - The keys that could be a key in the object.
      */
  hasAnyKeys(...t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have any key of \`${JSON.stringify(t)}\``,
      validator: (n) => t.some((i) => yp.has(n, i))
    });
  }
  /**
      Test an object to match the `shape` partially. This means that it ignores unexpected properties. The shape comparison is deep.
  
      The shape is an object which describes how the tested object should look like. The keys are the same as the source object and the values are predicates.
  
      @param shape - Shape to test the object against.
  
      @example
      ```
      import ow from 'ow';
  
      const object = {
          unicorn: '🦄',
          rainbow: '🌈'
      };
  
      ow(object, ow.object.partialShape({
          unicorn: ow.string
      }));
      ```
      */
  partialShape(t) {
    return this.addValidator({
      // TODO: Improve this when message handling becomes smarter
      message: (n, i, a) => `${a.replace("Expected", "Expected property")} in ${i}`,
      validator: (n) => (0, vp.partial)(n, t)
    });
  }
  /**
      Test an object to match the `shape` exactly. This means that will fail if it comes across unexpected properties. The shape comparison is deep.
  
      The shape is an object which describes how the tested object should look like. The keys are the same as the source object and the values are predicates.
  
      @param shape - Shape to test the object against.
  
      @example
      ```
      import ow from 'ow';
  
      ow({unicorn: '🦄'}, ow.object.exactShape({
          unicorn: ow.string
      }));
      ```
      */
  exactShape(t) {
    return this.addValidator({
      // TODO: Improve this when message handling becomes smarter
      message: (n, i, a) => `${a.replace("Expected", "Expected property")} in ${i}`,
      validator: (n) => (0, vp.exact)(n, t)
    });
  }
}
su.ObjectPredicate = y1;
var lu = {};
Object.defineProperty(lu, "__esModule", { value: !0 });
lu.DatePredicate = void 0;
const v1 = pt();
class w1 extends v1.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("date", t);
  }
  /**
      Test a date to be before another date.
  
      @param date - Maximum value.
      */
  before(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} ${n.toISOString()} to be before ${t.toISOString()}`,
      validator: (n) => n.getTime() < t.getTime()
    });
  }
  /**
      Test a date to be before another date.
  
      @param date - Minimum value.
      */
  after(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} ${n.toISOString()} to be after ${t.toISOString()}`,
      validator: (n) => n.getTime() > t.getTime()
    });
  }
}
lu.DatePredicate = w1;
var uu = {};
Object.defineProperty(uu, "__esModule", { value: !0 });
uu.ErrorPredicate = void 0;
const P1 = pt();
class x1 extends P1.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("error", t);
  }
  /**
      Test an error to have a specific name.
  
      @param expected - Expected name of the Error.
      */
  name(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have name \`${t}\`, got \`${n.name}\``,
      validator: (n) => n.name === t
    });
  }
  /**
      Test an error to have a specific message.
  
      @param expected - Expected message of the Error.
      */
  message(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} message to be \`${t}\`, got \`${n.message}\``,
      validator: (n) => n.message === t
    });
  }
  /**
      Test the error message to include a specific message.
  
      @param message - Message that should be included in the error.
      */
  messageIncludes(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} message to include \`${t}\`, got \`${n.message}\``,
      validator: (n) => n.message.includes(t)
    });
  }
  /**
      Test the error object to have specific keys.
  
      @param keys - One or more keys which should be part of the error object.
      */
  hasKeys(...t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} message to have keys \`${t.join("`, `")}\``,
      validator: (n) => t.every((i) => Object.prototype.hasOwnProperty.call(n, i))
    });
  }
  /**
      Test an error to be of a specific instance type.
  
      @param instance - The expected instance type of the error.
      */
  instanceOf(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} \`${n.name}\` to be of type \`${t.name}\``,
      validator: (n) => n instanceof t
    });
  }
  /**
  Test an Error to be a TypeError.
  */
  get typeError() {
    return this.instanceOf(TypeError);
  }
  /**
  Test an Error to be an EvalError.
  */
  get evalError() {
    return this.instanceOf(EvalError);
  }
  /**
  Test an Error to be a RangeError.
  */
  get rangeError() {
    return this.instanceOf(RangeError);
  }
  /**
  Test an Error to be a ReferenceError.
  */
  get referenceError() {
    return this.instanceOf(ReferenceError);
  }
  /**
  Test an Error to be a SyntaxError.
  */
  get syntaxError() {
    return this.instanceOf(SyntaxError);
  }
  /**
  Test an Error to be a URIError.
  */
  get uriError() {
    return this.instanceOf(URIError);
  }
}
uu.ErrorPredicate = x1;
var cu = {};
Object.defineProperty(cu, "__esModule", { value: !0 });
cu.MapPredicate = void 0;
const S1 = au, wp = Pi, Pp = Bo, E1 = pt();
class L1 extends E1.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("Map", t);
  }
  /**
      Test a Map to have a specific size.
  
      @param size - The size of the Map.
      */
  size(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have size \`${t}\`, got \`${n.size}\``,
      validator: (n) => n.size === t
    });
  }
  /**
      Test an Map to have a minimum size.
  
      @param size - The minimum size of the Map.
      */
  minSize(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have a minimum size of \`${t}\`, got \`${n.size}\``,
      validator: (n) => n.size >= t,
      negatedMessage: (n, i) => `Expected ${i} to have a maximum size of \`${t - 1}\`, got \`${n.size}\``
    });
  }
  /**
      Test an Map to have a maximum size.
  
      @param size - The maximum size of the Map.
      */
  maxSize(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have a maximum size of \`${t}\`, got \`${n.size}\``,
      validator: (n) => n.size <= t,
      negatedMessage: (n, i) => `Expected ${i} to have a minimum size of \`${t + 1}\`, got \`${n.size}\``
    });
  }
  /**
      Test a Map to include all the provided keys. The keys are tested by identity, not structure.
  
      @param keys - The keys that should be a key in the Map.
      */
  hasKeys(...t) {
    return this.addValidator({
      message: (n, i, a) => `Expected ${i} to have keys \`${JSON.stringify(a)}\``,
      validator: (n) => (0, wp.default)(n, t)
    });
  }
  /**
      Test a Map to include any of the provided keys. The keys are tested by identity, not structure.
  
      @param keys - The keys that could be a key in the Map.
      */
  hasAnyKeys(...t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have any key of \`${JSON.stringify(t)}\``,
      validator: (n) => t.some((i) => n.has(i))
    });
  }
  /**
      Test a Map to include all the provided values. The values are tested by identity, not structure.
  
      @param values - The values that should be a value in the Map.
      */
  hasValues(...t) {
    return this.addValidator({
      message: (n, i, a) => `Expected ${i} to have values \`${JSON.stringify(a)}\``,
      validator: (n) => (0, wp.default)(new Set(n.values()), t)
    });
  }
  /**
      Test a Map to include any of the provided values. The values are tested by identity, not structure.
  
      @param values - The values that could be a value in the Map.
      */
  hasAnyValues(...t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have any value of \`${JSON.stringify(t)}\``,
      validator: (n) => {
        const i = new Set(n.values());
        return t.some((a) => i.has(a));
      }
    });
  }
  /**
      Test all the keys in the Map to match the provided predicate.
  
      @param predicate - The predicate that should be applied against every key in the Map.
      */
  keysOfType(t) {
    return this.addValidator({
      message: (n, i, a) => `(${i}) ${a}`,
      validator: (n) => (0, Pp.default)(n.keys(), "keys", t)
    });
  }
  /**
      Test all the values in the Map to match the provided predicate.
  
      @param predicate - The predicate that should be applied against every value in the Map.
      */
  valuesOfType(t) {
    return this.addValidator({
      message: (n, i, a) => `(${i}) ${a}`,
      validator: (n) => (0, Pp.default)(n.values(), "values", t)
    });
  }
  /**
  Test a Map to be empty.
  */
  get empty() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be empty, got \`${JSON.stringify([...t])}\``,
      validator: (t) => t.size === 0
    });
  }
  /**
  Test a Map to be not empty.
  */
  get nonEmpty() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to not be empty`,
      validator: (t) => t.size > 0
    });
  }
  /**
      Test a Map to be deeply equal to the provided Map.
  
      @param expected - Expected Map to match.
      */
  deepEqual(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to be deeply equal to \`${JSON.stringify([...t])}\`, got \`${JSON.stringify([...n])}\``,
      validator: (n) => S1(n, t)
    });
  }
}
cu.MapPredicate = L1;
var fu = {};
Object.defineProperty(fu, "__esModule", { value: !0 });
fu.WeakMapPredicate = void 0;
const T1 = Pi, O1 = pt();
class C1 extends O1.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("WeakMap", t);
  }
  /**
      Test a WeakMap to include all the provided keys. The keys are tested by identity, not structure.
  
      @param keys - The keys that should be a key in the WeakMap.
      */
  hasKeys(...t) {
    return this.addValidator({
      message: (n, i, a) => `Expected ${i} to have keys \`${JSON.stringify(a)}\``,
      validator: (n) => (0, T1.default)(n, t)
    });
  }
  /**
      Test a WeakMap to include any of the provided keys. The keys are tested by identity, not structure.
  
      @param keys - The keys that could be a key in the WeakMap.
      */
  hasAnyKeys(...t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have any key of \`${JSON.stringify(t)}\``,
      validator: (n) => t.some((i) => n.has(i))
    });
  }
}
fu.WeakMapPredicate = C1;
var du = {};
Object.defineProperty(du, "__esModule", { value: !0 });
du.SetPredicate = void 0;
const k1 = au, b1 = Pi, M1 = Bo, A1 = pt();
class z1 extends A1.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("Set", t);
  }
  /**
      Test a Set to have a specific size.
  
      @param size - The size of the Set.
      */
  size(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have size \`${t}\`, got \`${n.size}\``,
      validator: (n) => n.size === t
    });
  }
  /**
      Test a Set to have a minimum size.
  
      @param size - The minimum size of the Set.
      */
  minSize(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have a minimum size of \`${t}\`, got \`${n.size}\``,
      validator: (n) => n.size >= t,
      negatedMessage: (n, i) => `Expected ${i} to have a maximum size of \`${t - 1}\`, got \`${n.size}\``
    });
  }
  /**
      Test a Set to have a maximum size.
  
      @param size - The maximum size of the Set.
      */
  maxSize(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have a maximum size of \`${t}\`, got \`${n.size}\``,
      validator: (n) => n.size <= t,
      negatedMessage: (n, i) => `Expected ${i} to have a minimum size of \`${t + 1}\`, got \`${n.size}\``
    });
  }
  /**
      Test a Set to include all the provided items. The items are tested by identity, not structure.
  
      @param items - The items that should be a item in the Set.
      */
  has(...t) {
    return this.addValidator({
      message: (n, i, a) => `Expected ${i} to have items \`${JSON.stringify(a)}\``,
      validator: (n) => (0, b1.default)(n, t)
    });
  }
  /**
      Test a Set to include any of the provided items. The items are tested by identity, not structure.
  
      @param items - The items that could be a item in the Set.
      */
  hasAny(...t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have any item of \`${JSON.stringify(t)}\``,
      validator: (n) => t.some((i) => n.has(i))
    });
  }
  /**
      Test all the items in the Set to match the provided predicate.
  
      @param predicate - The predicate that should be applied against every item in the Set.
      */
  ofType(t) {
    return this.addValidator({
      message: (n, i, a) => `(${i}) ${a}`,
      validator: (n) => (0, M1.default)(n, "values", t)
    });
  }
  /**
  Test a Set to be empty.
  */
  get empty() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be empty, got \`${JSON.stringify([...t])}\``,
      validator: (t) => t.size === 0
    });
  }
  /**
  Test a Set to be not empty.
  */
  get nonEmpty() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to not be empty`,
      validator: (t) => t.size > 0
    });
  }
  /**
      Test a Set to be deeply equal to the provided Set.
  
      @param expected - Expected Set to match.
      */
  deepEqual(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to be deeply equal to \`${JSON.stringify([...t])}\`, got \`${JSON.stringify([...n])}\``,
      validator: (n) => k1(n, t)
    });
  }
}
du.SetPredicate = z1;
var hu = {};
Object.defineProperty(hu, "__esModule", { value: !0 });
hu.WeakSetPredicate = void 0;
const N1 = Pi, $1 = pt();
class I1 extends $1.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("WeakSet", t);
  }
  /**
      Test a WeakSet to include all the provided items. The items are tested by identity, not structure.
  
      @param items - The items that should be a item in the WeakSet.
      */
  has(...t) {
    return this.addValidator({
      message: (n, i, a) => `Expected ${i} to have items \`${JSON.stringify(a)}\``,
      validator: (n) => (0, N1.default)(n, t)
    });
  }
  /**
      Test a WeakSet to include any of the provided items. The items are tested by identity, not structure.
  
      @param items - The items that could be a item in the WeakSet.
      */
  hasAny(...t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have any item of \`${JSON.stringify(t)}\``,
      validator: (n) => t.some((i) => n.has(i))
    });
  }
}
hu.WeakSetPredicate = I1;
var pu = {};
Object.defineProperty(pu, "__esModule", { value: !0 });
pu.TypedArrayPredicate = void 0;
const R1 = pt();
class B1 extends R1.Predicate {
  /**
      Test a typed array to have a specific byte length.
  
      @param byteLength - The byte length of the typed array.
      */
  byteLength(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have byte length of \`${t}\`, got \`${n.byteLength}\``,
      validator: (n) => n.byteLength === t
    });
  }
  /**
      Test a typed array to have a minimum byte length.
  
      @param byteLength - The minimum byte length of the typed array.
      */
  minByteLength(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have a minimum byte length of \`${t}\`, got \`${n.byteLength}\``,
      validator: (n) => n.byteLength >= t,
      negatedMessage: (n, i) => `Expected ${i} to have a maximum byte length of \`${t - 1}\`, got \`${n.byteLength}\``
    });
  }
  /**
      Test a typed array to have a minimum byte length.
  
      @param length - The minimum byte length of the typed array.
      */
  maxByteLength(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have a maximum byte length of \`${t}\`, got \`${n.byteLength}\``,
      validator: (n) => n.byteLength <= t,
      negatedMessage: (n, i) => `Expected ${i} to have a minimum byte length of \`${t + 1}\`, got \`${n.byteLength}\``
    });
  }
  /**
      Test a typed array to have a specific length.
  
      @param length - The length of the typed array.
      */
  length(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have length \`${t}\`, got \`${n.length}\``,
      validator: (n) => n.length === t
    });
  }
  /**
      Test a typed array to have a minimum length.
  
      @param length - The minimum length of the typed array.
      */
  minLength(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have a minimum length of \`${t}\`, got \`${n.length}\``,
      validator: (n) => n.length >= t,
      negatedMessage: (n, i) => `Expected ${i} to have a maximum length of \`${t - 1}\`, got \`${n.length}\``
    });
  }
  /**
      Test a typed array to have a maximum length.
  
      @param length - The maximum length of the typed array.
      */
  maxLength(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have a maximum length of \`${t}\`, got \`${n.length}\``,
      validator: (n) => n.length <= t,
      negatedMessage: (n, i) => `Expected ${i} to have a minimum length of \`${t + 1}\`, got \`${n.length}\``
    });
  }
}
pu.TypedArrayPredicate = B1;
var mu = {};
Object.defineProperty(mu, "__esModule", { value: !0 });
mu.ArrayBufferPredicate = void 0;
const D1 = pt();
class j1 extends D1.Predicate {
  /**
      Test an array buffer to have a specific byte length.
  
      @param byteLength - The byte length of the array buffer.
      */
  byteLength(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have byte length of \`${t}\`, got \`${n.byteLength}\``,
      validator: (n) => n.byteLength === t
    });
  }
  /**
      Test an array buffer to have a minimum byte length.
  
      @param byteLength - The minimum byte length of the array buffer.
      */
  minByteLength(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have a minimum byte length of \`${t}\`, got \`${n.byteLength}\``,
      validator: (n) => n.byteLength >= t,
      negatedMessage: (n, i) => `Expected ${i} to have a maximum byte length of \`${t - 1}\`, got \`${n.byteLength}\``
    });
  }
  /**
      Test an array buffer to have a minimum byte length.
  
      @param length - The minimum byte length of the array buffer.
      */
  maxByteLength(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have a maximum byte length of \`${t}\`, got \`${n.byteLength}\``,
      validator: (n) => n.byteLength <= t,
      negatedMessage: (n, i) => `Expected ${i} to have a minimum byte length of \`${t + 1}\`, got \`${n.byteLength}\``
    });
  }
}
mu.ArrayBufferPredicate = j1;
var gu = {};
Object.defineProperty(gu, "__esModule", { value: !0 });
gu.DataViewPredicate = void 0;
const F1 = pt();
class Z1 extends F1.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("DataView", t);
  }
  /**
      Test a DataView to have a specific byte length.
  
      @param byteLength - The byte length of the DataView.
      */
  byteLength(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have byte length of \`${t}\`, got \`${n.byteLength}\``,
      validator: (n) => n.byteLength === t
    });
  }
  /**
      Test a DataView to have a minimum byte length.
  
      @param byteLength - The minimum byte length of the DataView.
      */
  minByteLength(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have a minimum byte length of \`${t}\`, got \`${n.byteLength}\``,
      validator: (n) => n.byteLength >= t,
      negatedMessage: (n, i) => `Expected ${i} to have a maximum byte length of \`${t - 1}\`, got \`${n.byteLength}\``
    });
  }
  /**
      Test a DataView to have a minimum byte length.
  
      @param length - The minimum byte length of the DataView.
      */
  maxByteLength(t) {
    return this.addValidator({
      message: (n, i) => `Expected ${i} to have a maximum byte length of \`${t}\`, got \`${n.byteLength}\``,
      validator: (n) => n.byteLength <= t,
      negatedMessage: (n, i) => `Expected ${i} to have a minimum byte length of \`${t + 1}\`, got \`${n.byteLength}\``
    });
  }
}
gu.DataViewPredicate = Z1;
var _u = {};
Object.defineProperty(_u, "__esModule", { value: !0 });
_u.AnyPredicate = void 0;
const xp = $o, V1 = Io, U1 = os;
class W1 {
  constructor(t, n = {}) {
    Object.defineProperty(this, "predicates", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "options", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    });
  }
  [V1.testSymbol](t, n, i, a) {
    const l = /* @__PURE__ */ new Map();
    for (const c of this.predicates)
      try {
        n(t, i, c, a);
        return;
      } catch (p) {
        if (t === void 0 && this.options.optional === !0)
          return;
        if (p instanceof xp.ArgumentError)
          for (const [m, _] of p.validationErrors.entries()) {
            const y = l.get(m);
            l.set(m, /* @__PURE__ */ new Set([...y ?? [], ..._]));
          }
      }
    if (l.size > 0) {
      const c = (0, U1.generateArgumentErrorMessage)(l, !0);
      throw new xp.ArgumentError(`Any predicate failed with the following errors:
${c}`, n, l);
    }
  }
}
_u.AnyPredicate = W1;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.AnyPredicate = e.DataViewPredicate = e.ArrayBufferPredicate = e.TypedArrayPredicate = e.WeakSetPredicate = e.SetPredicate = e.WeakMapPredicate = e.MapPredicate = e.ErrorPredicate = e.DatePredicate = e.ObjectPredicate = e.ArrayPredicate = e.BooleanPredicate = e.BigIntPredicate = e.NumberPredicate = e.StringPredicate = void 0;
  const t = tu;
  Object.defineProperty(e, "StringPredicate", { enumerable: !0, get: function() {
    return t.StringPredicate;
  } });
  const n = nu;
  Object.defineProperty(e, "NumberPredicate", { enumerable: !0, get: function() {
    return n.NumberPredicate;
  } });
  const i = ru;
  Object.defineProperty(e, "BigIntPredicate", { enumerable: !0, get: function() {
    return i.BigIntPredicate;
  } });
  const a = iu;
  Object.defineProperty(e, "BooleanPredicate", { enumerable: !0, get: function() {
    return a.BooleanPredicate;
  } });
  const l = pt(), c = ou;
  Object.defineProperty(e, "ArrayPredicate", { enumerable: !0, get: function() {
    return c.ArrayPredicate;
  } });
  const p = su;
  Object.defineProperty(e, "ObjectPredicate", { enumerable: !0, get: function() {
    return p.ObjectPredicate;
  } });
  const m = lu;
  Object.defineProperty(e, "DatePredicate", { enumerable: !0, get: function() {
    return m.DatePredicate;
  } });
  const _ = uu;
  Object.defineProperty(e, "ErrorPredicate", { enumerable: !0, get: function() {
    return _.ErrorPredicate;
  } });
  const y = cu;
  Object.defineProperty(e, "MapPredicate", { enumerable: !0, get: function() {
    return y.MapPredicate;
  } });
  const v = fu;
  Object.defineProperty(e, "WeakMapPredicate", { enumerable: !0, get: function() {
    return v.WeakMapPredicate;
  } });
  const h = du;
  Object.defineProperty(e, "SetPredicate", { enumerable: !0, get: function() {
    return h.SetPredicate;
  } });
  const A = hu;
  Object.defineProperty(e, "WeakSetPredicate", { enumerable: !0, get: function() {
    return A.WeakSetPredicate;
  } });
  const b = pu;
  Object.defineProperty(e, "TypedArrayPredicate", { enumerable: !0, get: function() {
    return b.TypedArrayPredicate;
  } });
  const T = mu;
  Object.defineProperty(e, "ArrayBufferPredicate", { enumerable: !0, get: function() {
    return T.ArrayBufferPredicate;
  } });
  const j = gu;
  Object.defineProperty(e, "DataViewPredicate", { enumerable: !0, get: function() {
    return j.DataViewPredicate;
  } });
  const S = _u;
  Object.defineProperty(e, "AnyPredicate", { enumerable: !0, get: function() {
    return S.AnyPredicate;
  } }), e.default = (P, x) => (Object.defineProperties(P, {
    string: {
      get: () => new t.StringPredicate(x)
    },
    number: {
      get: () => new n.NumberPredicate(x)
    },
    bigint: {
      get: () => new i.BigIntPredicate(x)
    },
    boolean: {
      get: () => new a.BooleanPredicate(x)
    },
    undefined: {
      get: () => new l.Predicate("undefined", x)
    },
    null: {
      get: () => new l.Predicate("null", x)
    },
    nullOrUndefined: {
      get: () => new l.Predicate("nullOrUndefined", x)
    },
    nan: {
      get: () => new l.Predicate("nan", x)
    },
    symbol: {
      get: () => new l.Predicate("symbol", x)
    },
    array: {
      get: () => new c.ArrayPredicate(x)
    },
    object: {
      get: () => new p.ObjectPredicate(x)
    },
    date: {
      get: () => new m.DatePredicate(x)
    },
    error: {
      get: () => new _.ErrorPredicate(x)
    },
    map: {
      get: () => new y.MapPredicate(x)
    },
    weakMap: {
      get: () => new v.WeakMapPredicate(x)
    },
    set: {
      get: () => new h.SetPredicate(x)
    },
    weakSet: {
      get: () => new A.WeakSetPredicate(x)
    },
    function: {
      get: () => new l.Predicate("Function", x)
    },
    buffer: {
      get: () => new l.Predicate("Buffer", x)
    },
    regExp: {
      get: () => new l.Predicate("RegExp", x)
    },
    promise: {
      get: () => new l.Predicate("Promise", x)
    },
    typedArray: {
      get: () => new b.TypedArrayPredicate("TypedArray", x)
    },
    int8Array: {
      get: () => new b.TypedArrayPredicate("Int8Array", x)
    },
    uint8Array: {
      get: () => new b.TypedArrayPredicate("Uint8Array", x)
    },
    uint8ClampedArray: {
      get: () => new b.TypedArrayPredicate("Uint8ClampedArray", x)
    },
    int16Array: {
      get: () => new b.TypedArrayPredicate("Int16Array", x)
    },
    uint16Array: {
      get: () => new b.TypedArrayPredicate("Uint16Array", x)
    },
    int32Array: {
      get: () => new b.TypedArrayPredicate("Int32Array", x)
    },
    uint32Array: {
      get: () => new b.TypedArrayPredicate("Uint32Array", x)
    },
    float32Array: {
      get: () => new b.TypedArrayPredicate("Float32Array", x)
    },
    float64Array: {
      get: () => new b.TypedArrayPredicate("Float64Array", x)
    },
    arrayBuffer: {
      get: () => new T.ArrayBufferPredicate("ArrayBuffer", x)
    },
    sharedArrayBuffer: {
      get: () => new T.ArrayBufferPredicate("SharedArrayBuffer", x)
    },
    dataView: {
      get: () => new j.DataViewPredicate(x)
    },
    iterable: {
      get: () => new l.Predicate("Iterable", x)
    },
    any: {
      value: (...$) => new S.AnyPredicate($, x)
    }
  }), P);
})(wl);
Object.defineProperty(yd, "__esModule", { value: !0 });
const H1 = wl;
yd.default = (e) => (Object.defineProperties(e, {
  optional: {
    get: () => (0, H1.default)({}, { optional: !0 })
  }
}), e);
(function(e) {
  var t = _e && _e.__createBinding || (Object.create ? function(A, b, T, j) {
    j === void 0 && (j = T);
    var S = Object.getOwnPropertyDescriptor(b, T);
    (!S || ("get" in S ? !b.__esModule : S.writable || S.configurable)) && (S = { enumerable: !0, get: function() {
      return b[T];
    } }), Object.defineProperty(A, j, S);
  } : function(A, b, T, j) {
    j === void 0 && (j = T), A[j] = b[T];
  }), n = _e && _e.__exportStar || function(A, b) {
    for (var T in A)
      T !== "default" && !Object.prototype.hasOwnProperty.call(b, T) && t(b, A, T);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ArgumentError = e.Predicate = void 0;
  const i = N0, a = Xl, l = pt();
  Object.defineProperty(e, "Predicate", { enumerable: !0, get: function() {
    return l.Predicate;
  } });
  const c = Io, p = yd, m = wl, _ = Ro, y = (A, b, T) => {
    if (!(0, c.isPredicate)(b) && typeof b != "string")
      throw new TypeError(`Expected second argument to be a predicate or a string, got \`${typeof b}\``);
    if ((0, c.isPredicate)(b)) {
      const j = (0, i.default)();
      (0, _.default)(A, () => (0, a.inferLabel)(j), b);
      return;
    }
    (0, _.default)(A, b, T);
  };
  Object.defineProperties(y, {
    isValid: {
      value: (A, b) => {
        try {
          return (0, _.default)(A, "", b), !0;
        } catch {
          return !1;
        }
      }
    },
    create: {
      value: (A, b) => (T, j) => {
        if ((0, c.isPredicate)(A)) {
          const S = (0, i.default)();
          (0, _.default)(T, j ?? (() => (0, a.inferLabel)(S)), A);
          return;
        }
        (0, _.default)(T, j ?? A, b);
      }
    }
  });
  const v = (0, m.default)((0, p.default)(y));
  e.default = v, n(wl, e);
  var h = $o;
  Object.defineProperty(e, "ArgumentError", { enumerable: !0, get: function() {
    return h.ArgumentError;
  } });
})(xg);
var yu = {};
Object.defineProperty(yu, "__esModule", { value: !0 });
yu.InvariantCulture = void 0;
const G1 = {
  Invariant: "Invariant"
};
yu.InvariantCulture = G1.Invariant;
var K1 = _e && _e.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(is, "__esModule", { value: !0 });
const xe = K1(xg), ff = yu;
class Fe {
  static notNull(t, n) {
    if (t === null)
      throw `${n || "Value"} should not be null.`;
  }
  static notUndefined(t, n) {
    if (t === void 0)
      throw `${n || "Value"} should not be undefined.`;
  }
  static notNullOrUndefined(t, n) {
    if (t == null)
      throw Error(`${n || "Value"} should not be null or undefined. Value is ${t === null ? "null" : "undefined"}.`);
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static parsableInteger(t, n) {
    const i = parseInt(t);
    if (isNaN(i) || i.toString() !== t.toString())
      throw Error(`${n || `Value '${t}'`} can not be parsed to an integer.`);
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static parsableFloat(t, n) {
    const i = parseFloat(t);
    if (isNaN(i) || i.toString() !== t.toString())
      throw Error(`${n || `Value '${t}'`} can not be parsed to a float/decimal.`);
  }
  static arrayNoneNullOrUndefined(t, n, i = !1) {
    if (!i)
      Fe.notNullOrUndefined(t);
    else if (t == null)
      return;
    if (Array.isArray(t)) {
      if (t.some((a) => a == null))
        throw Error(`Array ${n ? ` '${n}' ` : ""}should not contain null or undefined.`);
    } else
      throw Error(`Value ${n ? ` '${n}' ` : ""}is not an array.`);
  }
  static arrayNoneNullOrEmptyString(t, n, i = !1) {
    if (!i)
      Fe.notNullOrUndefined(t);
    else if (t == null)
      return;
    if (Array.isArray(t)) {
      if (t.some((a) => a == null || typeof a == "string" && (a.length === 0 || a.trim().length === 0)))
        throw Error(`Array ${n ? ` '${n}' ` : ""}should not contain null, undefined or empty string.`);
    } else
      throw Error(`Value ${n ? ` '${n}' ` : ""}is not an array.`);
  }
  static arrayNoneNullOrInvariantCulture(t, n, i = !1) {
    if (!i)
      Fe.notNullOrUndefined(t);
    else if (t == null)
      return;
    if (Array.isArray(t)) {
      if (t.some((a) => a == null || a === ff.InvariantCulture))
        throw Error(`Array ${n ? ` '${n}' ` : ""}should not contain null, undefined or '${ff.InvariantCulture}'.`);
    } else
      throw Error(`Value ${n ? ` '${n}' ` : ""}is not an array.`);
  }
  static isStringArray(t, n, i = !1) {
    if (!i)
      Fe.notNullOrUndefined(t);
    else if (t == null)
      return;
    if (Array.isArray(t)) {
      if (t.some((a) => typeof a != "string"))
        throw Error(`Array ${n ? ` '${n}' ` : ""}should only contain values of type string.`);
    } else
      throw Error(`Value ${n ? ` '${n}' ` : ""}is not an array.`);
  }
  static isIntegerArray(t, n, i = !1) {
    if (!i)
      Fe.notNullOrUndefined(t);
    else if (t == null)
      return;
    if (Array.isArray(t)) {
      if (t.some((a) => typeof a != "number" || !Number.isInteger(a)))
        throw Error(`Array ${n ? ` '${n}' ` : ""}should only contain values of type number.`);
    } else
      throw Error(`Value ${n ? ` '${n}' ` : ""}is not an array.`);
  }
  static isNumberArray(t, n, i = !1) {
    if (!i)
      Fe.notNullOrUndefined(t);
    else if (t == null)
      return;
    if (Array.isArray(t)) {
      if (t.some((a) => typeof a != "number"))
        throw Error(`Array ${n ? ` '${n}' ` : ""}should only contain values of type number.`);
    } else
      throw Error(`Value ${n ? ` '${n}' ` : ""}is not an array.`);
  }
}
is.default = Fe;
Fe.isString = xe.default.create(xe.default.string);
Fe.isInteger = xe.default.create(xe.default.number.integer);
Fe.arrayNotEmpty = xe.default.create(xe.default.array.nonEmpty);
Fe.arrayMaxOne = xe.default.create(xe.default.array.maxLength(1));
Fe.stringNotNullOrEmpty = xe.default.create(xe.default.string.nonEmpty.validate((e) => ({
  validator: e.trim().length > 0,
  message: (t) => `Expected ${t} not to be an empty or all whitespace string ('${e}').`
})));
Fe.validId = xe.default.create(xe.default.number.integer.not.infinite.greaterThan(0));
Fe.validIdOrNull = xe.default.create(xe.default.any(xe.default.null, xe.default.number.integer.not.infinite.greaterThan(0)));
Fe.validIds = xe.default.create(xe.default.any(xe.default.array.empty, xe.default.array.ofType(xe.default.number.integer.not.infinite.greaterThan(0))));
Fe.notInvariantCulture = xe.default.create(xe.default.string.nonEmpty.not.equals(ff.InvariantCulture));
Fe.notNegative = xe.default.create(xe.default.number.not.negative);
Fe.greaterThan = (e, t) => xe.default.create(xe.default.number.greaterThan(t))(e);
Fe.greaterThanOrEqual = (e, t) => xe.default.create(xe.default.number.greaterThanOrEqual(t))(e);
Fe.lessThan = (e, t) => xe.default.create(xe.default.number.lessThan(t))(e);
Fe.lessThanOrEqual = (e, t) => xe.default.create(xe.default.number.lessThanOrEqual(t))(e);
Fe.isNumber = xe.default.create(xe.default.number);
var as = {}, wd = _e && _e.__decorate || function(e, t, n, i) {
  var a = arguments.length, l = a < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, n) : i, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    l = Reflect.decorate(e, t, n, i);
  else
    for (var p = e.length - 1; p >= 0; p--)
      (c = e[p]) && (l = (a < 3 ? c(l) : a > 3 ? c(t, n, l) : c(t, n)) || l);
  return a > 3 && l && Object.defineProperty(t, n, l), l;
}, Pd = _e && _e.__metadata || function(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}, J1 = _e && _e.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, co;
Object.defineProperty(as, "__esModule", { value: !0 });
var df = as.PropertyLoadOption = void 0;
const xo = ts, Sp = J1(is), xa = rs;
let pi = co = class {
  constructor(t) {
    this.loadOption = xa.LoadOption.None, this.properties = [], t != null && (t instanceof co ? (this.loadOption = t.loadOption, this.properties = [...t.properties]) : typeof t == "string" ? (Sp.default.stringNotNullOrEmpty(t), this.loadOption = xa.LoadOption.Custom, this.properties = [t]) : t instanceof Array ? (Sp.default.arrayNotEmpty(t), this.loadOption = xa.LoadOption.Custom, this.properties = [...t]) : this.loadOption = t);
  }
  deepClone() {
    return xo.JSON.deserialize(xo.JSON.serialize(this), co);
  }
};
pi.None = new co(xa.LoadOption.None);
pi.All = new co(xa.LoadOption.All);
wd([
  (0, xo.JsonProperty)("load_option"),
  Pd("design:type", Number)
], pi.prototype, "loadOption", void 0);
wd([
  (0, xo.JsonProperty)("properties"),
  (0, xo.JsonElementType)(String),
  Pd("design:type", Array)
], pi.prototype, "properties", void 0);
pi = co = wd([
  (0, xo.JsonObject)(),
  Pd("design:paramtypes", [Object])
], pi);
df = as.PropertyLoadOption = pi;
var ss = {}, vu = {};
Object.defineProperty(vu, "__esModule", { value: !0 });
vu.TypeGuards = void 0;
class q1 {
  /**
   * A naive type guard to check if we are dealing with a string array.
   *
   * @remarks
   * Only checks if the first element of the array is of type "string".
   *
   * @param obj - An array
   */
  static isStringArray(t) {
    return t != null && t.length > 0 && typeof t[0] == "string";
  }
  /**
   * A naive type guard to check if we are dealing with a number array.
   *
   * @remarks
   * Only checks if the first element of the array is of type "number".
   *
   * @param obj - An array
   */
  static isNumberArray(t) {
    return t != null && t.length > 0 && typeof t[0] == "number";
  }
}
vu.TypeGuards = q1;
var ls = {}, wu = _e && _e.__decorate || function(e, t, n, i) {
  var a = arguments.length, l = a < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, n) : i, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    l = Reflect.decorate(e, t, n, i);
  else
    for (var p = e.length - 1; p >= 0; p--)
      (c = e[p]) && (l = (a < 3 ? c(l) : a > 3 ? c(t, n, l) : c(t, n)) || l);
  return a > 3 && l && Object.defineProperty(t, n, l), l;
}, fo = _e && _e.__metadata || function(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}, hf;
Object.defineProperty(ls, "__esModule", { value: !0 });
ls.RelationSpecification = void 0;
const Pu = ts;
let So = hf = class {
  constructor(t, n) {
    this.role = null, this.name = t, this.role = n ?? null;
  }
  deepClone() {
    return new hf(this.name, this.role);
  }
  deepEquals(t) {
    return t ? t.name === this.name && (!t.role && !this.role || t.role === this.role) : !1;
  }
  onDeserialized() {
    var t;
    this.role = (t = this.role) !== null && t !== void 0 ? t : null;
  }
};
wu([
  (0, Pu.JsonProperty)("name"),
  fo("design:type", String)
], So.prototype, "name", void 0);
wu([
  (0, Pu.JsonProperty)("role"),
  fo("design:type", Object)
], So.prototype, "role", void 0);
wu([
  (0, Pu.OnDeserialized)(),
  fo("design:type", Function),
  fo("design:paramtypes", []),
  fo("design:returntype", void 0)
], So.prototype, "onDeserialized", null);
So = hf = wu([
  (0, Pu.JsonObject)(),
  fo("design:paramtypes", [String, Object])
], So);
ls.RelationSpecification = So;
var xd = _e && _e.__decorate || function(e, t, n, i) {
  var a = arguments.length, l = a < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, n) : i, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    l = Reflect.decorate(e, t, n, i);
  else
    for (var p = e.length - 1; p >= 0; p--)
      (c = e[p]) && (l = (a < 3 ? c(l) : a > 3 ? c(t, n, l) : c(t, n)) || l);
  return a > 3 && l && Object.defineProperty(t, n, l), l;
}, Sd = _e && _e.__metadata || function(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}, Y1 = _e && _e.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, ho;
Object.defineProperty(ss, "__esModule", { value: !0 });
var Mg = ss.RelationLoadOption = void 0;
const Eo = ts, Q1 = Y1(is), X1 = vu, xl = rs, Ag = ls;
let mi = ho = class {
  constructor(t) {
    this.loadOption = xl.LoadOption.None, this.relations = [], t != null && (t instanceof ho ? (this.loadOption = t.loadOption, this.relations = [...t.relations]) : t instanceof Array ? (Q1.default.arrayNotEmpty(t), this.loadOption = xl.LoadOption.Custom, X1.TypeGuards.isStringArray(t) ? this.relations = t.map((n) => new Ag.RelationSpecification(n)) : this.relations = [...t]) : this.loadOption = t);
  }
  deepClone() {
    return Eo.JSON.deserialize(Eo.JSON.serialize(this), ho);
  }
};
mi.None = new ho(xl.LoadOption.None);
mi.All = new ho(xl.LoadOption.All);
xd([
  (0, Eo.JsonProperty)("load_option"),
  Sd("design:type", Number)
], mi.prototype, "loadOption", void 0);
xd([
  (0, Eo.JsonProperty)("relations"),
  (0, Eo.JsonElementType)(Ag.RelationSpecification),
  Sd("design:type", Array)
], mi.prototype, "relations", void 0);
mi = ho = xd([
  (0, Eo.JsonObject)(),
  Sd("design:paramtypes", [Object])
], mi);
Mg = ss.RelationLoadOption = mi;
var Ep;
function ew() {
  if (Ep)
    return sa;
  Ep = 1;
  var e = _e && _e.__importDefault || function(_) {
    return _ && _.__esModule ? _ : { default: _ };
  };
  Object.defineProperty(sa, "__esModule", { value: !0 }), sa.EntityLoadConfigurationBuilder = void 0;
  const t = e(is), n = ns, i = zg(), a = rs, l = as, c = ss, p = ls;
  class m {
    constructor(y) {
      this._entityLoadConfiguration = new i.EntityLoadConfiguration(), y && (this._entityLoadConfiguration = y.deepClone());
    }
    inCultures(y) {
      return t.default.notNullOrUndefined(y), y instanceof Array ? (this._entityLoadConfiguration.cultureLoadOption = this._entityLoadConfiguration.cultureLoadOption || new n.CultureLoadOption(), this._entityLoadConfiguration.cultureLoadOption.loadOption = a.LoadOption.Custom, this._entityLoadConfiguration.cultureLoadOption.cultures = [
        ...new Set((this._entityLoadConfiguration.cultureLoadOption.cultures || []).concat(y))
      ]) : (this._entityLoadConfiguration.cultureLoadOption = this._entityLoadConfiguration.cultureLoadOption || new n.CultureLoadOption(), this._entityLoadConfiguration.cultureLoadOption.loadOption = y), this;
    }
    inCulture(y) {
      return t.default.notUndefined(y), t.default.stringNotNullOrEmpty(y), this.inCultures([y]);
    }
    withProperties(y) {
      return t.default.notNullOrUndefined(y), y instanceof Array ? (this._entityLoadConfiguration.propertyLoadOption = this._entityLoadConfiguration.propertyLoadOption || new l.PropertyLoadOption(), this._entityLoadConfiguration.propertyLoadOption.loadOption = a.LoadOption.Custom, this._entityLoadConfiguration.propertyLoadOption.properties = [
        ...new Set((this._entityLoadConfiguration.propertyLoadOption.properties || []).concat(y))
      ]) : (this._entityLoadConfiguration.propertyLoadOption = this._entityLoadConfiguration.propertyLoadOption || new l.PropertyLoadOption(), this._entityLoadConfiguration.propertyLoadOption.loadOption = y), this;
    }
    withProperty(y) {
      return t.default.notUndefined(y), t.default.stringNotNullOrEmpty(y), this.withProperties([y]);
    }
    withRelations(y) {
      if (t.default.notNullOrUndefined(y), y instanceof Array) {
        let v = y.map((h) => typeof h == "string" ? new p.RelationSpecification(h) : h);
        this._entityLoadConfiguration.relationLoadOption = this._entityLoadConfiguration.relationLoadOption || new c.RelationLoadOption(), this._entityLoadConfiguration.relationLoadOption.loadOption = a.LoadOption.Custom, v = v.filter((h) => this._entityLoadConfiguration.relationLoadOption.relations.findIndex((A) => typeof h == "string" ? A.name === h : A.deepEquals(h)) === -1), this._entityLoadConfiguration.relationLoadOption.relations = (this._entityLoadConfiguration.relationLoadOption.relations || []).concat(v);
      } else
        this._entityLoadConfiguration.relationLoadOption = this._entityLoadConfiguration.relationLoadOption || new c.RelationLoadOption(), this._entityLoadConfiguration.relationLoadOption.loadOption = y;
      return this;
    }
    withRelation(y, v) {
      return t.default.notUndefined(y), t.default.stringNotNullOrEmpty(y), this.withRelations([new p.RelationSpecification(y, v)]);
    }
    build() {
      return this._entityLoadConfiguration.deepClone();
    }
  }
  return sa.EntityLoadConfigurationBuilder = m, sa;
}
var Lp;
function zg() {
  if (Lp)
    return aa;
  Lp = 1;
  var e = _e && _e.__decorate || function(_, y, v, h) {
    var A = arguments.length, b = A < 3 ? y : h === null ? h = Object.getOwnPropertyDescriptor(y, v) : h, T;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      b = Reflect.decorate(_, y, v, h);
    else
      for (var j = _.length - 1; j >= 0; j--)
        (T = _[j]) && (b = (A < 3 ? T(b) : A > 3 ? T(y, v, b) : T(y, v)) || b);
    return A > 3 && b && Object.defineProperty(y, v, b), b;
  }, t = _e && _e.__metadata || function(_, y) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
      return Reflect.metadata(_, y);
  }, n;
  Object.defineProperty(aa, "__esModule", { value: !0 }), aa.EntityLoadConfiguration = void 0;
  const i = ts, a = ns, l = ew(), c = as, p = ss;
  let m = n = class {
    constructor(y, v, h) {
      y && (this.cultureLoadOption = y), v && (this.propertyLoadOption = v), h && (this.relationLoadOption = h);
    }
    builder() {
      return new l.EntityLoadConfigurationBuilder(this);
    }
    deepClone() {
      return new n(this.cultureLoadOption && this.cultureLoadOption.deepClone(), this.propertyLoadOption && this.propertyLoadOption.deepClone(), this.relationLoadOption && this.relationLoadOption.deepClone());
    }
  };
  return m.Minimal = new n(a.CultureLoadOption.None, c.PropertyLoadOption.None, p.RelationLoadOption.None), m.Default = new n(a.CultureLoadOption.Default, c.PropertyLoadOption.All, p.RelationLoadOption.None), m.DefaultCultureFull = new n(a.CultureLoadOption.Default, c.PropertyLoadOption.All, p.RelationLoadOption.All), m.Full = new n(a.CultureLoadOption.All, c.PropertyLoadOption.All, p.RelationLoadOption.All), e([
    (0, i.JsonProperty)("culture_option"),
    t("design:type", Object)
  ], m.prototype, "cultureLoadOption", void 0), e([
    (0, i.JsonProperty)("property_option"),
    t("design:type", Object)
  ], m.prototype, "propertyLoadOption", void 0), e([
    (0, i.JsonProperty)("relation_option"),
    t("design:type", Object)
  ], m.prototype, "relationLoadOption", void 0), m = n = e([
    (0, i.JsonObject)(),
    t("design:paramtypes", [Object, Object, Object])
  ], m), aa.EntityLoadConfiguration = m, aa;
}
var Tp = zg();
const tw = /* @__PURE__ */ new Set([
  "M.Tag",
  "M.ContentType",
  "M.AssetType",
  "M.AssetUsage",
  "M.AssetPurpose",
  "M.ContentStatus",
  "M.DRM",
  "M.Country",
  "M.Region",
  "M.Language",
  "M.Category",
  "M.Classification"
]), nw = /* @__PURE__ */ new Set([
  "M.AssetCollection",
  "M.Portals",
  "M.Portal",
  "M.UserGroup",
  "M.User",
  "M.Comment",
  "M.Annotation",
  "M.FinalLifeCycleStatus",
  "M.ContentRepository",
  "M.RenditionLink",
  "M.PublicLink"
]), rw = /(Type|Status|Tag|Category|Classification|Taxonomy|Brand|Region|Language|Country|Purpose|Usage|LifeCycle|DRM)/i, iw = {
  asset: "#378ADD",
  product: "#1D9E75",
  content: "#D85A30",
  taxonomy: "#7F77DD",
  unknown: "#888780"
}, ow = {
  asset: "Asset",
  product: "Product",
  content: "Content",
  taxonomy: "Taxonomy",
  unknown: "Other"
};
function aw(e) {
  var i, a, l;
  if (e.definitionName)
    return e.definitionName;
  const t = e, n = t == null ? void 0 : t.definition;
  return (n == null ? void 0 : n.name) ?? ((i = t == null ? void 0 : t.entityDefinition) == null ? void 0 : i.name) ?? ((a = t == null ? void 0 : t.entitydefinition) == null ? void 0 : a.name) ?? ((l = t == null ? void 0 : t.systemProperties) == null ? void 0 : l.definitionName) ?? "";
}
function sw(e) {
  return !!(e.startsWith("PCM.") || e === "M.Product" || /\.Product(\.|$)/i.test(e) || /\bProduct\b/i.test(e) && !/ProductType|Taxonomy/i.test(e));
}
function lw(e) {
  return e ? e === "M.Asset" ? "asset" : sw(e) ? "product" : e.startsWith("CMP.") ? "content" : nw.has(e) ? "unknown" : tw.has(e) || e.startsWith("M.Taxonomy") || e.startsWith("Taxonomy") || e.startsWith("M.") && rw.test(e) ? "taxonomy" : "unknown" : "unknown";
}
function uw(e) {
  var i;
  for (const a of [
    "fileName",
    "FileName",
    "productName",
    "ProductName",
    "name",
    "Name",
    "title",
    "Title",
    "label",
    "Label",
    "contentName"
  ])
    try {
      const l = e.getPropertyValue(a);
      if (typeof l == "string" && l.length > 0)
        return l;
    } catch {
    }
  const t = e, n = e.id ?? ((i = t.systemProperties) == null ? void 0 : i.id);
  return e.identifier ?? (typeof n == "number" ? `#${n}` : "Unknown");
}
const cw = "EPAM.EntityToLocation", fw = 480, Sl = {
  "in-transit": { color: "#f59e0b", label: "In Transit" },
  stored: { color: "#6366f1", label: "Stored" },
  "on-display": { color: "#10b981", label: "On Display" },
  "removed-from-display": { color: "#64748b", label: "Removed from Display" },
  archived: { color: "#94a3b8", label: "Archived" }
}, Op = [
  {
    id: 1,
    name: "London Art Storage",
    address: "30 Great Guildford St, London SE1 0HS",
    lat: 51.5042,
    lng: -0.0948,
    date: "2024-10-01T08:00:00Z",
    isCurrent: !1,
    status: "stored",
    notes: "Held in central London storage before dispatch."
  },
  {
    id: 2,
    name: "Move to White Cube Bermondsey",
    address: "En route to 144-152 Bermondsey St, London SE1 3TQ",
    lat: 51.5018,
    lng: -0.0865,
    date: "2024-10-25T14:00:00Z",
    isCurrent: !1,
    status: "in-transit",
    notes: "In transit to White Cube Bermondsey for installation."
  },
  {
    id: 3,
    name: "White Cube Bermondsey",
    address: "144-152 Bermondsey St, London SE1 3TQ",
    lat: 51.49886,
    lng: -0.07871,
    date: "2024-11-01T10:00:00Z",
    isCurrent: !1,
    status: "on-display",
    notes: "Exhibited at White Cube Bermondsey gallery."
  },
  {
    id: 4,
    name: "Removed from Display",
    address: "144-152 Bermondsey St, London SE1 3TQ",
    lat: 51.49886,
    lng: -0.07871,
    date: "2025-01-20T16:00:00Z",
    isCurrent: !1,
    status: "removed-from-display",
    notes: "De-installed and removed from display at White Cube Bermondsey."
  },
  {
    id: 5,
    name: "Move to Tate Modern",
    address: "En route to Bankside, London SE1 9TG",
    lat: 51.5032,
    lng: -0.089,
    date: "2025-03-10T11:00:00Z",
    isCurrent: !1,
    status: "in-transit",
    notes: "In transit to Tate Modern for loan display."
  },
  {
    id: 6,
    name: "Tate Modern",
    address: "Bankside, London SE1 9TG",
    lat: 51.50756,
    lng: -0.09936,
    date: "2025-03-15T09:00:00Z",
    isCurrent: !0,
    status: "on-display",
    notes: "On loan for display at Tate Modern, Bankside."
  }
];
function El(e) {
  return e.date ? new Date(e.date).getTime() : 0;
}
function dw(e) {
  return [...e].sort((t, n) => El(n) - El(t));
}
function hw(e) {
  return [...e].sort((t, n) => El(t) - El(n));
}
function Ng(e, t) {
  var a;
  if (e.id != null)
    return e.id;
  const i = e.systemProperties;
  if (i != null) {
    const l = typeof i.id == "number" ? i.id : (a = i.get) == null ? void 0 : a.call(i, "id");
    if (typeof l == "number")
      return l;
  }
  return t;
}
function Ji(e, ...t) {
  for (const n of t)
    try {
      const i = e.getPropertyValue(n);
      if (i != null && String(i).length > 0)
        return String(i);
    } catch {
    }
  return "";
}
function Cp(e, ...t) {
  for (const n of t)
    try {
      const i = e.getPropertyValue(n);
      if (typeof i == "number" && !Number.isNaN(i))
        return i;
      if (typeof i == "string") {
        const a = parseFloat(i);
        if (!Number.isNaN(a))
          return a;
      }
    } catch {
    }
  return NaN;
}
function pw(e, ...t) {
  for (const n of t)
    try {
      const i = e.getPropertyValue(n);
      if (typeof i == "boolean")
        return i;
    } catch {
    }
  return !1;
}
const mw = new Set(Object.keys(Sl));
function gw(e) {
  const t = e.trim().toLowerCase();
  return mw.has(t) ? t : "stored";
}
function _w(e, t) {
  const n = Cp(e, "EPAM.latitude", "latitude", "Latitude"), i = Cp(e, "EPAM.longitude", "longitude", "Longitude");
  if (Number.isNaN(n) || Number.isNaN(i))
    return null;
  const a = Ji(e, "EPAM.locationName", "locationName") || Ji(e, "Title", "title") || "Unnamed", l = Ji(e, "EPAM.locationStatus", "locationStatus");
  return {
    id: Ng(e) ?? t,
    name: a,
    address: Ji(e, "EPAM.addressLine", "addressLine", "address", "Address"),
    lat: n,
    lng: i,
    date: Ji(e, "EPAM.locationDate", "locationDate") || null,
    isCurrent: pw(e, "EPAM.isCurrent", "isCurrent", "IsCurrent"),
    status: l ? gw(l) : "stored",
    notes: Ji(e, "EPAM.locationNotes", "locationNotes", "notes", "Notes")
  };
}
function yw(e, t) {
  var a, l, c;
  try {
    const p = e.getRelation(t);
    if (p != null)
      return p.getIds();
  } catch {
  }
  const n = e, i = (a = n.relations) == null ? void 0 : a[t];
  if (!Array.isArray(i)) {
    const p = (l = n.relations) == null ? void 0 : l[t];
    if ((c = p == null ? void 0 : p.parent) != null && c.href) {
      const m = String(p.parent.href).match(/\/entities\/(\d+)/);
      if (m)
        return [parseInt(m[1], 10)];
    }
    return Array.isArray(p == null ? void 0 : p.parents) ? p.parents.map((m) => {
      var y;
      const _ = (y = m.href) == null ? void 0 : y.match(/\/entities\/(\d+)/);
      return _ ? parseInt(_[1], 10) : null;
    }).filter((m) => m != null) : [];
  }
  return i.map((p) => {
    if (typeof p == "number")
      return p;
    if (p != null && typeof p == "object") {
      const m = p;
      if (typeof m.id == "number")
        return m.id;
      const _ = m.href;
      if (typeof _ == "string") {
        const y = _.match(/\/entities\/(\d+)/);
        if (y)
          return parseInt(y[1], 10);
      }
    }
    return null;
  }).filter((p) => p != null);
}
function vw() {
  if (document.getElementById("locationmap-leaflet-css"))
    return;
  const e = document.createElement("link");
  e.id = "locationmap-leaflet-css", e.rel = "stylesheet", e.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", document.head.appendChild(e);
}
async function ww(e, t, n) {
  const i = new Tp.EntityLoadConfiguration();
  i.relationLoadOption = Mg.All, i.propertyLoadOption = df.All, i.cultureLoadOption = uf.Default;
  const a = await e.entities.getAsync(t, i);
  if (a == null)
    return [];
  const l = yw(a, n);
  if (l.length === 0)
    return [];
  const c = new Tp.EntityLoadConfiguration();
  c.propertyLoadOption = df.All, c.cultureLoadOption = uf.Default;
  const p = [];
  return await Promise.all(
    l.map(async (m) => {
      try {
        const _ = await e.entities.getAsync(m, c);
        if (_ == null)
          return;
        const y = _w(_, m);
        y != null && p.push(y);
      } catch {
        console.warn(`[LocationMap] Could not load location entity ${m}`);
      }
    })
  ), p;
}
function Pw(e, t, n, i, a) {
  const l = ie.useRef(null), c = ie.useRef([]), p = ie.useRef(null), [m, _] = ie.useState(!1);
  ie.useEffect(() => {
    if (!a) {
      _(!1);
      return;
    }
    let y = null, v = !1, h = null;
    const b = requestAnimationFrame(() => {
      const T = e.current;
      v || !T || l.current || (vw(), y = Gi.map(T, {
        center: [51.503, -0.089],
        zoom: 14,
        zoomControl: !0
      }), Gi.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19
      }).addTo(y), l.current = y, _(!0), h = new ResizeObserver(() => {
        y == null || y.invalidateSize();
      }), h.observe(T), requestAnimationFrame(() => y == null ? void 0 : y.invalidateSize()));
    });
    return () => {
      var T;
      v = !0, cancelAnimationFrame(b), h == null || h.disconnect(), _(!1), (T = l.current) == null || T.remove(), l.current = null;
    };
  }, [a, e]), ie.useEffect(() => {
    var b;
    const y = l.current;
    if (!m || !y)
      return;
    c.current.forEach((T) => T.remove()), c.current = [], (b = p.current) == null || b.remove(), p.current = null;
    const v = hw(t), h = n === "current" ? t.filter((T) => T.isCurrent) : v;
    if (h.length === 0)
      return;
    const A = [];
    h.forEach((T) => {
      const j = Sl[T.status] ?? Sl.stored, S = T.isCurrent ? "#ef4444" : j.color, P = n === "history" ? v.findIndex((O) => O.id === T.id) + 1 : 0, x = n === "history" ? String(P) : "", $ = `<svg width="36" height="48" viewBox="0 0 36 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 0C8.06 0 0 8.06 0 18c0 13.5 18 30 18 30S36 31.5 36 18C36 8.06 27.94 0 18 0z"
              fill="${S}" stroke="white" stroke-width="2"/>
        ${n === "history" ? `<text x="18" y="23" text-anchor="middle" fill="white" font-size="13" font-weight="bold">${x}</text>` : '<circle cx="18" cy="18" r="6" fill="white"/>'}
      </svg>`, k = Gi.divIcon({
        html: $,
        className: "locationmap-pin",
        iconSize: [36, 48],
        iconAnchor: [18, 48],
        popupAnchor: [0, -48]
      }), f = Gi.marker([T.lat, T.lng], { icon: k }).addTo(y);
      f.bindPopup(`<strong>${T.name}</strong><br/>${T.address || ""}`), f.on("click", () => i(T)), c.current.push(f), A.push([T.lat, T.lng]);
    }), n === "history" && v.length > 1 && (p.current = Gi.polyline(v.map((T) => [T.lat, T.lng]), {
      color: "#6366f1",
      weight: 2.5,
      dashArray: "6 4",
      opacity: 0.7
    }).addTo(y)), requestAnimationFrame(() => {
      y.invalidateSize(), A.length === 1 ? y.setView(A[0], 14) : A.length > 1 && y.fitBounds(Gi.latLngBounds(A), { padding: [40, 40] });
    });
  }, [m, t, n, i]);
}
function xw({ mode: e, onChange: t }) {
  return /* @__PURE__ */ pe("div", { className: "locationmap-mode-toggle", children: ["current", "history"].map((n) => /* @__PURE__ */ pe("button", { type: "button", className: `locationmap-mode-btn${e === n ? " locationmap-mode-btn--active" : ""}`, onClick: () => t(n), children: n === "current" ? "Current" : "History" }, n)) });
}
function $g({ status: e }) {
  const t = Sl[e] ?? { color: "#94a3b8", label: e };
  return /* @__PURE__ */ pe("span", { className: "locationmap-badge", style: { backgroundColor: `${t.color}22`, color: t.color, borderColor: `${t.color}55` }, children: t.label });
}
function Sw({ location: e, onClose: t }) {
  if (!e)
    return null;
  const n = e.date ? new Date(e.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "No date";
  return /* @__PURE__ */ pe("div", { className: "locationmap-modal-overlay", onClick: t, children: /* @__PURE__ */ ft("div", { className: "locationmap-modal", onClick: (i) => i.stopPropagation(), children: [
    /* @__PURE__ */ pe("button", { type: "button", className: "locationmap-modal__close", onClick: t, children: "X" }),
    /* @__PURE__ */ ft("div", { className: "locationmap-modal__header", children: [
      /* @__PURE__ */ pe("div", { className: "locationmap-modal__title", children: e.name }),
      /* @__PURE__ */ pe($g, { status: e.status })
    ] }),
    /* @__PURE__ */ ft("div", { className: "locationmap-modal__meta", children: [
      /* @__PURE__ */ ft("div", { className: "locationmap-meta-row", children: [
        /* @__PURE__ */ pe("span", { className: "locationmap-meta-label", children: "Address" }),
        /* @__PURE__ */ pe("span", { className: "locationmap-meta-value", children: e.address || "-" })
      ] }),
      /* @__PURE__ */ ft("div", { className: "locationmap-meta-row", children: [
        /* @__PURE__ */ pe("span", { className: "locationmap-meta-label", children: "Date" }),
        /* @__PURE__ */ pe("span", { className: "locationmap-meta-value", children: n })
      ] }),
      /* @__PURE__ */ ft("div", { className: "locationmap-meta-row", children: [
        /* @__PURE__ */ pe("span", { className: "locationmap-meta-label", children: "Coordinates" }),
        /* @__PURE__ */ ft("span", { className: "locationmap-meta-value", children: [
          e.lat.toFixed(4),
          ", ",
          e.lng.toFixed(4)
        ] })
      ] }),
      e.isCurrent && /* @__PURE__ */ pe("div", { className: "locationmap-current-badge", children: "Current Location" })
    ] }),
    e.notes && /* @__PURE__ */ ft("div", { className: "locationmap-modal__notes", children: [
      /* @__PURE__ */ pe("div", { className: "locationmap-notes-label", children: "Notes" }),
      /* @__PURE__ */ pe("div", { className: "locationmap-notes-text", children: e.notes })
    ] })
  ] }) });
}
function Ew({ locations: e, onSelect: t }) {
  const n = dw(e);
  return /* @__PURE__ */ ft("aside", { className: "locationmap-sidebar", children: [
    /* @__PURE__ */ ft("div", { className: "locationmap-sidebar__title", children: [
      "History — ",
      n.length,
      " moves"
    ] }),
    /* @__PURE__ */ pe("div", { className: "locationmap-list", children: n.map((i, a) => /* @__PURE__ */ ft(
      "div",
      {
        className: `locationmap-list__item${i.isCurrent ? " locationmap-list__item--current" : ""}`,
        onClick: () => t(i),
        children: [
          /* @__PURE__ */ pe("div", { className: "locationmap-list__index", children: a + 1 }),
          /* @__PURE__ */ ft("div", { className: "locationmap-list__info", children: [
            /* @__PURE__ */ pe("div", { className: "locationmap-list__name", children: i.name }),
            /* @__PURE__ */ pe("div", { className: "locationmap-list__date", children: i.date ? new Date(i.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "-" }),
            /* @__PURE__ */ pe($g, { status: i.status })
          ] })
        ]
      },
      i.id
    )) })
  ] });
}
const Lw = ({ client: e, options: t, entity: n }) => {
  const [i, a] = ie.useState("history"), [l, c] = ie.useState([]), [p, m] = ie.useState(!0), [_, y] = ie.useState(null), [v, h] = ie.useState(null), A = (t == null ? void 0 : t.mapHeight) ?? fw, b = (t == null ? void 0 : t.relationName) ?? cw, T = (t == null ? void 0 : t.useMockData) === !0, j = (t == null ? void 0 : t.useMockData) !== !1, S = Ng(n ?? {}, t == null ? void 0 : t.entityId), P = ie.useRef(null), x = ie.useCallback((re) => h(re), []), $ = !p && !_ && l.length > 0;
  if (Pw(P, l, i, x, $), ie.useEffect(() => {
    let re = !1;
    return (async () => {
      try {
        if (m(!0), y(null), T || j && (!e || !S)) {
          await new Promise((Ee) => setTimeout(Ee, 400)), re || c(Op);
          return;
        }
        if (!e || !S) {
          re || y("No entity available. Open Location Map from an entity detail page.");
          return;
        }
        const ce = await ww(e, S, b);
        re || c(ce.length > 0 || !j ? ce : Op);
      } catch (ce) {
        re || y(ce instanceof Error ? ce.message : "Failed to load locations");
      } finally {
        re || m(!1);
      }
    })(), () => {
      re = !0;
    };
  }, [e, S, b, T, j]), p)
    return /* @__PURE__ */ pe("div", { className: "locationmap-state", children: "Loading locations..." });
  if (_)
    return /* @__PURE__ */ pe("div", { className: "locationmap-state locationmap-state--error", children: _ });
  if (l.length === 0)
    return /* @__PURE__ */ pe("div", { className: "locationmap-state", children: "No locations linked to this item yet." });
  const k = n ? lw(aw(n)) : void 0, f = n ? uw(n) : void 0, O = k ? ow[k] : void 0, Z = k ? iw[k] : void 0;
  return /* @__PURE__ */ ft("div", { className: "locationmap-root", style: { minHeight: A, position: "relative" }, children: [
    /* @__PURE__ */ ft("div", { className: "locationmap-toolbar", children: [
      /* @__PURE__ */ ft("div", { className: "locationmap-toolbar__heading", children: [
        /* @__PURE__ */ pe("div", { className: "locationmap-toolbar__title", children: "Location Tracker" }),
        f && O && /* @__PURE__ */ ft("div", { className: "locationmap-toolbar__context", children: [
          /* @__PURE__ */ pe("span", { className: "locationmap-toolbar__entity", children: f }),
          /* @__PURE__ */ pe(
            "span",
            {
              className: "locationmap-toolbar__domain",
              style: Z ? {
                color: Z,
                background: `${Z}18`,
                borderColor: `${Z}44`
              } : void 0,
              children: O
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ pe(xw, { mode: i, onChange: a })
    ] }),
    /* @__PURE__ */ ft("div", { className: "locationmap-body", children: [
      /* @__PURE__ */ pe(Ew, { locations: l, onSelect: x }),
      /* @__PURE__ */ pe("div", { className: "locationmap-map-wrap", style: { minHeight: A - 52 }, children: /* @__PURE__ */ pe("div", { ref: P, className: "locationmap-map" }) })
    ] }),
    /* @__PURE__ */ pe(Sw, { location: v, onClose: () => h(null) })
  ] });
}, Tw = hg.memo(Lw);
function Ow(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const kp = "$$material";
function yt() {
  return yt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        ({}).hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, yt.apply(null, arguments);
}
function xu(e, t) {
  if (e == null)
    return {};
  var n = {};
  for (var i in e)
    if ({}.hasOwnProperty.call(e, i)) {
      if (t.indexOf(i) !== -1)
        continue;
      n[i] = e[i];
    }
  return n;
}
var Cw = !1;
function kw(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function bw(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Mw = /* @__PURE__ */ function() {
  function e(n) {
    var i = this;
    this._insertTag = function(a) {
      var l;
      i.tags.length === 0 ? i.insertionPoint ? l = i.insertionPoint.nextSibling : i.prepend ? l = i.container.firstChild : l = i.before : l = i.tags[i.tags.length - 1].nextSibling, i.container.insertBefore(a, l), i.tags.push(a);
    }, this.isSpeedy = n.speedy === void 0 ? !Cw : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(i) {
    i.forEach(this._insertTag);
  }, t.insert = function(i) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(bw(this));
    var a = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var l = kw(a);
      try {
        l.insertRule(i, l.cssRules.length);
      } catch {
      }
    } else
      a.appendChild(document.createTextNode(i));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(i) {
      var a;
      return (a = i.parentNode) == null ? void 0 : a.removeChild(i);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Tt = "-ms-", Ll = "-moz-", Te = "-webkit-", Ig = "comm", Ed = "rule", Ld = "decl", Aw = "@import", Rg = "@keyframes", zw = "@layer", Nw = Math.abs, Su = String.fromCharCode, $w = Object.assign;
function Iw(e, t) {
  return _t(e, 0) ^ 45 ? (((t << 2 ^ _t(e, 0)) << 2 ^ _t(e, 1)) << 2 ^ _t(e, 2)) << 2 ^ _t(e, 3) : 0;
}
function Bg(e) {
  return e.trim();
}
function Rw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Oe(e, t, n) {
  return e.replace(t, n);
}
function pf(e, t) {
  return e.indexOf(t);
}
function _t(e, t) {
  return e.charCodeAt(t) | 0;
}
function za(e, t, n) {
  return e.slice(t, n);
}
function Zn(e) {
  return e.length;
}
function Td(e) {
  return e.length;
}
function Fs(e, t) {
  return t.push(e), e;
}
function Bw(e, t) {
  return e.map(t).join("");
}
var Eu = 1, Lo = 1, Dg = 0, Gt = 0, et = 0, Do = "";
function Lu(e, t, n, i, a, l, c) {
  return { value: e, root: t, parent: n, type: i, props: a, children: l, line: Eu, column: Lo, length: c, return: "" };
}
function ua(e, t) {
  return $w(Lu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Dw() {
  return et;
}
function jw() {
  return et = Gt > 0 ? _t(Do, --Gt) : 0, Lo--, et === 10 && (Lo = 1, Eu--), et;
}
function en() {
  return et = Gt < Dg ? _t(Do, Gt++) : 0, Lo++, et === 10 && (Lo = 1, Eu++), et;
}
function Wn() {
  return _t(Do, Gt);
}
function al() {
  return Gt;
}
function us(e, t) {
  return za(Do, e, t);
}
function Na(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function jg(e) {
  return Eu = Lo = 1, Dg = Zn(Do = e), Gt = 0, [];
}
function Fg(e) {
  return Do = "", e;
}
function sl(e) {
  return Bg(us(Gt - 1, mf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Fw(e) {
  for (; (et = Wn()) && et < 33; )
    en();
  return Na(e) > 2 || Na(et) > 3 ? "" : " ";
}
function Zw(e, t) {
  for (; --t && en() && !(et < 48 || et > 102 || et > 57 && et < 65 || et > 70 && et < 97); )
    ;
  return us(e, al() + (t < 6 && Wn() == 32 && en() == 32));
}
function mf(e) {
  for (; en(); )
    switch (et) {
      case e:
        return Gt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && mf(et);
        break;
      case 40:
        e === 41 && mf(e);
        break;
      case 92:
        en();
        break;
    }
  return Gt;
}
function Vw(e, t) {
  for (; en() && e + et !== 47 + 10; )
    if (e + et === 42 + 42 && Wn() === 47)
      break;
  return "/*" + us(t, Gt - 1) + "*" + Su(e === 47 ? e : en());
}
function Uw(e) {
  for (; !Na(Wn()); )
    en();
  return us(e, Gt);
}
function Ww(e) {
  return Fg(ll("", null, null, null, [""], e = jg(e), 0, [0], e));
}
function ll(e, t, n, i, a, l, c, p, m) {
  for (var _ = 0, y = 0, v = c, h = 0, A = 0, b = 0, T = 1, j = 1, S = 1, P = 0, x = "", $ = a, k = l, f = i, O = x; j; )
    switch (b = P, P = en()) {
      case 40:
        if (b != 108 && _t(O, v - 1) == 58) {
          pf(O += Oe(sl(P), "&", "&\f"), "&\f") != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += sl(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += Fw(b);
        break;
      case 92:
        O += Zw(al() - 1, 7);
        continue;
      case 47:
        switch (Wn()) {
          case 42:
          case 47:
            Fs(Hw(Vw(en(), al()), t, n), m);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * T:
        p[_++] = Zn(O) * S;
      case 125 * T:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            j = 0;
          case 59 + y:
            S == -1 && (O = Oe(O, /\f/g, "")), A > 0 && Zn(O) - v && Fs(A > 32 ? Mp(O + ";", i, n, v - 1) : Mp(Oe(O, " ", "") + ";", i, n, v - 2), m);
            break;
          case 59:
            O += ";";
          default:
            if (Fs(f = bp(O, t, n, _, y, a, p, x, $ = [], k = [], v), l), P === 123)
              if (y === 0)
                ll(O, t, f, f, $, l, v, p, k);
              else
                switch (h === 99 && _t(O, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ll(e, f, f, i && Fs(bp(e, f, f, 0, 0, a, p, x, a, $ = [], v), k), a, k, v, p, i ? $ : k);
                    break;
                  default:
                    ll(O, f, f, f, [""], k, 0, p, k);
                }
        }
        _ = y = A = 0, T = S = 1, x = O = "", v = c;
        break;
      case 58:
        v = 1 + Zn(O), A = b;
      default:
        if (T < 1) {
          if (P == 123)
            --T;
          else if (P == 125 && T++ == 0 && jw() == 125)
            continue;
        }
        switch (O += Su(P), P * T) {
          case 38:
            S = y > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            p[_++] = (Zn(O) - 1) * S, S = 1;
            break;
          case 64:
            Wn() === 45 && (O += sl(en())), h = Wn(), y = v = Zn(x = O += Uw(al())), P++;
            break;
          case 45:
            b === 45 && Zn(O) == 2 && (T = 0);
        }
    }
  return l;
}
function bp(e, t, n, i, a, l, c, p, m, _, y) {
  for (var v = a - 1, h = a === 0 ? l : [""], A = Td(h), b = 0, T = 0, j = 0; b < i; ++b)
    for (var S = 0, P = za(e, v + 1, v = Nw(T = c[b])), x = e; S < A; ++S)
      (x = Bg(T > 0 ? h[S] + " " + P : Oe(P, /&\f/g, h[S]))) && (m[j++] = x);
  return Lu(e, t, n, a === 0 ? Ed : p, m, _, y);
}
function Hw(e, t, n) {
  return Lu(e, t, n, Ig, Su(Dw()), za(e, 2, -2), 0);
}
function Mp(e, t, n, i) {
  return Lu(e, t, n, Ld, za(e, 0, i), za(e, i + 1, -1), i);
}
function po(e, t) {
  for (var n = "", i = Td(e), a = 0; a < i; a++)
    n += t(e[a], a, e, t) || "";
  return n;
}
function Gw(e, t, n, i) {
  switch (e.type) {
    case zw:
      if (e.children.length)
        break;
    case Aw:
    case Ld:
      return e.return = e.return || e.value;
    case Ig:
      return "";
    case Rg:
      return e.return = e.value + "{" + po(e.children, i) + "}";
    case Ed:
      e.value = e.props.join(",");
  }
  return Zn(n = po(e.children, i)) ? e.return = e.value + "{" + n + "}" : "";
}
function Kw(e) {
  var t = Td(e);
  return function(n, i, a, l) {
    for (var c = "", p = 0; p < t; p++)
      c += e[p](n, i, a, l) || "";
    return c;
  };
}
function Jw(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Zg(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var qw = function(t, n, i) {
  for (var a = 0, l = 0; a = l, l = Wn(), a === 38 && l === 12 && (n[i] = 1), !Na(l); )
    en();
  return us(t, Gt);
}, Yw = function(t, n) {
  var i = -1, a = 44;
  do
    switch (Na(a)) {
      case 0:
        a === 38 && Wn() === 12 && (n[i] = 1), t[i] += qw(Gt - 1, n, i);
        break;
      case 2:
        t[i] += sl(a);
        break;
      case 4:
        if (a === 44) {
          t[++i] = Wn() === 58 ? "&\f" : "", n[i] = t[i].length;
          break;
        }
      default:
        t[i] += Su(a);
    }
  while (a = en());
  return t;
}, Qw = function(t, n) {
  return Fg(Yw(jg(t), n));
}, Ap = /* @__PURE__ */ new WeakMap(), Xw = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, i = t.parent, a = t.column === i.column && t.line === i.line; i.type !== "rule"; )
      if (i = i.parent, !i)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ap.get(i)) && !a) {
      Ap.set(t, !0);
      for (var l = [], c = Qw(n, l), p = i.props, m = 0, _ = 0; m < c.length; m++)
        for (var y = 0; y < p.length; y++, _++)
          t.props[_] = l[m] ? c[m].replace(/&\f/g, p[y]) : p[y] + " " + c[m];
    }
  }
}, eP = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Vg(e, t) {
  switch (Iw(e, t)) {
    case 5103:
      return Te + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Te + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Te + e + Ll + e + Tt + e + e;
    case 6828:
    case 4268:
      return Te + e + Tt + e + e;
    case 6165:
      return Te + e + Tt + "flex-" + e + e;
    case 5187:
      return Te + e + Oe(e, /(\w+).+(:[^]+)/, Te + "box-$1$2" + Tt + "flex-$1$2") + e;
    case 5443:
      return Te + e + Tt + "flex-item-" + Oe(e, /flex-|-self/, "") + e;
    case 4675:
      return Te + e + Tt + "flex-line-pack" + Oe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Te + e + Tt + Oe(e, "shrink", "negative") + e;
    case 5292:
      return Te + e + Tt + Oe(e, "basis", "preferred-size") + e;
    case 6060:
      return Te + "box-" + Oe(e, "-grow", "") + Te + e + Tt + Oe(e, "grow", "positive") + e;
    case 4554:
      return Te + Oe(e, /([^-])(transform)/g, "$1" + Te + "$2") + e;
    case 6187:
      return Oe(Oe(Oe(e, /(zoom-|grab)/, Te + "$1"), /(image-set)/, Te + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Oe(e, /(image-set\([^]*)/, Te + "$1$`$1");
    case 4968:
      return Oe(Oe(e, /(.+:)(flex-)?(.*)/, Te + "box-pack:$3" + Tt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Te + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Oe(e, /(.+)-inline(.+)/, Te + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Zn(e) - 1 - t > 6)
        switch (_t(e, t + 1)) {
          case 109:
            if (_t(e, t + 4) !== 45)
              break;
          case 102:
            return Oe(e, /(.+:)(.+)-([^]+)/, "$1" + Te + "$2-$3$1" + Ll + (_t(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~pf(e, "stretch") ? Vg(Oe(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (_t(e, t + 1) !== 115)
        break;
    case 6444:
      switch (_t(e, Zn(e) - 3 - (~pf(e, "!important") && 10))) {
        case 107:
          return Oe(e, ":", ":" + Te) + e;
        case 101:
          return Oe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Te + (_t(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Te + "$2$3$1" + Tt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (_t(e, t + 11)) {
        case 114:
          return Te + e + Tt + Oe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Te + e + Tt + Oe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Te + e + Tt + Oe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Te + e + Tt + e + e;
  }
  return e;
}
var tP = function(t, n, i, a) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Ld:
        t.return = Vg(t.value, t.length);
        break;
      case Rg:
        return po([ua(t, {
          value: Oe(t.value, "@", "@" + Te)
        })], a);
      case Ed:
        if (t.length)
          return Bw(t.props, function(l) {
            switch (Rw(l, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return po([ua(t, {
                  props: [Oe(l, /:(read-\w+)/, ":" + Ll + "$1")]
                })], a);
              case "::placeholder":
                return po([ua(t, {
                  props: [Oe(l, /:(plac\w+)/, ":" + Te + "input-$1")]
                }), ua(t, {
                  props: [Oe(l, /:(plac\w+)/, ":" + Ll + "$1")]
                }), ua(t, {
                  props: [Oe(l, /:(plac\w+)/, Tt + "input-$1")]
                })], a);
            }
            return "";
          });
    }
}, nP = [tP], rP = function(t) {
  var n = t.key;
  if (n === "css") {
    var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(i, function(T) {
      var j = T.getAttribute("data-emotion");
      j.indexOf(" ") !== -1 && (document.head.appendChild(T), T.setAttribute("data-s", ""));
    });
  }
  var a = t.stylisPlugins || nP, l = {}, c, p = [];
  c = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(T) {
      for (var j = T.getAttribute("data-emotion").split(" "), S = 1; S < j.length; S++)
        l[j[S]] = !0;
      p.push(T);
    }
  );
  var m, _ = [Xw, eP];
  {
    var y, v = [Gw, Jw(function(T) {
      y.insert(T);
    })], h = Kw(_.concat(a, v)), A = function(j) {
      return po(Ww(j), h);
    };
    m = function(j, S, P, x) {
      y = P, A(j ? j + "{" + S.styles + "}" : S.styles), x && (b.inserted[S.name] = !0);
    };
  }
  var b = {
    key: n,
    sheet: new Mw({
      key: n,
      container: c,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: l,
    registered: {},
    insert: m
  };
  return b.sheet.hydrate(p), b;
}, Ug = { exports: {} }, Me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mt = typeof Symbol == "function" && Symbol.for, Od = mt ? Symbol.for("react.element") : 60103, Cd = mt ? Symbol.for("react.portal") : 60106, Tu = mt ? Symbol.for("react.fragment") : 60107, Ou = mt ? Symbol.for("react.strict_mode") : 60108, Cu = mt ? Symbol.for("react.profiler") : 60114, ku = mt ? Symbol.for("react.provider") : 60109, bu = mt ? Symbol.for("react.context") : 60110, kd = mt ? Symbol.for("react.async_mode") : 60111, Mu = mt ? Symbol.for("react.concurrent_mode") : 60111, Au = mt ? Symbol.for("react.forward_ref") : 60112, zu = mt ? Symbol.for("react.suspense") : 60113, iP = mt ? Symbol.for("react.suspense_list") : 60120, Nu = mt ? Symbol.for("react.memo") : 60115, $u = mt ? Symbol.for("react.lazy") : 60116, oP = mt ? Symbol.for("react.block") : 60121, aP = mt ? Symbol.for("react.fundamental") : 60117, sP = mt ? Symbol.for("react.responder") : 60118, lP = mt ? Symbol.for("react.scope") : 60119;
function rn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Od:
        switch (e = e.type, e) {
          case kd:
          case Mu:
          case Tu:
          case Cu:
          case Ou:
          case zu:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case bu:
              case Au:
              case $u:
              case Nu:
              case ku:
                return e;
              default:
                return t;
            }
        }
      case Cd:
        return t;
    }
  }
}
function Wg(e) {
  return rn(e) === Mu;
}
Me.AsyncMode = kd;
Me.ConcurrentMode = Mu;
Me.ContextConsumer = bu;
Me.ContextProvider = ku;
Me.Element = Od;
Me.ForwardRef = Au;
Me.Fragment = Tu;
Me.Lazy = $u;
Me.Memo = Nu;
Me.Portal = Cd;
Me.Profiler = Cu;
Me.StrictMode = Ou;
Me.Suspense = zu;
Me.isAsyncMode = function(e) {
  return Wg(e) || rn(e) === kd;
};
Me.isConcurrentMode = Wg;
Me.isContextConsumer = function(e) {
  return rn(e) === bu;
};
Me.isContextProvider = function(e) {
  return rn(e) === ku;
};
Me.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Od;
};
Me.isForwardRef = function(e) {
  return rn(e) === Au;
};
Me.isFragment = function(e) {
  return rn(e) === Tu;
};
Me.isLazy = function(e) {
  return rn(e) === $u;
};
Me.isMemo = function(e) {
  return rn(e) === Nu;
};
Me.isPortal = function(e) {
  return rn(e) === Cd;
};
Me.isProfiler = function(e) {
  return rn(e) === Cu;
};
Me.isStrictMode = function(e) {
  return rn(e) === Ou;
};
Me.isSuspense = function(e) {
  return rn(e) === zu;
};
Me.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Tu || e === Mu || e === Cu || e === Ou || e === zu || e === iP || typeof e == "object" && e !== null && (e.$$typeof === $u || e.$$typeof === Nu || e.$$typeof === ku || e.$$typeof === bu || e.$$typeof === Au || e.$$typeof === aP || e.$$typeof === sP || e.$$typeof === lP || e.$$typeof === oP);
};
Me.typeOf = rn;
Ug.exports = Me;
var uP = Ug.exports, Hg = uP, cP = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, fP = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Gg = {};
Gg[Hg.ForwardRef] = cP;
Gg[Hg.Memo] = fP;
var dP = !0;
function Kg(e, t, n) {
  var i = "";
  return n.split(" ").forEach(function(a) {
    e[a] !== void 0 ? t.push(e[a] + ";") : a && (i += a + " ");
  }), i;
}
var bd = function(t, n, i) {
  var a = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (i === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  dP === !1) && t.registered[a] === void 0 && (t.registered[a] = n.styles);
}, Md = function(t, n, i) {
  bd(t, n, i);
  var a = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var l = n;
    do
      t.insert(n === l ? "." + a : "", l, t.sheet, !0), l = l.next;
    while (l !== void 0);
  }
};
function hP(e) {
  for (var t = 0, n, i = 0, a = e.length; a >= 4; ++i, a -= 4)
    n = e.charCodeAt(i) & 255 | (e.charCodeAt(++i) & 255) << 8 | (e.charCodeAt(++i) & 255) << 16 | (e.charCodeAt(++i) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(i + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(i + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(i) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var pP = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, mP = !1, gP = /[A-Z]|^ms/g, _P = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Jg = function(t) {
  return t.charCodeAt(1) === 45;
}, zp = function(t) {
  return t != null && typeof t != "boolean";
}, Mc = /* @__PURE__ */ Zg(function(e) {
  return Jg(e) ? e : e.replace(gP, "-$&").toLowerCase();
}), Np = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(_P, function(i, a, l) {
          return Vn = {
            name: a,
            styles: l,
            next: Vn
          }, a;
        });
  }
  return pP[t] !== 1 && !Jg(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, yP = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function $a(e, t, n) {
  if (n == null)
    return "";
  var i = n;
  if (i.__emotion_styles !== void 0)
    return i;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var a = n;
      if (a.anim === 1)
        return Vn = {
          name: a.name,
          styles: a.styles,
          next: Vn
        }, a.name;
      var l = n;
      if (l.styles !== void 0) {
        var c = l.next;
        if (c !== void 0)
          for (; c !== void 0; )
            Vn = {
              name: c.name,
              styles: c.styles,
              next: Vn
            }, c = c.next;
        var p = l.styles + ";";
        return p;
      }
      return vP(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var m = Vn, _ = n(e);
        return Vn = m, $a(e, t, _);
      }
      break;
    }
  }
  var y = n;
  if (t == null)
    return y;
  var v = t[y];
  return v !== void 0 ? v : y;
}
function vP(e, t, n) {
  var i = "";
  if (Array.isArray(n))
    for (var a = 0; a < n.length; a++)
      i += $a(e, t, n[a]) + ";";
  else
    for (var l in n) {
      var c = n[l];
      if (typeof c != "object") {
        var p = c;
        t != null && t[p] !== void 0 ? i += l + "{" + t[p] + "}" : zp(p) && (i += Mc(l) + ":" + Np(l, p) + ";");
      } else {
        if (l === "NO_COMPONENT_SELECTOR" && mP)
          throw new Error(yP);
        if (Array.isArray(c) && typeof c[0] == "string" && (t == null || t[c[0]] === void 0))
          for (var m = 0; m < c.length; m++)
            zp(c[m]) && (i += Mc(l) + ":" + Np(l, c[m]) + ";");
        else {
          var _ = $a(e, t, c);
          switch (l) {
            case "animation":
            case "animationName": {
              i += Mc(l) + ":" + _ + ";";
              break;
            }
            default:
              i += l + "{" + _ + "}";
          }
        }
      }
    }
  return i;
}
var $p = /label:\s*([^\s;{]+)\s*(;|$)/g, Vn;
function Iu(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var i = !0, a = "";
  Vn = void 0;
  var l = e[0];
  if (l == null || l.raw === void 0)
    i = !1, a += $a(n, t, l);
  else {
    var c = l;
    a += c[0];
  }
  for (var p = 1; p < e.length; p++)
    if (a += $a(n, t, e[p]), i) {
      var m = l;
      a += m[p];
    }
  $p.lastIndex = 0;
  for (var _ = "", y; (y = $p.exec(a)) !== null; )
    _ += "-" + y[1];
  var v = hP(a) + _;
  return {
    name: v,
    styles: a,
    next: Vn
  };
}
var wP = function(t) {
  return t();
}, qg = af["useInsertionEffect"] ? af["useInsertionEffect"] : !1, Yg = qg || wP, Ip = qg || ie.useLayoutEffect, PP = !1, Qg = /* @__PURE__ */ ie.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ rP({
    key: "css"
  }) : null
);
Qg.Provider;
var Ad = function(t) {
  return /* @__PURE__ */ ie.forwardRef(function(n, i) {
    var a = ie.useContext(Qg);
    return t(n, a, i);
  });
}, cs = /* @__PURE__ */ ie.createContext({}), zd = {}.hasOwnProperty, gf = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", xP = function(t, n) {
  var i = {};
  for (var a in n)
    zd.call(n, a) && (i[a] = n[a]);
  return i[gf] = t, i;
}, SP = function(t) {
  var n = t.cache, i = t.serialized, a = t.isStringTag;
  return bd(n, i, a), Yg(function() {
    return Md(n, i, a);
  }), null;
}, EP = /* @__PURE__ */ Ad(function(e, t, n) {
  var i = e.css;
  typeof i == "string" && t.registered[i] !== void 0 && (i = t.registered[i]);
  var a = e[gf], l = [i], c = "";
  typeof e.className == "string" ? c = Kg(t.registered, l, e.className) : e.className != null && (c = e.className + " ");
  var p = Iu(l, void 0, ie.useContext(cs));
  c += t.key + "-" + p.name;
  var m = {};
  for (var _ in e)
    zd.call(e, _) && _ !== "css" && _ !== gf && !PP && (m[_] = e[_]);
  return m.className = c, n && (m.ref = n), /* @__PURE__ */ ie.createElement(ie.Fragment, null, /* @__PURE__ */ ie.createElement(SP, {
    cache: t,
    serialized: p,
    isStringTag: typeof a == "string"
  }), /* @__PURE__ */ ie.createElement(a, m));
}), LP = EP, Ac = { exports: {} }, Rp;
function TP() {
  return Rp || (Rp = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(n) {
        for (var i = 1; i < arguments.length; i++) {
          var a = arguments[i];
          for (var l in a)
            ({}).hasOwnProperty.call(a, l) && (n[l] = a[l]);
        }
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Ac)), Ac.exports;
}
TP();
var Bp = function(t, n) {
  var i = arguments;
  if (n == null || !zd.call(n, "css"))
    return ie.createElement.apply(void 0, i);
  var a = i.length, l = new Array(a);
  l[0] = LP, l[1] = xP(t, n);
  for (var c = 2; c < a; c++)
    l[c] = i[c];
  return ie.createElement.apply(null, l);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Bp || (Bp = {}));
var OP = /* @__PURE__ */ Ad(function(e, t) {
  var n = e.styles, i = Iu([n], void 0, ie.useContext(cs)), a = ie.useRef();
  return Ip(function() {
    var l = t.key + "-global", c = new t.sheet.constructor({
      key: l,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), p = !1, m = document.querySelector('style[data-emotion="' + l + " " + i.name + '"]');
    return t.sheet.tags.length && (c.before = t.sheet.tags[0]), m !== null && (p = !0, m.setAttribute("data-emotion", l), c.hydrate([m])), a.current = [c, p], function() {
      c.flush();
    };
  }, [t]), Ip(function() {
    var l = a.current, c = l[0], p = l[1];
    if (p) {
      l[1] = !1;
      return;
    }
    if (i.next !== void 0 && Md(t, i.next, !0), c.tags.length) {
      var m = c.tags[c.tags.length - 1].nextElementSibling;
      c.before = m, c.flush();
    }
    t.insert("", i, c, !1);
  }, [t, i.name]), null;
}), CP = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, kP = /* @__PURE__ */ Zg(
  function(e) {
    return CP.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), bP = !1, MP = kP, AP = function(t) {
  return t !== "theme";
}, Dp = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? MP : AP;
}, jp = function(t, n, i) {
  var a;
  if (n) {
    var l = n.shouldForwardProp;
    a = t.__emotion_forwardProp && l ? function(c) {
      return t.__emotion_forwardProp(c) && l(c);
    } : l;
  }
  return typeof a != "function" && i && (a = t.__emotion_forwardProp), a;
}, zP = function(t) {
  var n = t.cache, i = t.serialized, a = t.isStringTag;
  return bd(n, i, a), Yg(function() {
    return Md(n, i, a);
  }), null;
}, NP = function e(t, n) {
  var i = t.__emotion_real === t, a = i && t.__emotion_base || t, l, c;
  n !== void 0 && (l = n.label, c = n.target);
  var p = jp(t, n, i), m = p || Dp(a), _ = !m("as");
  return function() {
    var y = arguments, v = i && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (l !== void 0 && v.push("label:" + l + ";"), y[0] == null || y[0].raw === void 0)
      v.push.apply(v, y);
    else {
      var h = y[0];
      v.push(h[0]);
      for (var A = y.length, b = 1; b < A; b++)
        v.push(y[b], h[b]);
    }
    var T = Ad(function(j, S, P) {
      var x = _ && j.as || a, $ = "", k = [], f = j;
      if (j.theme == null) {
        f = {};
        for (var O in j)
          f[O] = j[O];
        f.theme = ie.useContext(cs);
      }
      typeof j.className == "string" ? $ = Kg(S.registered, k, j.className) : j.className != null && ($ = j.className + " ");
      var Z = Iu(v.concat(k), S.registered, f);
      $ += S.key + "-" + Z.name, c !== void 0 && ($ += " " + c);
      var re = _ && p === void 0 ? Dp(x) : m, Y = {};
      for (var ce in j)
        _ && ce === "as" || re(ce) && (Y[ce] = j[ce]);
      return Y.className = $, P && (Y.ref = P), /* @__PURE__ */ ie.createElement(ie.Fragment, null, /* @__PURE__ */ ie.createElement(zP, {
        cache: S,
        serialized: Z,
        isStringTag: typeof x == "string"
      }), /* @__PURE__ */ ie.createElement(x, Y));
    });
    return T.displayName = l !== void 0 ? l : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", T.defaultProps = t.defaultProps, T.__emotion_real = T, T.__emotion_base = a, T.__emotion_styles = v, T.__emotion_forwardProp = p, Object.defineProperty(T, "toString", {
      value: function() {
        return c === void 0 && bP ? "NO_COMPONENT_SELECTOR" : "." + c;
      }
    }), T.withComponent = function(j, S) {
      var P = e(j, yt({}, n, S, {
        shouldForwardProp: jp(T, S, !0)
      }));
      return P.apply(void 0, v);
    }, T;
  };
}, $P = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Fp = NP.bind(null);
$P.forEach(function(e) {
  Fp[e] = Fp(e);
});
function IP(e) {
  return e == null || Object.keys(e).length === 0;
}
function RP(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ pe(OP, {
    styles: typeof t == "function" ? (a) => t(IP(a) ? n : a) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Zp = [];
function BP(e) {
  return Zp[0] = e, Iu(Zp);
}
function Yi(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Xg(e) {
  if (/* @__PURE__ */ ie.isValidElement(e) || !Yi(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Xg(e[n]);
  }), t;
}
function Tl(e, t, n = {
  clone: !0
}) {
  const i = n.clone ? yt({}, e) : e;
  return Yi(e) && Yi(t) && Object.keys(t).forEach((a) => {
    /* @__PURE__ */ ie.isValidElement(t[a]) ? i[a] = t[a] : Yi(t[a]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, a) && Yi(e[a]) ? i[a] = Tl(e[a], t[a], n) : n.clone ? i[a] = Yi(t[a]) ? Xg(t[a]) : t[a] : i[a] = t[a];
  }), i;
}
const DP = ["values", "unit", "step"], jP = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, i) => n.val - i.val), t.reduce((n, i) => yt({}, n, {
    [i.key]: i.val
  }), {});
};
function FP(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: i = 5
  } = e, a = xu(e, DP), l = jP(t), c = Object.keys(l);
  function p(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function m(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - i / 100}${n})`;
  }
  function _(h, A) {
    const b = c.indexOf(A);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(b !== -1 && typeof t[c[b]] == "number" ? t[c[b]] : A) - i / 100}${n})`;
  }
  function y(h) {
    return c.indexOf(h) + 1 < c.length ? _(h, c[c.indexOf(h) + 1]) : p(h);
  }
  function v(h) {
    const A = c.indexOf(h);
    return A === 0 ? p(c[1]) : A === c.length - 1 ? m(c[A]) : _(h, c[c.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return yt({
    keys: c,
    values: l,
    up: p,
    down: m,
    between: _,
    only: y,
    not: v,
    unit: n
  }, a);
}
const ZP = {
  borderRadius: 4
}, VP = ZP;
function Sa(e, t) {
  return t ? Tl(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Nd = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Vp = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Nd[e]}px)`
};
function cr(e, t, n) {
  const i = e.theme || {};
  if (Array.isArray(t)) {
    const l = i.breakpoints || Vp;
    return t.reduce((c, p, m) => (c[l.up(l.keys[m])] = n(t[m]), c), {});
  }
  if (typeof t == "object") {
    const l = i.breakpoints || Vp;
    return Object.keys(t).reduce((c, p) => {
      if (Object.keys(l.values || Nd).indexOf(p) !== -1) {
        const m = l.up(p);
        c[m] = n(t[p], p);
      } else {
        const m = p;
        c[m] = t[m];
      }
      return c;
    }, {});
  }
  return n(t);
}
function UP(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((i, a) => {
    const l = e.up(a);
    return i[l] = {}, i;
  }, {})) || {};
}
function Up(e, t) {
  return e.reduce((n, i) => {
    const a = n[i];
    return (!a || Object.keys(a).length === 0) && delete n[i], n;
  }, t);
}
function e_(e) {
  if (typeof e != "string")
    throw new Error(Ow(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ru(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const i = `vars.${t}`.split(".").reduce((a, l) => a && a[l] ? a[l] : null, e);
    if (i != null)
      return i;
  }
  return t.split(".").reduce((i, a) => i && i[a] != null ? i[a] : null, e);
}
function Ol(e, t, n, i = n) {
  let a;
  return typeof e == "function" ? a = e(n) : Array.isArray(e) ? a = e[n] || i : a = Ru(e, n) || i, t && (a = t(a, i, e)), a;
}
function Ye(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: i,
    transform: a
  } = e, l = (c) => {
    if (c[t] == null)
      return null;
    const p = c[t], m = c.theme, _ = Ru(m, i) || {};
    return cr(c, p, (v) => {
      let h = Ol(_, a, v);
      return v === h && typeof v == "string" && (h = Ol(_, a, `${t}${v === "default" ? "" : e_(v)}`, v)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return l.propTypes = {}, l.filterProps = [t], l;
}
function WP(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const HP = {
  m: "margin",
  p: "padding"
}, GP = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Wp = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, KP = WP((e) => {
  if (e.length > 2)
    if (Wp[e])
      e = Wp[e];
    else
      return [e];
  const [t, n] = e.split(""), i = HP[t], a = GP[n] || "";
  return Array.isArray(a) ? a.map((l) => i + l) : [i + a];
}), $d = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Id = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...$d, ...Id];
function fs(e, t, n, i) {
  var a;
  const l = (a = Ru(e, t, !1)) != null ? a : n;
  return typeof l == "number" ? (c) => typeof c == "string" ? c : l * c : Array.isArray(l) ? (c) => typeof c == "string" ? c : l[c] : typeof l == "function" ? l : () => {
  };
}
function t_(e) {
  return fs(e, "spacing", 8);
}
function ds(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), i = e(n);
  return t >= 0 ? i : typeof i == "number" ? -i : `-${i}`;
}
function JP(e, t) {
  return (n) => e.reduce((i, a) => (i[a] = ds(t, n), i), {});
}
function qP(e, t, n, i) {
  if (t.indexOf(n) === -1)
    return null;
  const a = KP(n), l = JP(a, i), c = e[n];
  return cr(e, c, l);
}
function n_(e, t) {
  const n = t_(e.theme);
  return Object.keys(e).map((i) => qP(e, t, i, n)).reduce(Sa, {});
}
function Ge(e) {
  return n_(e, $d);
}
Ge.propTypes = {};
Ge.filterProps = $d;
function Ke(e) {
  return n_(e, Id);
}
Ke.propTypes = {};
Ke.filterProps = Id;
function YP(e = 8) {
  if (e.mui)
    return e;
  const t = t_({
    spacing: e
  }), n = (...i) => (i.length === 0 ? [1] : i).map((l) => {
    const c = t(l);
    return typeof c == "number" ? `${c}px` : c;
  }).join(" ");
  return n.mui = !0, n;
}
function Bu(...e) {
  const t = e.reduce((i, a) => (a.filterProps.forEach((l) => {
    i[l] = a;
  }), i), {}), n = (i) => Object.keys(i).reduce((a, l) => t[l] ? Sa(a, t[l](i)) : a, {});
  return n.propTypes = {}, n.filterProps = e.reduce((i, a) => i.concat(a.filterProps), []), n;
}
function pn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function xn(e, t) {
  return Ye({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const QP = xn("border", pn), XP = xn("borderTop", pn), ex = xn("borderRight", pn), tx = xn("borderBottom", pn), nx = xn("borderLeft", pn), rx = xn("borderColor"), ix = xn("borderTopColor"), ox = xn("borderRightColor"), ax = xn("borderBottomColor"), sx = xn("borderLeftColor"), lx = xn("outline", pn), ux = xn("outlineColor"), Du = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = fs(e.theme, "shape.borderRadius", 4), n = (i) => ({
      borderRadius: ds(t, i)
    });
    return cr(e, e.borderRadius, n);
  }
  return null;
};
Du.propTypes = {};
Du.filterProps = ["borderRadius"];
Bu(QP, XP, ex, tx, nx, rx, ix, ox, ax, sx, Du, lx, ux);
const ju = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = fs(e.theme, "spacing", 8), n = (i) => ({
      gap: ds(t, i)
    });
    return cr(e, e.gap, n);
  }
  return null;
};
ju.propTypes = {};
ju.filterProps = ["gap"];
const Fu = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = fs(e.theme, "spacing", 8), n = (i) => ({
      columnGap: ds(t, i)
    });
    return cr(e, e.columnGap, n);
  }
  return null;
};
Fu.propTypes = {};
Fu.filterProps = ["columnGap"];
const Zu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = fs(e.theme, "spacing", 8), n = (i) => ({
      rowGap: ds(t, i)
    });
    return cr(e, e.rowGap, n);
  }
  return null;
};
Zu.propTypes = {};
Zu.filterProps = ["rowGap"];
const cx = Ye({
  prop: "gridColumn"
}), fx = Ye({
  prop: "gridRow"
}), dx = Ye({
  prop: "gridAutoFlow"
}), hx = Ye({
  prop: "gridAutoColumns"
}), px = Ye({
  prop: "gridAutoRows"
}), mx = Ye({
  prop: "gridTemplateColumns"
}), gx = Ye({
  prop: "gridTemplateRows"
}), _x = Ye({
  prop: "gridTemplateAreas"
}), yx = Ye({
  prop: "gridArea"
});
Bu(ju, Fu, Zu, cx, fx, dx, hx, px, mx, gx, _x, yx);
function mo(e, t) {
  return t === "grey" ? t : e;
}
const vx = Ye({
  prop: "color",
  themeKey: "palette",
  transform: mo
}), wx = Ye({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: mo
}), Px = Ye({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: mo
});
Bu(vx, wx, Px);
function Qt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const xx = Ye({
  prop: "width",
  transform: Qt
}), Rd = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var i, a;
      const l = ((i = e.theme) == null || (i = i.breakpoints) == null || (i = i.values) == null ? void 0 : i[n]) || Nd[n];
      return l ? ((a = e.theme) == null || (a = a.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${l}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: l
      } : {
        maxWidth: Qt(n)
      };
    };
    return cr(e, e.maxWidth, t);
  }
  return null;
};
Rd.filterProps = ["maxWidth"];
const Sx = Ye({
  prop: "minWidth",
  transform: Qt
}), Ex = Ye({
  prop: "height",
  transform: Qt
}), Lx = Ye({
  prop: "maxHeight",
  transform: Qt
}), Tx = Ye({
  prop: "minHeight",
  transform: Qt
});
Ye({
  prop: "size",
  cssProperty: "width",
  transform: Qt
});
Ye({
  prop: "size",
  cssProperty: "height",
  transform: Qt
});
const Ox = Ye({
  prop: "boxSizing"
});
Bu(xx, Rd, Sx, Ex, Lx, Tx, Ox);
const Cx = {
  // borders
  border: {
    themeKey: "borders",
    transform: pn
  },
  borderTop: {
    themeKey: "borders",
    transform: pn
  },
  borderRight: {
    themeKey: "borders",
    transform: pn
  },
  borderBottom: {
    themeKey: "borders",
    transform: pn
  },
  borderLeft: {
    themeKey: "borders",
    transform: pn
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: pn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Du
  },
  // palette
  color: {
    themeKey: "palette",
    transform: mo
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: mo
  },
  backgroundColor: {
    themeKey: "palette",
    transform: mo
  },
  // spacing
  p: {
    style: Ke
  },
  pt: {
    style: Ke
  },
  pr: {
    style: Ke
  },
  pb: {
    style: Ke
  },
  pl: {
    style: Ke
  },
  px: {
    style: Ke
  },
  py: {
    style: Ke
  },
  padding: {
    style: Ke
  },
  paddingTop: {
    style: Ke
  },
  paddingRight: {
    style: Ke
  },
  paddingBottom: {
    style: Ke
  },
  paddingLeft: {
    style: Ke
  },
  paddingX: {
    style: Ke
  },
  paddingY: {
    style: Ke
  },
  paddingInline: {
    style: Ke
  },
  paddingInlineStart: {
    style: Ke
  },
  paddingInlineEnd: {
    style: Ke
  },
  paddingBlock: {
    style: Ke
  },
  paddingBlockStart: {
    style: Ke
  },
  paddingBlockEnd: {
    style: Ke
  },
  m: {
    style: Ge
  },
  mt: {
    style: Ge
  },
  mr: {
    style: Ge
  },
  mb: {
    style: Ge
  },
  ml: {
    style: Ge
  },
  mx: {
    style: Ge
  },
  my: {
    style: Ge
  },
  margin: {
    style: Ge
  },
  marginTop: {
    style: Ge
  },
  marginRight: {
    style: Ge
  },
  marginBottom: {
    style: Ge
  },
  marginLeft: {
    style: Ge
  },
  marginX: {
    style: Ge
  },
  marginY: {
    style: Ge
  },
  marginInline: {
    style: Ge
  },
  marginInlineStart: {
    style: Ge
  },
  marginInlineEnd: {
    style: Ge
  },
  marginBlock: {
    style: Ge
  },
  marginBlockStart: {
    style: Ge
  },
  marginBlockEnd: {
    style: Ge
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: ju
  },
  rowGap: {
    style: Zu
  },
  columnGap: {
    style: Fu
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Qt
  },
  maxWidth: {
    style: Rd
  },
  minWidth: {
    transform: Qt
  },
  height: {
    transform: Qt
  },
  maxHeight: {
    transform: Qt
  },
  minHeight: {
    transform: Qt
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, r_ = Cx;
function kx(...e) {
  const t = e.reduce((i, a) => i.concat(Object.keys(a)), []), n = new Set(t);
  return e.every((i) => n.size === Object.keys(i).length);
}
function bx(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mx() {
  function e(n, i, a, l) {
    const c = {
      [n]: i,
      theme: a
    }, p = l[n];
    if (!p)
      return {
        [n]: i
      };
    const {
      cssProperty: m = n,
      themeKey: _,
      transform: y,
      style: v
    } = p;
    if (i == null)
      return null;
    if (_ === "typography" && i === "inherit")
      return {
        [n]: i
      };
    const h = Ru(a, _) || {};
    return v ? v(c) : cr(c, i, (b) => {
      let T = Ol(h, y, b);
      return b === T && typeof b == "string" && (T = Ol(h, y, `${n}${b === "default" ? "" : e_(b)}`, b)), m === !1 ? T : {
        [m]: T
      };
    });
  }
  function t(n) {
    var i;
    const {
      sx: a,
      theme: l = {},
      nested: c
    } = n || {};
    if (!a)
      return null;
    const p = (i = l.unstable_sxConfig) != null ? i : r_;
    function m(_) {
      let y = _;
      if (typeof _ == "function")
        y = _(l);
      else if (typeof _ != "object")
        return _;
      if (!y)
        return null;
      const v = UP(l.breakpoints), h = Object.keys(v);
      let A = v;
      return Object.keys(y).forEach((b) => {
        const T = bx(y[b], l);
        if (T != null)
          if (typeof T == "object")
            if (p[b])
              A = Sa(A, e(b, T, l, p));
            else {
              const j = cr({
                theme: l
              }, T, (S) => ({
                [b]: S
              }));
              kx(j, T) ? A[b] = t({
                sx: T,
                theme: l,
                nested: !0
              }) : A = Sa(A, j);
            }
          else
            A = Sa(A, e(b, T, l, p));
      }), !c && l.modularCssLayers ? {
        "@layer sx": Up(h, A)
      } : Up(h, A);
    }
    return Array.isArray(a) ? a.map(m) : m(a);
  }
  return t;
}
const i_ = Mx();
i_.filterProps = ["sx"];
const Ax = i_;
function zx(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Nx = ["breakpoints", "palette", "spacing", "shape"];
function $x(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: i = {},
    spacing: a,
    shape: l = {}
  } = e, c = xu(e, Nx), p = FP(n), m = YP(a);
  let _ = Tl({
    breakpoints: p,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: yt({
      mode: "light"
    }, i),
    spacing: m,
    shape: yt({}, VP, l)
  }, c);
  return _.applyStyles = zx, _ = t.reduce((y, v) => Tl(y, v), _), _.unstable_sxConfig = yt({}, r_, c == null ? void 0 : c.unstable_sxConfig), _.unstable_sx = function(v) {
    return Ax({
      sx: v,
      theme: this
    });
  }, _;
}
function Ix(e) {
  return Object.keys(e).length === 0;
}
function Bd(e = null) {
  const t = ie.useContext(cs);
  return !t || Ix(t) ? e : t;
}
const Rx = $x();
function Bx(e = Rx) {
  return Bd(e);
}
function zc(e) {
  const t = BP(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Dx({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const i = Bx(n), a = t && i[t] || i;
  let l = typeof e == "function" ? e(a) : e;
  return a.modularCssLayers && (Array.isArray(l) ? l = l.map((c) => zc(typeof c == "function" ? c(a) : c)) : l = zc(l)), /* @__PURE__ */ pe(RP, {
    styles: l
  });
}
const jx = typeof window < "u" ? ie.useLayoutEffect : ie.useEffect, Fx = jx;
let Hp = 0;
function Zx(e) {
  const [t, n] = ie.useState(e), i = e || t;
  return ie.useEffect(() => {
    t == null && (Hp += 1, n(`mui-${Hp}`));
  }, [t]), i;
}
const Gp = af["useId".toString()];
function Vx(e) {
  if (Gp !== void 0) {
    const t = Gp();
    return e ?? t;
  }
  return Zx(e);
}
const Ux = /* @__PURE__ */ ie.createContext(null), o_ = Ux;
function a_() {
  return ie.useContext(o_);
}
const Wx = typeof Symbol == "function" && Symbol.for, Hx = Wx ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Gx(e, t) {
  return typeof t == "function" ? t(e) : yt({}, e, t);
}
function Kx(e) {
  const {
    children: t,
    theme: n
  } = e, i = a_(), a = ie.useMemo(() => {
    const l = i === null ? n : Gx(i, n);
    return l != null && (l[Hx] = i !== null), l;
  }, [n, i]);
  return /* @__PURE__ */ pe(o_.Provider, {
    value: a,
    children: t
  });
}
const Jx = ["value"], qx = /* @__PURE__ */ ie.createContext();
function Yx(e) {
  let {
    value: t
  } = e, n = xu(e, Jx);
  return /* @__PURE__ */ pe(qx.Provider, yt({
    value: t ?? !0
  }, n));
}
const Qx = /* @__PURE__ */ ie.createContext(void 0);
function Xx({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ pe(Qx.Provider, {
    value: e,
    children: t
  });
}
function eS(e) {
  const t = Bd(), n = Vx() || "", {
    modularCssLayers: i
  } = e;
  let a = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !i || t !== null ? a = "" : typeof i == "string" ? a = i.replace(/mui(?!\.)/g, a) : a = `@layer ${a};`, Fx(() => {
    const l = document.querySelector("head");
    if (!l)
      return;
    const c = l.firstChild;
    if (a) {
      var p;
      if (c && (p = c.hasAttribute) != null && p.call(c, "data-mui-layer-order") && c.getAttribute("data-mui-layer-order") === n)
        return;
      const _ = document.createElement("style");
      _.setAttribute("data-mui-layer-order", n), _.textContent = a, l.prepend(_);
    } else {
      var m;
      (m = l.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || m.remove();
    }
  }, [a, n]), a ? /* @__PURE__ */ pe(Dx, {
    styles: a
  }) : null;
}
const Kp = {};
function Jp(e, t, n, i = !1) {
  return ie.useMemo(() => {
    const a = e && t[e] || t;
    if (typeof n == "function") {
      const l = n(a), c = e ? yt({}, t, {
        [e]: l
      }) : l;
      return i ? () => c : c;
    }
    return e ? yt({}, t, {
      [e]: n
    }) : yt({}, t, n);
  }, [e, t, n, i]);
}
function tS(e) {
  const {
    children: t,
    theme: n,
    themeId: i
  } = e, a = Bd(Kp), l = a_() || Kp, c = Jp(i, a, n), p = Jp(i, l, n, !0), m = c.direction === "rtl", _ = eS(c);
  return /* @__PURE__ */ pe(Kx, {
    theme: p,
    children: /* @__PURE__ */ pe(cs.Provider, {
      value: c,
      children: /* @__PURE__ */ pe(Yx, {
        value: m,
        children: /* @__PURE__ */ ft(Xx, {
          value: c == null ? void 0 : c.components,
          children: [_, t]
        })
      })
    })
  });
}
const nS = ["theme"];
function rS(e) {
  let {
    theme: t
  } = e, n = xu(e, nS);
  const i = t[kp];
  let a = i || t;
  return typeof t != "function" && (i && !i.vars ? a = yt({}, i, {
    vars: null
  }) : t && !t.vars && (a = yt({}, t, {
    vars: null
  }))), /* @__PURE__ */ pe(tS, yt({}, n, {
    themeId: i ? kp : void 0,
    theme: a
  }));
}
var s_ = { exports: {} }, on = {}, l_ = { exports: {} }, u_ = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(R, oe) {
    var U = R.length;
    R.push(oe);
    e:
      for (; 0 < U; ) {
        var K = U - 1 >>> 1, me = R[K];
        if (0 < a(me, oe))
          R[K] = oe, R[U] = me, U = K;
        else
          break e;
      }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function i(R) {
    if (R.length === 0)
      return null;
    var oe = R[0], U = R.pop();
    if (U !== oe) {
      R[0] = U;
      e:
        for (var K = 0, me = R.length, De = me >>> 1; K < De; ) {
          var ae = 2 * (K + 1) - 1, Q = R[ae], le = ae + 1, lt = R[le];
          if (0 > a(Q, U))
            le < me && 0 > a(lt, Q) ? (R[K] = lt, R[le] = U, K = le) : (R[K] = Q, R[ae] = U, K = ae);
          else if (le < me && 0 > a(lt, U))
            R[K] = lt, R[le] = U, K = le;
          else
            break e;
        }
    }
    return oe;
  }
  function a(R, oe) {
    var U = R.sortIndex - oe.sortIndex;
    return U !== 0 ? U : R.id - oe.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function() {
      return l.now();
    };
  } else {
    var c = Date, p = c.now();
    e.unstable_now = function() {
      return c.now() - p;
    };
  }
  var m = [], _ = [], y = 1, v = null, h = 3, A = !1, b = !1, T = !1, j = typeof setTimeout == "function" ? setTimeout : null, S = typeof clearTimeout == "function" ? clearTimeout : null, P = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(R) {
    for (var oe = n(_); oe !== null; ) {
      if (oe.callback === null)
        i(_);
      else if (oe.startTime <= R)
        i(_), oe.sortIndex = oe.expirationTime, t(m, oe);
      else
        break;
      oe = n(_);
    }
  }
  function $(R) {
    if (T = !1, x(R), !b)
      if (n(m) !== null)
        b = !0, Ue(k);
      else {
        var oe = n(_);
        oe !== null && It($, oe.startTime - R);
      }
  }
  function k(R, oe) {
    b = !1, T && (T = !1, S(Z), Z = -1), A = !0;
    var U = h;
    try {
      for (x(oe), v = n(m); v !== null && (!(v.expirationTime > oe) || R && !ce()); ) {
        var K = v.callback;
        if (typeof K == "function") {
          v.callback = null, h = v.priorityLevel;
          var me = K(v.expirationTime <= oe);
          oe = e.unstable_now(), typeof me == "function" ? v.callback = me : v === n(m) && i(m), x(oe);
        } else
          i(m);
        v = n(m);
      }
      if (v !== null)
        var De = !0;
      else {
        var ae = n(_);
        ae !== null && It($, ae.startTime - oe), De = !1;
      }
      return De;
    } finally {
      v = null, h = U, A = !1;
    }
  }
  var f = !1, O = null, Z = -1, re = 5, Y = -1;
  function ce() {
    return !(e.unstable_now() - Y < re);
  }
  function Ee() {
    if (O !== null) {
      var R = e.unstable_now();
      Y = R;
      var oe = !0;
      try {
        oe = O(!0, R);
      } finally {
        oe ? sn() : (f = !1, O = null);
      }
    } else
      f = !1;
  }
  var sn;
  if (typeof P == "function")
    sn = function() {
      P(Ee);
    };
  else if (typeof MessageChannel < "u") {
    var st = new MessageChannel(), gr = st.port2;
    st.port1.onmessage = Ee, sn = function() {
      gr.postMessage(null);
    };
  } else
    sn = function() {
      j(Ee, 0);
    };
  function Ue(R) {
    O = R, f || (f = !0, sn());
  }
  function It(R, oe) {
    Z = j(function() {
      R(e.unstable_now());
    }, oe);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, e.unstable_continueExecution = function() {
    b || A || (b = !0, Ue(k));
  }, e.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : re = 0 < R ? Math.floor(1e3 / R) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(m);
  }, e.unstable_next = function(R) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var oe = 3;
        break;
      default:
        oe = h;
    }
    var U = h;
    h = oe;
    try {
      return R();
    } finally {
      h = U;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(R, oe) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3;
    }
    var U = h;
    h = R;
    try {
      return oe();
    } finally {
      h = U;
    }
  }, e.unstable_scheduleCallback = function(R, oe, U) {
    var K = e.unstable_now();
    switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? K + U : K) : U = K, R) {
      case 1:
        var me = -1;
        break;
      case 2:
        me = 250;
        break;
      case 5:
        me = 1073741823;
        break;
      case 4:
        me = 1e4;
        break;
      default:
        me = 5e3;
    }
    return me = U + me, R = { id: y++, callback: oe, priorityLevel: R, startTime: U, expirationTime: me, sortIndex: -1 }, U > K ? (R.sortIndex = U, t(_, R), n(m) === null && R === n(_) && (T ? (S(Z), Z = -1) : T = !0, It($, U - K))) : (R.sortIndex = me, t(m, R), b || A || (b = !0, Ue(k))), R;
  }, e.unstable_shouldYield = ce, e.unstable_wrapCallback = function(R) {
    var oe = h;
    return function() {
      var U = h;
      h = oe;
      try {
        return R.apply(this, arguments);
      } finally {
        h = U;
      }
    };
  };
})(u_);
l_.exports = u_;
var iS = l_.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oS = ie, nn = iS;
function V(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var c_ = /* @__PURE__ */ new Set(), Ia = {};
function xi(e, t) {
  To(e, t), To(e + "Capture", t);
}
function To(e, t) {
  for (Ia[e] = t, e = 0; e < t.length; e++)
    c_.add(t[e]);
}
var fr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _f = Object.prototype.hasOwnProperty, aS = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, qp = {}, Yp = {};
function sS(e) {
  return _f.call(Yp, e) ? !0 : _f.call(qp, e) ? !1 : aS.test(e) ? Yp[e] = !0 : (qp[e] = !0, !1);
}
function lS(e, t, n, i) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return i ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function uS(e, t, n, i) {
  if (t === null || typeof t > "u" || lS(e, t, n, i))
    return !0;
  if (i)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function $t(e, t, n, i, a, l, c) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = i, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = c;
}
var wt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  wt[e] = new $t(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  wt[t] = new $t(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  wt[e] = new $t(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  wt[e] = new $t(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  wt[e] = new $t(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  wt[e] = new $t(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  wt[e] = new $t(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  wt[e] = new $t(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  wt[e] = new $t(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Dd = /[\-:]([a-z])/g;
function jd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Dd,
    jd
  );
  wt[t] = new $t(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Dd, jd);
  wt[t] = new $t(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Dd, jd);
  wt[t] = new $t(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  wt[e] = new $t(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
wt.xlinkHref = new $t("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  wt[e] = new $t(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Fd(e, t, n, i) {
  var a = wt.hasOwnProperty(t) ? wt[t] : null;
  (a !== null ? a.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (uS(t, n, a, i) && (n = null), i || a === null ? sS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, i = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
}
var mr = oS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Zs = Symbol.for("react.element"), Qi = Symbol.for("react.portal"), Xi = Symbol.for("react.fragment"), Zd = Symbol.for("react.strict_mode"), yf = Symbol.for("react.profiler"), f_ = Symbol.for("react.provider"), d_ = Symbol.for("react.context"), Vd = Symbol.for("react.forward_ref"), vf = Symbol.for("react.suspense"), wf = Symbol.for("react.suspense_list"), Ud = Symbol.for("react.memo"), Lr = Symbol.for("react.lazy"), h_ = Symbol.for("react.offscreen"), Qp = Symbol.iterator;
function ca(e) {
  return e === null || typeof e != "object" ? null : (e = Qp && e[Qp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ve = Object.assign, Nc;
function ya(e) {
  if (Nc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Nc = t && t[1] || "";
    }
  return `
` + Nc + e;
}
var $c = !1;
function Ic(e, t) {
  if (!e || $c)
    return "";
  $c = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (_) {
          var i = _;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (_) {
          i = _;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (_) {
        i = _;
      }
      e();
    }
  } catch (_) {
    if (_ && i && typeof _.stack == "string") {
      for (var a = _.stack.split(`
`), l = i.stack.split(`
`), c = a.length - 1, p = l.length - 1; 1 <= c && 0 <= p && a[c] !== l[p]; )
        p--;
      for (; 1 <= c && 0 <= p; c--, p--)
        if (a[c] !== l[p]) {
          if (c !== 1 || p !== 1)
            do
              if (c--, p--, 0 > p || a[c] !== l[p]) {
                var m = `
` + a[c].replace(" at new ", " at ");
                return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), m;
              }
            while (1 <= c && 0 <= p);
          break;
        }
    }
  } finally {
    $c = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ya(e) : "";
}
function cS(e) {
  switch (e.tag) {
    case 5:
      return ya(e.type);
    case 16:
      return ya("Lazy");
    case 13:
      return ya("Suspense");
    case 19:
      return ya("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ic(e.type, !1), e;
    case 11:
      return e = Ic(e.type.render, !1), e;
    case 1:
      return e = Ic(e.type, !0), e;
    default:
      return "";
  }
}
function Pf(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Xi:
      return "Fragment";
    case Qi:
      return "Portal";
    case yf:
      return "Profiler";
    case Zd:
      return "StrictMode";
    case vf:
      return "Suspense";
    case wf:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case d_:
        return (e.displayName || "Context") + ".Consumer";
      case f_:
        return (e._context.displayName || "Context") + ".Provider";
      case Vd:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ud:
        return t = e.displayName || null, t !== null ? t : Pf(e.type) || "Memo";
      case Lr:
        t = e._payload, e = e._init;
        try {
          return Pf(e(t));
        } catch {
        }
    }
  return null;
}
function fS(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Pf(t);
    case 8:
      return t === Zd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function jr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function p_(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function dS(e) {
  var t = p_(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var a = n.get, l = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return a.call(this);
    }, set: function(c) {
      i = "" + c, l.call(this, c);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return i;
    }, setValue: function(c) {
      i = "" + c;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Vs(e) {
  e._valueTracker || (e._valueTracker = dS(e));
}
function m_(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), i = "";
  return e && (i = p_(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
}
function Cl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function xf(e, t) {
  var n = t.checked;
  return Ve({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Xp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, i = t.checked != null ? t.checked : t.defaultChecked;
  n = jr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: i, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function g_(e, t) {
  t = t.checked, t != null && Fd(e, "checked", t, !1);
}
function Sf(e, t) {
  g_(e, t);
  var n = jr(t.value), i = t.type;
  if (n != null)
    i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (i === "submit" || i === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ef(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ef(e, t.type, jr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function em(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var i = t.type;
    if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ef(e, t, n) {
  (t !== "number" || Cl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var va = Array.isArray;
function go(e, t, n, i) {
  if (e = e.options, t) {
    t = {};
    for (var a = 0; a < n.length; a++)
      t["$" + n[a]] = !0;
    for (n = 0; n < e.length; n++)
      a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && i && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + jr(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        e[a].selected = !0, i && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function Lf(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(V(91));
  return Ve({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function tm(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(V(92));
      if (va(n)) {
        if (1 < n.length)
          throw Error(V(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: jr(n) };
}
function __(e, t) {
  var n = jr(t.value), i = jr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), i != null && (e.defaultValue = "" + i);
}
function nm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function y_(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Tf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? y_(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Us, v_ = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, i, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, i, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Us = Us || document.createElement("div"), Us.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Us.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Ra(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ea = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, hS = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ea).forEach(function(e) {
  hS.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ea[t] = Ea[e];
  });
});
function w_(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ea.hasOwnProperty(e) && Ea[e] ? ("" + t).trim() : t + "px";
}
function P_(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0, a = w_(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, a) : e[n] = a;
    }
}
var pS = Ve({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Of(e, t) {
  if (t) {
    if (pS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(V(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(V(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(V(62));
  }
}
function Cf(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var kf = null;
function Wd(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var bf = null, _o = null, yo = null;
function rm(e) {
  if (e = ms(e)) {
    if (typeof bf != "function")
      throw Error(V(280));
    var t = e.stateNode;
    t && (t = Gu(t), bf(e.stateNode, e.type, t));
  }
}
function x_(e) {
  _o ? yo ? yo.push(e) : yo = [e] : _o = e;
}
function S_() {
  if (_o) {
    var e = _o, t = yo;
    if (yo = _o = null, rm(e), t)
      for (e = 0; e < t.length; e++)
        rm(t[e]);
  }
}
function E_(e, t) {
  return e(t);
}
function L_() {
}
var Rc = !1;
function T_(e, t, n) {
  if (Rc)
    return e(t, n);
  Rc = !0;
  try {
    return E_(e, t, n);
  } finally {
    Rc = !1, (_o !== null || yo !== null) && (L_(), S_());
  }
}
function Ba(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var i = Gu(n);
  if (i === null)
    return null;
  n = i[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(V(231, t, typeof n));
  return n;
}
var Mf = !1;
if (fr)
  try {
    var fa = {};
    Object.defineProperty(fa, "passive", { get: function() {
      Mf = !0;
    } }), window.addEventListener("test", fa, fa), window.removeEventListener("test", fa, fa);
  } catch {
    Mf = !1;
  }
function mS(e, t, n, i, a, l, c, p, m) {
  var _ = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, _);
  } catch (y) {
    this.onError(y);
  }
}
var La = !1, kl = null, bl = !1, Af = null, gS = { onError: function(e) {
  La = !0, kl = e;
} };
function _S(e, t, n, i, a, l, c, p, m) {
  La = !1, kl = null, mS.apply(gS, arguments);
}
function yS(e, t, n, i, a, l, c, p, m) {
  if (_S.apply(this, arguments), La) {
    if (La) {
      var _ = kl;
      La = !1, kl = null;
    } else
      throw Error(V(198));
    bl || (bl = !0, Af = _);
  }
}
function Si(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function O_(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function im(e) {
  if (Si(e) !== e)
    throw Error(V(188));
}
function vS(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Si(e), t === null)
      throw Error(V(188));
    return t !== e ? null : e;
  }
  for (var n = e, i = t; ; ) {
    var a = n.return;
    if (a === null)
      break;
    var l = a.alternate;
    if (l === null) {
      if (i = a.return, i !== null) {
        n = i;
        continue;
      }
      break;
    }
    if (a.child === l.child) {
      for (l = a.child; l; ) {
        if (l === n)
          return im(a), e;
        if (l === i)
          return im(a), t;
        l = l.sibling;
      }
      throw Error(V(188));
    }
    if (n.return !== i.return)
      n = a, i = l;
    else {
      for (var c = !1, p = a.child; p; ) {
        if (p === n) {
          c = !0, n = a, i = l;
          break;
        }
        if (p === i) {
          c = !0, i = a, n = l;
          break;
        }
        p = p.sibling;
      }
      if (!c) {
        for (p = l.child; p; ) {
          if (p === n) {
            c = !0, n = l, i = a;
            break;
          }
          if (p === i) {
            c = !0, i = l, n = a;
            break;
          }
          p = p.sibling;
        }
        if (!c)
          throw Error(V(189));
      }
    }
    if (n.alternate !== i)
      throw Error(V(190));
  }
  if (n.tag !== 3)
    throw Error(V(188));
  return n.stateNode.current === n ? e : t;
}
function C_(e) {
  return e = vS(e), e !== null ? k_(e) : null;
}
function k_(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = k_(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var b_ = nn.unstable_scheduleCallback, om = nn.unstable_cancelCallback, wS = nn.unstable_shouldYield, PS = nn.unstable_requestPaint, qe = nn.unstable_now, xS = nn.unstable_getCurrentPriorityLevel, Hd = nn.unstable_ImmediatePriority, M_ = nn.unstable_UserBlockingPriority, Ml = nn.unstable_NormalPriority, SS = nn.unstable_LowPriority, A_ = nn.unstable_IdlePriority, Vu = null, Hn = null;
function ES(e) {
  if (Hn && typeof Hn.onCommitFiberRoot == "function")
    try {
      Hn.onCommitFiberRoot(Vu, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Mn = Math.clz32 ? Math.clz32 : OS, LS = Math.log, TS = Math.LN2;
function OS(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (LS(e) / TS | 0) | 0;
}
var Ws = 64, Hs = 4194304;
function wa(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Al(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var i = 0, a = e.suspendedLanes, l = e.pingedLanes, c = n & 268435455;
  if (c !== 0) {
    var p = c & ~a;
    p !== 0 ? i = wa(p) : (l &= c, l !== 0 && (i = wa(l)));
  } else
    c = n & ~a, c !== 0 ? i = wa(c) : l !== 0 && (i = wa(l));
  if (i === 0)
    return 0;
  if (t !== 0 && t !== i && !(t & a) && (a = i & -i, l = t & -t, a >= l || a === 16 && (l & 4194240) !== 0))
    return t;
  if (i & 4 && (i |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= i; 0 < t; )
      n = 31 - Mn(t), a = 1 << n, i |= e[n], t &= ~a;
  return i;
}
function CS(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function kS(e, t) {
  for (var n = e.suspendedLanes, i = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var c = 31 - Mn(l), p = 1 << c, m = a[c];
    m === -1 ? (!(p & n) || p & i) && (a[c] = CS(p, t)) : m <= t && (e.expiredLanes |= p), l &= ~p;
  }
}
function zf(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function z_() {
  var e = Ws;
  return Ws <<= 1, !(Ws & 4194240) && (Ws = 64), e;
}
function Bc(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function hs(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Mn(t), e[t] = n;
}
function bS(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var i = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - Mn(n), l = 1 << a;
    t[a] = 0, i[a] = -1, e[a] = -1, n &= ~l;
  }
}
function Gd(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var i = 31 - Mn(n), a = 1 << i;
    a & t | e[i] & t && (e[i] |= t), n &= ~a;
  }
}
var be = 0;
function N_(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var $_, Kd, I_, R_, B_, Nf = !1, Gs = [], Mr = null, Ar = null, zr = null, Da = /* @__PURE__ */ new Map(), ja = /* @__PURE__ */ new Map(), Or = [], MS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function am(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Mr = null;
      break;
    case "dragenter":
    case "dragleave":
      Ar = null;
      break;
    case "mouseover":
    case "mouseout":
      zr = null;
      break;
    case "pointerover":
    case "pointerout":
      Da.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ja.delete(t.pointerId);
  }
}
function da(e, t, n, i, a, l) {
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: i, nativeEvent: l, targetContainers: [a] }, t !== null && (t = ms(t), t !== null && Kd(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function AS(e, t, n, i, a) {
  switch (t) {
    case "focusin":
      return Mr = da(Mr, e, t, n, i, a), !0;
    case "dragenter":
      return Ar = da(Ar, e, t, n, i, a), !0;
    case "mouseover":
      return zr = da(zr, e, t, n, i, a), !0;
    case "pointerover":
      var l = a.pointerId;
      return Da.set(l, da(Da.get(l) || null, e, t, n, i, a)), !0;
    case "gotpointercapture":
      return l = a.pointerId, ja.set(l, da(ja.get(l) || null, e, t, n, i, a)), !0;
  }
  return !1;
}
function D_(e) {
  var t = si(e.target);
  if (t !== null) {
    var n = Si(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = O_(n), t !== null) {
          e.blockedOn = t, B_(e.priority, function() {
            I_(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ul(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $f(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var i = new n.constructor(n.type, n);
      kf = i, n.target.dispatchEvent(i), kf = null;
    } else
      return t = ms(n), t !== null && Kd(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function sm(e, t, n) {
  ul(e) && n.delete(t);
}
function zS() {
  Nf = !1, Mr !== null && ul(Mr) && (Mr = null), Ar !== null && ul(Ar) && (Ar = null), zr !== null && ul(zr) && (zr = null), Da.forEach(sm), ja.forEach(sm);
}
function ha(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Nf || (Nf = !0, nn.unstable_scheduleCallback(nn.unstable_NormalPriority, zS)));
}
function Fa(e) {
  function t(a) {
    return ha(a, e);
  }
  if (0 < Gs.length) {
    ha(Gs[0], e);
    for (var n = 1; n < Gs.length; n++) {
      var i = Gs[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
  }
  for (Mr !== null && ha(Mr, e), Ar !== null && ha(Ar, e), zr !== null && ha(zr, e), Da.forEach(t), ja.forEach(t), n = 0; n < Or.length; n++)
    i = Or[n], i.blockedOn === e && (i.blockedOn = null);
  for (; 0 < Or.length && (n = Or[0], n.blockedOn === null); )
    D_(n), n.blockedOn === null && Or.shift();
}
var vo = mr.ReactCurrentBatchConfig, zl = !0;
function NS(e, t, n, i) {
  var a = be, l = vo.transition;
  vo.transition = null;
  try {
    be = 1, Jd(e, t, n, i);
  } finally {
    be = a, vo.transition = l;
  }
}
function $S(e, t, n, i) {
  var a = be, l = vo.transition;
  vo.transition = null;
  try {
    be = 4, Jd(e, t, n, i);
  } finally {
    be = a, vo.transition = l;
  }
}
function Jd(e, t, n, i) {
  if (zl) {
    var a = $f(e, t, n, i);
    if (a === null)
      Kc(e, t, i, Nl, n), am(e, i);
    else if (AS(a, e, t, n, i))
      i.stopPropagation();
    else if (am(e, i), t & 4 && -1 < MS.indexOf(e)) {
      for (; a !== null; ) {
        var l = ms(a);
        if (l !== null && $_(l), l = $f(e, t, n, i), l === null && Kc(e, t, i, Nl, n), l === a)
          break;
        a = l;
      }
      a !== null && i.stopPropagation();
    } else
      Kc(e, t, i, null, n);
  }
}
var Nl = null;
function $f(e, t, n, i) {
  if (Nl = null, e = Wd(i), e = si(e), e !== null)
    if (t = Si(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = O_(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Nl = e, null;
}
function j_(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (xS()) {
        case Hd:
          return 1;
        case M_:
          return 4;
        case Ml:
        case SS:
          return 16;
        case A_:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kr = null, qd = null, cl = null;
function F_() {
  if (cl)
    return cl;
  var e, t = qd, n = t.length, i, a = "value" in kr ? kr.value : kr.textContent, l = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++)
    ;
  var c = n - e;
  for (i = 1; i <= c && t[n - i] === a[l - i]; i++)
    ;
  return cl = a.slice(e, 1 < i ? 1 - i : void 0);
}
function fl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ks() {
  return !0;
}
function lm() {
  return !1;
}
function an(e) {
  function t(n, i, a, l, c) {
    this._reactName = n, this._targetInst = a, this.type = i, this.nativeEvent = l, this.target = c, this.currentTarget = null;
    for (var p in e)
      e.hasOwnProperty(p) && (n = e[p], this[p] = n ? n(l) : l[p]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Ks : lm, this.isPropagationStopped = lm, this;
  }
  return Ve(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ks);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ks);
  }, persist: function() {
  }, isPersistent: Ks }), t;
}
var jo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Yd = an(jo), ps = Ve({}, jo, { view: 0, detail: 0 }), IS = an(ps), Dc, jc, pa, Uu = Ve({}, ps, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Qd, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== pa && (pa && e.type === "mousemove" ? (Dc = e.screenX - pa.screenX, jc = e.screenY - pa.screenY) : jc = Dc = 0, pa = e), Dc);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : jc;
} }), um = an(Uu), RS = Ve({}, Uu, { dataTransfer: 0 }), BS = an(RS), DS = Ve({}, ps, { relatedTarget: 0 }), Fc = an(DS), jS = Ve({}, jo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), FS = an(jS), ZS = Ve({}, jo, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), VS = an(ZS), US = Ve({}, jo, { data: 0 }), cm = an(US), WS = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, HS = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, GS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function KS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = GS[e]) ? !!t[e] : !1;
}
function Qd() {
  return KS;
}
var JS = Ve({}, ps, { key: function(e) {
  if (e.key) {
    var t = WS[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = fl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? HS[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Qd, charCode: function(e) {
  return e.type === "keypress" ? fl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), qS = an(JS), YS = Ve({}, Uu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fm = an(YS), QS = Ve({}, ps, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Qd }), XS = an(QS), eE = Ve({}, jo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), tE = an(eE), nE = Ve({}, Uu, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), rE = an(nE), iE = [9, 13, 27, 32], Xd = fr && "CompositionEvent" in window, Ta = null;
fr && "documentMode" in document && (Ta = document.documentMode);
var oE = fr && "TextEvent" in window && !Ta, Z_ = fr && (!Xd || Ta && 8 < Ta && 11 >= Ta), dm = String.fromCharCode(32), hm = !1;
function V_(e, t) {
  switch (e) {
    case "keyup":
      return iE.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function U_(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var eo = !1;
function aE(e, t) {
  switch (e) {
    case "compositionend":
      return U_(t);
    case "keypress":
      return t.which !== 32 ? null : (hm = !0, dm);
    case "textInput":
      return e = t.data, e === dm && hm ? null : e;
    default:
      return null;
  }
}
function sE(e, t) {
  if (eo)
    return e === "compositionend" || !Xd && V_(e, t) ? (e = F_(), cl = qd = kr = null, eo = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Z_ && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var lE = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function pm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!lE[e.type] : t === "textarea";
}
function W_(e, t, n, i) {
  x_(i), t = $l(t, "onChange"), 0 < t.length && (n = new Yd("onChange", "change", null, n, i), e.push({ event: n, listeners: t }));
}
var Oa = null, Za = null;
function uE(e) {
  ny(e, 0);
}
function Wu(e) {
  var t = ro(e);
  if (m_(t))
    return e;
}
function cE(e, t) {
  if (e === "change")
    return t;
}
var H_ = !1;
if (fr) {
  var Zc;
  if (fr) {
    var Vc = "oninput" in document;
    if (!Vc) {
      var mm = document.createElement("div");
      mm.setAttribute("oninput", "return;"), Vc = typeof mm.oninput == "function";
    }
    Zc = Vc;
  } else
    Zc = !1;
  H_ = Zc && (!document.documentMode || 9 < document.documentMode);
}
function gm() {
  Oa && (Oa.detachEvent("onpropertychange", G_), Za = Oa = null);
}
function G_(e) {
  if (e.propertyName === "value" && Wu(Za)) {
    var t = [];
    W_(t, Za, e, Wd(e)), T_(uE, t);
  }
}
function fE(e, t, n) {
  e === "focusin" ? (gm(), Oa = t, Za = n, Oa.attachEvent("onpropertychange", G_)) : e === "focusout" && gm();
}
function dE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Wu(Za);
}
function hE(e, t) {
  if (e === "click")
    return Wu(t);
}
function pE(e, t) {
  if (e === "input" || e === "change")
    return Wu(t);
}
function mE(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var zn = typeof Object.is == "function" ? Object.is : mE;
function Va(e, t) {
  if (zn(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), i = Object.keys(t);
  if (n.length !== i.length)
    return !1;
  for (i = 0; i < n.length; i++) {
    var a = n[i];
    if (!_f.call(t, a) || !zn(e[a], t[a]))
      return !1;
  }
  return !0;
}
function _m(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function ym(e, t) {
  var n = _m(e);
  e = 0;
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (i = e + n.textContent.length, e <= t && i >= t)
        return { node: n, offset: t - e };
      e = i;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = _m(n);
  }
}
function K_(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? K_(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function J_() {
  for (var e = window, t = Cl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Cl(e.document);
  }
  return t;
}
function eh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function gE(e) {
  var t = J_(), n = e.focusedElem, i = e.selectionRange;
  if (t !== n && n && n.ownerDocument && K_(n.ownerDocument.documentElement, n)) {
    if (i !== null && eh(n)) {
      if (t = i.start, e = i.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, l = Math.min(i.start, a);
        i = i.end === void 0 ? l : Math.min(i.end, a), !e.extend && l > i && (a = i, i = l, l = a), a = ym(n, l);
        var c = ym(
          n,
          i
        );
        a && c && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== c.node || e.focusOffset !== c.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), l > i ? (e.addRange(t), e.extend(c.node, c.offset)) : (t.setEnd(c.node, c.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var _E = fr && "documentMode" in document && 11 >= document.documentMode, to = null, If = null, Ca = null, Rf = !1;
function vm(e, t, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Rf || to == null || to !== Cl(i) || (i = to, "selectionStart" in i && eh(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), Ca && Va(Ca, i) || (Ca = i, i = $l(If, "onSelect"), 0 < i.length && (t = new Yd("onSelect", "select", null, t, n), e.push({ event: t, listeners: i }), t.target = to)));
}
function Js(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var no = { animationend: Js("Animation", "AnimationEnd"), animationiteration: Js("Animation", "AnimationIteration"), animationstart: Js("Animation", "AnimationStart"), transitionend: Js("Transition", "TransitionEnd") }, Uc = {}, q_ = {};
fr && (q_ = document.createElement("div").style, "AnimationEvent" in window || (delete no.animationend.animation, delete no.animationiteration.animation, delete no.animationstart.animation), "TransitionEvent" in window || delete no.transitionend.transition);
function Hu(e) {
  if (Uc[e])
    return Uc[e];
  if (!no[e])
    return e;
  var t = no[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in q_)
      return Uc[e] = t[n];
  return e;
}
var Y_ = Hu("animationend"), Q_ = Hu("animationiteration"), X_ = Hu("animationstart"), ey = Hu("transitionend"), ty = /* @__PURE__ */ new Map(), wm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Zr(e, t) {
  ty.set(e, t), xi(t, [e]);
}
for (var Wc = 0; Wc < wm.length; Wc++) {
  var Hc = wm[Wc], yE = Hc.toLowerCase(), vE = Hc[0].toUpperCase() + Hc.slice(1);
  Zr(yE, "on" + vE);
}
Zr(Y_, "onAnimationEnd");
Zr(Q_, "onAnimationIteration");
Zr(X_, "onAnimationStart");
Zr("dblclick", "onDoubleClick");
Zr("focusin", "onFocus");
Zr("focusout", "onBlur");
Zr(ey, "onTransitionEnd");
To("onMouseEnter", ["mouseout", "mouseover"]);
To("onMouseLeave", ["mouseout", "mouseover"]);
To("onPointerEnter", ["pointerout", "pointerover"]);
To("onPointerLeave", ["pointerout", "pointerover"]);
xi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
xi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
xi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
xi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
xi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
xi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Pa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), wE = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pa));
function Pm(e, t, n) {
  var i = e.type || "unknown-event";
  e.currentTarget = n, yS(i, t, void 0, e), e.currentTarget = null;
}
function ny(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var i = e[n], a = i.event;
    i = i.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var c = i.length - 1; 0 <= c; c--) {
          var p = i[c], m = p.instance, _ = p.currentTarget;
          if (p = p.listener, m !== l && a.isPropagationStopped())
            break e;
          Pm(a, p, _), l = m;
        }
      else
        for (c = 0; c < i.length; c++) {
          if (p = i[c], m = p.instance, _ = p.currentTarget, p = p.listener, m !== l && a.isPropagationStopped())
            break e;
          Pm(a, p, _), l = m;
        }
    }
  }
  if (bl)
    throw e = Af, bl = !1, Af = null, e;
}
function $e(e, t) {
  var n = t[Zf];
  n === void 0 && (n = t[Zf] = /* @__PURE__ */ new Set());
  var i = e + "__bubble";
  n.has(i) || (ry(t, e, 2, !1), n.add(i));
}
function Gc(e, t, n) {
  var i = 0;
  t && (i |= 4), ry(n, e, i, t);
}
var qs = "_reactListening" + Math.random().toString(36).slice(2);
function Ua(e) {
  if (!e[qs]) {
    e[qs] = !0, c_.forEach(function(n) {
      n !== "selectionchange" && (wE.has(n) || Gc(n, !1, e), Gc(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[qs] || (t[qs] = !0, Gc("selectionchange", !1, t));
  }
}
function ry(e, t, n, i) {
  switch (j_(t)) {
    case 1:
      var a = NS;
      break;
    case 4:
      a = $S;
      break;
    default:
      a = Jd;
  }
  n = a.bind(null, t, n, e), a = void 0, !Mf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), i ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function Kc(e, t, n, i, a) {
  var l = i;
  if (!(t & 1) && !(t & 2) && i !== null)
    e:
      for (; ; ) {
        if (i === null)
          return;
        var c = i.tag;
        if (c === 3 || c === 4) {
          var p = i.stateNode.containerInfo;
          if (p === a || p.nodeType === 8 && p.parentNode === a)
            break;
          if (c === 4)
            for (c = i.return; c !== null; ) {
              var m = c.tag;
              if ((m === 3 || m === 4) && (m = c.stateNode.containerInfo, m === a || m.nodeType === 8 && m.parentNode === a))
                return;
              c = c.return;
            }
          for (; p !== null; ) {
            if (c = si(p), c === null)
              return;
            if (m = c.tag, m === 5 || m === 6) {
              i = l = c;
              continue e;
            }
            p = p.parentNode;
          }
        }
        i = i.return;
      }
  T_(function() {
    var _ = l, y = Wd(n), v = [];
    e: {
      var h = ty.get(e);
      if (h !== void 0) {
        var A = Yd, b = e;
        switch (e) {
          case "keypress":
            if (fl(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            A = qS;
            break;
          case "focusin":
            b = "focus", A = Fc;
            break;
          case "focusout":
            b = "blur", A = Fc;
            break;
          case "beforeblur":
          case "afterblur":
            A = Fc;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            A = um;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            A = BS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            A = XS;
            break;
          case Y_:
          case Q_:
          case X_:
            A = FS;
            break;
          case ey:
            A = tE;
            break;
          case "scroll":
            A = IS;
            break;
          case "wheel":
            A = rE;
            break;
          case "copy":
          case "cut":
          case "paste":
            A = VS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            A = fm;
        }
        var T = (t & 4) !== 0, j = !T && e === "scroll", S = T ? h !== null ? h + "Capture" : null : h;
        T = [];
        for (var P = _, x; P !== null; ) {
          x = P;
          var $ = x.stateNode;
          if (x.tag === 5 && $ !== null && (x = $, S !== null && ($ = Ba(P, S), $ != null && T.push(Wa(P, $, x)))), j)
            break;
          P = P.return;
        }
        0 < T.length && (h = new A(h, b, null, n, y), v.push({ event: h, listeners: T }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", A = e === "mouseout" || e === "pointerout", h && n !== kf && (b = n.relatedTarget || n.fromElement) && (si(b) || b[dr]))
          break e;
        if ((A || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, A ? (b = n.relatedTarget || n.toElement, A = _, b = b ? si(b) : null, b !== null && (j = Si(b), b !== j || b.tag !== 5 && b.tag !== 6) && (b = null)) : (A = null, b = _), A !== b)) {
          if (T = um, $ = "onMouseLeave", S = "onMouseEnter", P = "mouse", (e === "pointerout" || e === "pointerover") && (T = fm, $ = "onPointerLeave", S = "onPointerEnter", P = "pointer"), j = A == null ? h : ro(A), x = b == null ? h : ro(b), h = new T($, P + "leave", A, n, y), h.target = j, h.relatedTarget = x, $ = null, si(y) === _ && (T = new T(S, P + "enter", b, n, y), T.target = x, T.relatedTarget = j, $ = T), j = $, A && b)
            t: {
              for (T = A, S = b, P = 0, x = T; x; x = qi(x))
                P++;
              for (x = 0, $ = S; $; $ = qi($))
                x++;
              for (; 0 < P - x; )
                T = qi(T), P--;
              for (; 0 < x - P; )
                S = qi(S), x--;
              for (; P--; ) {
                if (T === S || S !== null && T === S.alternate)
                  break t;
                T = qi(T), S = qi(S);
              }
              T = null;
            }
          else
            T = null;
          A !== null && xm(v, h, A, T, !1), b !== null && j !== null && xm(v, j, b, T, !0);
        }
      }
      e: {
        if (h = _ ? ro(_) : window, A = h.nodeName && h.nodeName.toLowerCase(), A === "select" || A === "input" && h.type === "file")
          var k = cE;
        else if (pm(h))
          if (H_)
            k = pE;
          else {
            k = dE;
            var f = fE;
          }
        else
          (A = h.nodeName) && A.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (k = hE);
        if (k && (k = k(e, _))) {
          W_(v, k, n, y);
          break e;
        }
        f && f(e, h, _), e === "focusout" && (f = h._wrapperState) && f.controlled && h.type === "number" && Ef(h, "number", h.value);
      }
      switch (f = _ ? ro(_) : window, e) {
        case "focusin":
          (pm(f) || f.contentEditable === "true") && (to = f, If = _, Ca = null);
          break;
        case "focusout":
          Ca = If = to = null;
          break;
        case "mousedown":
          Rf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Rf = !1, vm(v, n, y);
          break;
        case "selectionchange":
          if (_E)
            break;
        case "keydown":
        case "keyup":
          vm(v, n, y);
      }
      var O;
      if (Xd)
        e: {
          switch (e) {
            case "compositionstart":
              var Z = "onCompositionStart";
              break e;
            case "compositionend":
              Z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Z = "onCompositionUpdate";
              break e;
          }
          Z = void 0;
        }
      else
        eo ? V_(e, n) && (Z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Z = "onCompositionStart");
      Z && (Z_ && n.locale !== "ko" && (eo || Z !== "onCompositionStart" ? Z === "onCompositionEnd" && eo && (O = F_()) : (kr = y, qd = "value" in kr ? kr.value : kr.textContent, eo = !0)), f = $l(_, Z), 0 < f.length && (Z = new cm(Z, e, null, n, y), v.push({ event: Z, listeners: f }), O ? Z.data = O : (O = U_(n), O !== null && (Z.data = O)))), (O = oE ? aE(e, n) : sE(e, n)) && (_ = $l(_, "onBeforeInput"), 0 < _.length && (y = new cm("onBeforeInput", "beforeinput", null, n, y), v.push({ event: y, listeners: _ }), y.data = O));
    }
    ny(v, t);
  });
}
function Wa(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $l(e, t) {
  for (var n = t + "Capture", i = []; e !== null; ) {
    var a = e, l = a.stateNode;
    a.tag === 5 && l !== null && (a = l, l = Ba(e, n), l != null && i.unshift(Wa(e, l, a)), l = Ba(e, t), l != null && i.push(Wa(e, l, a))), e = e.return;
  }
  return i;
}
function qi(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function xm(e, t, n, i, a) {
  for (var l = t._reactName, c = []; n !== null && n !== i; ) {
    var p = n, m = p.alternate, _ = p.stateNode;
    if (m !== null && m === i)
      break;
    p.tag === 5 && _ !== null && (p = _, a ? (m = Ba(n, l), m != null && c.unshift(Wa(n, m, p))) : a || (m = Ba(n, l), m != null && c.push(Wa(n, m, p)))), n = n.return;
  }
  c.length !== 0 && e.push({ event: t, listeners: c });
}
var PE = /\r\n?/g, xE = /\u0000|\uFFFD/g;
function Sm(e) {
  return (typeof e == "string" ? e : "" + e).replace(PE, `
`).replace(xE, "");
}
function Ys(e, t, n) {
  if (t = Sm(t), Sm(e) !== t && n)
    throw Error(V(425));
}
function Il() {
}
var Bf = null, Df = null;
function jf(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ff = typeof setTimeout == "function" ? setTimeout : void 0, SE = typeof clearTimeout == "function" ? clearTimeout : void 0, Em = typeof Promise == "function" ? Promise : void 0, EE = typeof queueMicrotask == "function" ? queueMicrotask : typeof Em < "u" ? function(e) {
  return Em.resolve(null).then(e).catch(LE);
} : Ff;
function LE(e) {
  setTimeout(function() {
    throw e;
  });
}
function Jc(e, t) {
  var n = t, i = 0;
  do {
    var a = n.nextSibling;
    if (e.removeChild(n), a && a.nodeType === 8)
      if (n = a.data, n === "/$") {
        if (i === 0) {
          e.removeChild(a), Fa(t);
          return;
        }
        i--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || i++;
    n = a;
  } while (n);
  Fa(t);
}
function Nr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function Lm(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Fo = Math.random().toString(36).slice(2), Un = "__reactFiber$" + Fo, Ha = "__reactProps$" + Fo, dr = "__reactContainer$" + Fo, Zf = "__reactEvents$" + Fo, TE = "__reactListeners$" + Fo, OE = "__reactHandles$" + Fo;
function si(e) {
  var t = e[Un];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[dr] || n[Un]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Lm(e); e !== null; ) {
          if (n = e[Un])
            return n;
          e = Lm(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ms(e) {
  return e = e[Un] || e[dr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function ro(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(V(33));
}
function Gu(e) {
  return e[Ha] || null;
}
var Vf = [], io = -1;
function Vr(e) {
  return { current: e };
}
function Ie(e) {
  0 > io || (e.current = Vf[io], Vf[io] = null, io--);
}
function Ae(e, t) {
  io++, Vf[io] = e.current, e.current = t;
}
var Fr = {}, Ct = Vr(Fr), Ut = Vr(!1), gi = Fr;
function Oo(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Fr;
  var i = e.stateNode;
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
    return i.__reactInternalMemoizedMaskedChildContext;
  var a = {}, l;
  for (l in n)
    a[l] = t[l];
  return i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function Wt(e) {
  return e = e.childContextTypes, e != null;
}
function Rl() {
  Ie(Ut), Ie(Ct);
}
function Tm(e, t, n) {
  if (Ct.current !== Fr)
    throw Error(V(168));
  Ae(Ct, t), Ae(Ut, n);
}
function iy(e, t, n) {
  var i = e.stateNode;
  if (t = t.childContextTypes, typeof i.getChildContext != "function")
    return n;
  i = i.getChildContext();
  for (var a in i)
    if (!(a in t))
      throw Error(V(108, fS(e) || "Unknown", a));
  return Ve({}, n, i);
}
function Bl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Fr, gi = Ct.current, Ae(Ct, e), Ae(Ut, Ut.current), !0;
}
function Om(e, t, n) {
  var i = e.stateNode;
  if (!i)
    throw Error(V(169));
  n ? (e = iy(e, t, gi), i.__reactInternalMemoizedMergedChildContext = e, Ie(Ut), Ie(Ct), Ae(Ct, e)) : Ie(Ut), Ae(Ut, n);
}
var ar = null, Ku = !1, qc = !1;
function oy(e) {
  ar === null ? ar = [e] : ar.push(e);
}
function CE(e) {
  Ku = !0, oy(e);
}
function Ur() {
  if (!qc && ar !== null) {
    qc = !0;
    var e = 0, t = be;
    try {
      var n = ar;
      for (be = 1; e < n.length; e++) {
        var i = n[e];
        do
          i = i(!0);
        while (i !== null);
      }
      ar = null, Ku = !1;
    } catch (a) {
      throw ar !== null && (ar = ar.slice(e + 1)), b_(Hd, Ur), a;
    } finally {
      be = t, qc = !1;
    }
  }
  return null;
}
var oo = [], ao = 0, Dl = null, jl = 0, mn = [], gn = 0, _i = null, sr = 1, lr = "";
function ii(e, t) {
  oo[ao++] = jl, oo[ao++] = Dl, Dl = e, jl = t;
}
function ay(e, t, n) {
  mn[gn++] = sr, mn[gn++] = lr, mn[gn++] = _i, _i = e;
  var i = sr;
  e = lr;
  var a = 32 - Mn(i) - 1;
  i &= ~(1 << a), n += 1;
  var l = 32 - Mn(t) + a;
  if (30 < l) {
    var c = a - a % 5;
    l = (i & (1 << c) - 1).toString(32), i >>= c, a -= c, sr = 1 << 32 - Mn(t) + a | n << a | i, lr = l + e;
  } else
    sr = 1 << l | n << a | i, lr = e;
}
function th(e) {
  e.return !== null && (ii(e, 1), ay(e, 1, 0));
}
function nh(e) {
  for (; e === Dl; )
    Dl = oo[--ao], oo[ao] = null, jl = oo[--ao], oo[ao] = null;
  for (; e === _i; )
    _i = mn[--gn], mn[gn] = null, lr = mn[--gn], mn[gn] = null, sr = mn[--gn], mn[gn] = null;
}
var tn = null, Xt = null, Be = !1, bn = null;
function sy(e, t) {
  var n = _n(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Cm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, tn = e, Xt = Nr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, tn = e, Xt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = _i !== null ? { id: sr, overflow: lr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = _n(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, tn = e, Xt = null, !0) : !1;
    default:
      return !1;
  }
}
function Uf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Wf(e) {
  if (Be) {
    var t = Xt;
    if (t) {
      var n = t;
      if (!Cm(e, t)) {
        if (Uf(e))
          throw Error(V(418));
        t = Nr(n.nextSibling);
        var i = tn;
        t && Cm(e, t) ? sy(i, n) : (e.flags = e.flags & -4097 | 2, Be = !1, tn = e);
      }
    } else {
      if (Uf(e))
        throw Error(V(418));
      e.flags = e.flags & -4097 | 2, Be = !1, tn = e;
    }
  }
}
function km(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  tn = e;
}
function Qs(e) {
  if (e !== tn)
    return !1;
  if (!Be)
    return km(e), Be = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !jf(e.type, e.memoizedProps)), t && (t = Xt)) {
    if (Uf(e))
      throw ly(), Error(V(418));
    for (; t; )
      sy(e, t), t = Nr(t.nextSibling);
  }
  if (km(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Xt = Nr(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Xt = null;
    }
  } else
    Xt = tn ? Nr(e.stateNode.nextSibling) : null;
  return !0;
}
function ly() {
  for (var e = Xt; e; )
    e = Nr(e.nextSibling);
}
function Co() {
  Xt = tn = null, Be = !1;
}
function rh(e) {
  bn === null ? bn = [e] : bn.push(e);
}
var kE = mr.ReactCurrentBatchConfig;
function ma(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(V(309));
        var i = n.stateNode;
      }
      if (!i)
        throw Error(V(147, e));
      var a = i, l = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(c) {
        var p = a.refs;
        c === null ? delete p[l] : p[l] = c;
      }, t._stringRef = l, t);
    }
    if (typeof e != "string")
      throw Error(V(284));
    if (!n._owner)
      throw Error(V(290, e));
  }
  return e;
}
function Xs(e, t) {
  throw e = Object.prototype.toString.call(t), Error(V(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function bm(e) {
  var t = e._init;
  return t(e._payload);
}
function uy(e) {
  function t(S, P) {
    if (e) {
      var x = S.deletions;
      x === null ? (S.deletions = [P], S.flags |= 16) : x.push(P);
    }
  }
  function n(S, P) {
    if (!e)
      return null;
    for (; P !== null; )
      t(S, P), P = P.sibling;
    return null;
  }
  function i(S, P) {
    for (S = /* @__PURE__ */ new Map(); P !== null; )
      P.key !== null ? S.set(P.key, P) : S.set(P.index, P), P = P.sibling;
    return S;
  }
  function a(S, P) {
    return S = Br(S, P), S.index = 0, S.sibling = null, S;
  }
  function l(S, P, x) {
    return S.index = x, e ? (x = S.alternate, x !== null ? (x = x.index, x < P ? (S.flags |= 2, P) : x) : (S.flags |= 2, P)) : (S.flags |= 1048576, P);
  }
  function c(S) {
    return e && S.alternate === null && (S.flags |= 2), S;
  }
  function p(S, P, x, $) {
    return P === null || P.tag !== 6 ? (P = rf(x, S.mode, $), P.return = S, P) : (P = a(P, x), P.return = S, P);
  }
  function m(S, P, x, $) {
    var k = x.type;
    return k === Xi ? y(S, P, x.props.children, $, x.key) : P !== null && (P.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Lr && bm(k) === P.type) ? ($ = a(P, x.props), $.ref = ma(S, P, x), $.return = S, $) : ($ = yl(x.type, x.key, x.props, null, S.mode, $), $.ref = ma(S, P, x), $.return = S, $);
  }
  function _(S, P, x, $) {
    return P === null || P.tag !== 4 || P.stateNode.containerInfo !== x.containerInfo || P.stateNode.implementation !== x.implementation ? (P = of(x, S.mode, $), P.return = S, P) : (P = a(P, x.children || []), P.return = S, P);
  }
  function y(S, P, x, $, k) {
    return P === null || P.tag !== 7 ? (P = di(x, S.mode, $, k), P.return = S, P) : (P = a(P, x), P.return = S, P);
  }
  function v(S, P, x) {
    if (typeof P == "string" && P !== "" || typeof P == "number")
      return P = rf("" + P, S.mode, x), P.return = S, P;
    if (typeof P == "object" && P !== null) {
      switch (P.$$typeof) {
        case Zs:
          return x = yl(P.type, P.key, P.props, null, S.mode, x), x.ref = ma(S, null, P), x.return = S, x;
        case Qi:
          return P = of(P, S.mode, x), P.return = S, P;
        case Lr:
          var $ = P._init;
          return v(S, $(P._payload), x);
      }
      if (va(P) || ca(P))
        return P = di(P, S.mode, x, null), P.return = S, P;
      Xs(S, P);
    }
    return null;
  }
  function h(S, P, x, $) {
    var k = P !== null ? P.key : null;
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return k !== null ? null : p(S, P, "" + x, $);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Zs:
          return x.key === k ? m(S, P, x, $) : null;
        case Qi:
          return x.key === k ? _(S, P, x, $) : null;
        case Lr:
          return k = x._init, h(
            S,
            P,
            k(x._payload),
            $
          );
      }
      if (va(x) || ca(x))
        return k !== null ? null : y(S, P, x, $, null);
      Xs(S, x);
    }
    return null;
  }
  function A(S, P, x, $, k) {
    if (typeof $ == "string" && $ !== "" || typeof $ == "number")
      return S = S.get(x) || null, p(P, S, "" + $, k);
    if (typeof $ == "object" && $ !== null) {
      switch ($.$$typeof) {
        case Zs:
          return S = S.get($.key === null ? x : $.key) || null, m(P, S, $, k);
        case Qi:
          return S = S.get($.key === null ? x : $.key) || null, _(P, S, $, k);
        case Lr:
          var f = $._init;
          return A(S, P, x, f($._payload), k);
      }
      if (va($) || ca($))
        return S = S.get(x) || null, y(P, S, $, k, null);
      Xs(P, $);
    }
    return null;
  }
  function b(S, P, x, $) {
    for (var k = null, f = null, O = P, Z = P = 0, re = null; O !== null && Z < x.length; Z++) {
      O.index > Z ? (re = O, O = null) : re = O.sibling;
      var Y = h(S, O, x[Z], $);
      if (Y === null) {
        O === null && (O = re);
        break;
      }
      e && O && Y.alternate === null && t(S, O), P = l(Y, P, Z), f === null ? k = Y : f.sibling = Y, f = Y, O = re;
    }
    if (Z === x.length)
      return n(S, O), Be && ii(S, Z), k;
    if (O === null) {
      for (; Z < x.length; Z++)
        O = v(S, x[Z], $), O !== null && (P = l(O, P, Z), f === null ? k = O : f.sibling = O, f = O);
      return Be && ii(S, Z), k;
    }
    for (O = i(S, O); Z < x.length; Z++)
      re = A(O, S, Z, x[Z], $), re !== null && (e && re.alternate !== null && O.delete(re.key === null ? Z : re.key), P = l(re, P, Z), f === null ? k = re : f.sibling = re, f = re);
    return e && O.forEach(function(ce) {
      return t(S, ce);
    }), Be && ii(S, Z), k;
  }
  function T(S, P, x, $) {
    var k = ca(x);
    if (typeof k != "function")
      throw Error(V(150));
    if (x = k.call(x), x == null)
      throw Error(V(151));
    for (var f = k = null, O = P, Z = P = 0, re = null, Y = x.next(); O !== null && !Y.done; Z++, Y = x.next()) {
      O.index > Z ? (re = O, O = null) : re = O.sibling;
      var ce = h(S, O, Y.value, $);
      if (ce === null) {
        O === null && (O = re);
        break;
      }
      e && O && ce.alternate === null && t(S, O), P = l(ce, P, Z), f === null ? k = ce : f.sibling = ce, f = ce, O = re;
    }
    if (Y.done)
      return n(
        S,
        O
      ), Be && ii(S, Z), k;
    if (O === null) {
      for (; !Y.done; Z++, Y = x.next())
        Y = v(S, Y.value, $), Y !== null && (P = l(Y, P, Z), f === null ? k = Y : f.sibling = Y, f = Y);
      return Be && ii(S, Z), k;
    }
    for (O = i(S, O); !Y.done; Z++, Y = x.next())
      Y = A(O, S, Z, Y.value, $), Y !== null && (e && Y.alternate !== null && O.delete(Y.key === null ? Z : Y.key), P = l(Y, P, Z), f === null ? k = Y : f.sibling = Y, f = Y);
    return e && O.forEach(function(Ee) {
      return t(S, Ee);
    }), Be && ii(S, Z), k;
  }
  function j(S, P, x, $) {
    if (typeof x == "object" && x !== null && x.type === Xi && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Zs:
          e: {
            for (var k = x.key, f = P; f !== null; ) {
              if (f.key === k) {
                if (k = x.type, k === Xi) {
                  if (f.tag === 7) {
                    n(S, f.sibling), P = a(f, x.props.children), P.return = S, S = P;
                    break e;
                  }
                } else if (f.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Lr && bm(k) === f.type) {
                  n(S, f.sibling), P = a(f, x.props), P.ref = ma(S, f, x), P.return = S, S = P;
                  break e;
                }
                n(S, f);
                break;
              } else
                t(S, f);
              f = f.sibling;
            }
            x.type === Xi ? (P = di(x.props.children, S.mode, $, x.key), P.return = S, S = P) : ($ = yl(x.type, x.key, x.props, null, S.mode, $), $.ref = ma(S, P, x), $.return = S, S = $);
          }
          return c(S);
        case Qi:
          e: {
            for (f = x.key; P !== null; ) {
              if (P.key === f)
                if (P.tag === 4 && P.stateNode.containerInfo === x.containerInfo && P.stateNode.implementation === x.implementation) {
                  n(S, P.sibling), P = a(P, x.children || []), P.return = S, S = P;
                  break e;
                } else {
                  n(S, P);
                  break;
                }
              else
                t(S, P);
              P = P.sibling;
            }
            P = of(x, S.mode, $), P.return = S, S = P;
          }
          return c(S);
        case Lr:
          return f = x._init, j(S, P, f(x._payload), $);
      }
      if (va(x))
        return b(S, P, x, $);
      if (ca(x))
        return T(S, P, x, $);
      Xs(S, x);
    }
    return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, P !== null && P.tag === 6 ? (n(S, P.sibling), P = a(P, x), P.return = S, S = P) : (n(S, P), P = rf(x, S.mode, $), P.return = S, S = P), c(S)) : n(S, P);
  }
  return j;
}
var ko = uy(!0), cy = uy(!1), Fl = Vr(null), Zl = null, so = null, ih = null;
function oh() {
  ih = so = Zl = null;
}
function ah(e) {
  var t = Fl.current;
  Ie(Fl), e._currentValue = t;
}
function Hf(e, t, n) {
  for (; e !== null; ) {
    var i = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function wo(e, t) {
  Zl = e, ih = so = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Vt = !0), e.firstContext = null);
}
function vn(e) {
  var t = e._currentValue;
  if (ih !== e)
    if (e = { context: e, memoizedValue: t, next: null }, so === null) {
      if (Zl === null)
        throw Error(V(308));
      so = e, Zl.dependencies = { lanes: 0, firstContext: e };
    } else
      so = so.next = e;
  return t;
}
var li = null;
function sh(e) {
  li === null ? li = [e] : li.push(e);
}
function fy(e, t, n, i) {
  var a = t.interleaved;
  return a === null ? (n.next = n, sh(t)) : (n.next = a.next, a.next = n), t.interleaved = n, hr(e, i);
}
function hr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Tr = !1;
function lh(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function dy(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function ur(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function $r(e, t, n) {
  var i = e.updateQueue;
  if (i === null)
    return null;
  if (i = i.shared, Le & 2) {
    var a = i.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), i.pending = t, hr(e, n);
  }
  return a = i.interleaved, a === null ? (t.next = t, sh(i)) : (t.next = a.next, a.next = t), i.interleaved = t, hr(e, n);
}
function dl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var i = t.lanes;
    i &= e.pendingLanes, n |= i, t.lanes = n, Gd(e, n);
  }
}
function Mm(e, t) {
  var n = e.updateQueue, i = e.alternate;
  if (i !== null && (i = i.updateQueue, n === i)) {
    var a = null, l = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var c = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        l === null ? a = l = c : l = l.next = c, n = n.next;
      } while (n !== null);
      l === null ? a = l = t : l = l.next = t;
    } else
      a = l = t;
    n = { baseState: i.baseState, firstBaseUpdate: a, lastBaseUpdate: l, shared: i.shared, effects: i.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Vl(e, t, n, i) {
  var a = e.updateQueue;
  Tr = !1;
  var l = a.firstBaseUpdate, c = a.lastBaseUpdate, p = a.shared.pending;
  if (p !== null) {
    a.shared.pending = null;
    var m = p, _ = m.next;
    m.next = null, c === null ? l = _ : c.next = _, c = m;
    var y = e.alternate;
    y !== null && (y = y.updateQueue, p = y.lastBaseUpdate, p !== c && (p === null ? y.firstBaseUpdate = _ : p.next = _, y.lastBaseUpdate = m));
  }
  if (l !== null) {
    var v = a.baseState;
    c = 0, y = _ = m = null, p = l;
    do {
      var h = p.lane, A = p.eventTime;
      if ((i & h) === h) {
        y !== null && (y = y.next = {
          eventTime: A,
          lane: 0,
          tag: p.tag,
          payload: p.payload,
          callback: p.callback,
          next: null
        });
        e: {
          var b = e, T = p;
          switch (h = t, A = n, T.tag) {
            case 1:
              if (b = T.payload, typeof b == "function") {
                v = b.call(A, v, h);
                break e;
              }
              v = b;
              break e;
            case 3:
              b.flags = b.flags & -65537 | 128;
            case 0:
              if (b = T.payload, h = typeof b == "function" ? b.call(A, v, h) : b, h == null)
                break e;
              v = Ve({}, v, h);
              break e;
            case 2:
              Tr = !0;
          }
        }
        p.callback !== null && p.lane !== 0 && (e.flags |= 64, h = a.effects, h === null ? a.effects = [p] : h.push(p));
      } else
        A = { eventTime: A, lane: h, tag: p.tag, payload: p.payload, callback: p.callback, next: null }, y === null ? (_ = y = A, m = v) : y = y.next = A, c |= h;
      if (p = p.next, p === null) {
        if (p = a.shared.pending, p === null)
          break;
        h = p, p = h.next, h.next = null, a.lastBaseUpdate = h, a.shared.pending = null;
      }
    } while (1);
    if (y === null && (m = v), a.baseState = m, a.firstBaseUpdate = _, a.lastBaseUpdate = y, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        c |= a.lane, a = a.next;
      while (a !== t);
    } else
      l === null && (a.shared.lanes = 0);
    vi |= c, e.lanes = c, e.memoizedState = v;
  }
}
function Am(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var i = e[t], a = i.callback;
      if (a !== null) {
        if (i.callback = null, i = n, typeof a != "function")
          throw Error(V(191, a));
        a.call(i);
      }
    }
}
var gs = {}, Gn = Vr(gs), Ga = Vr(gs), Ka = Vr(gs);
function ui(e) {
  if (e === gs)
    throw Error(V(174));
  return e;
}
function uh(e, t) {
  switch (Ae(Ka, t), Ae(Ga, e), Ae(Gn, gs), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Tf(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Tf(t, e);
  }
  Ie(Gn), Ae(Gn, t);
}
function bo() {
  Ie(Gn), Ie(Ga), Ie(Ka);
}
function hy(e) {
  ui(Ka.current);
  var t = ui(Gn.current), n = Tf(t, e.type);
  t !== n && (Ae(Ga, e), Ae(Gn, n));
}
function ch(e) {
  Ga.current === e && (Ie(Gn), Ie(Ga));
}
var je = Vr(0);
function Ul(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Yc = [];
function fh() {
  for (var e = 0; e < Yc.length; e++)
    Yc[e]._workInProgressVersionPrimary = null;
  Yc.length = 0;
}
var hl = mr.ReactCurrentDispatcher, Qc = mr.ReactCurrentBatchConfig, yi = 0, Ze = null, ot = null, dt = null, Wl = !1, ka = !1, Ja = 0, bE = 0;
function Et() {
  throw Error(V(321));
}
function dh(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!zn(e[n], t[n]))
      return !1;
  return !0;
}
function hh(e, t, n, i, a, l) {
  if (yi = l, Ze = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, hl.current = e === null || e.memoizedState === null ? NE : $E, e = n(i, a), ka) {
    l = 0;
    do {
      if (ka = !1, Ja = 0, 25 <= l)
        throw Error(V(301));
      l += 1, dt = ot = null, t.updateQueue = null, hl.current = IE, e = n(i, a);
    } while (ka);
  }
  if (hl.current = Hl, t = ot !== null && ot.next !== null, yi = 0, dt = ot = Ze = null, Wl = !1, t)
    throw Error(V(300));
  return e;
}
function ph() {
  var e = Ja !== 0;
  return Ja = 0, e;
}
function Fn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return dt === null ? Ze.memoizedState = dt = e : dt = dt.next = e, dt;
}
function wn() {
  if (ot === null) {
    var e = Ze.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = ot.next;
  var t = dt === null ? Ze.memoizedState : dt.next;
  if (t !== null)
    dt = t, ot = e;
  else {
    if (e === null)
      throw Error(V(310));
    ot = e, e = { memoizedState: ot.memoizedState, baseState: ot.baseState, baseQueue: ot.baseQueue, queue: ot.queue, next: null }, dt === null ? Ze.memoizedState = dt = e : dt = dt.next = e;
  }
  return dt;
}
function qa(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xc(e) {
  var t = wn(), n = t.queue;
  if (n === null)
    throw Error(V(311));
  n.lastRenderedReducer = e;
  var i = ot, a = i.baseQueue, l = n.pending;
  if (l !== null) {
    if (a !== null) {
      var c = a.next;
      a.next = l.next, l.next = c;
    }
    i.baseQueue = a = l, n.pending = null;
  }
  if (a !== null) {
    l = a.next, i = i.baseState;
    var p = c = null, m = null, _ = l;
    do {
      var y = _.lane;
      if ((yi & y) === y)
        m !== null && (m = m.next = { lane: 0, action: _.action, hasEagerState: _.hasEagerState, eagerState: _.eagerState, next: null }), i = _.hasEagerState ? _.eagerState : e(i, _.action);
      else {
        var v = {
          lane: y,
          action: _.action,
          hasEagerState: _.hasEagerState,
          eagerState: _.eagerState,
          next: null
        };
        m === null ? (p = m = v, c = i) : m = m.next = v, Ze.lanes |= y, vi |= y;
      }
      _ = _.next;
    } while (_ !== null && _ !== l);
    m === null ? c = i : m.next = p, zn(i, t.memoizedState) || (Vt = !0), t.memoizedState = i, t.baseState = c, t.baseQueue = m, n.lastRenderedState = i;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      l = a.lane, Ze.lanes |= l, vi |= l, a = a.next;
    while (a !== e);
  } else
    a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ef(e) {
  var t = wn(), n = t.queue;
  if (n === null)
    throw Error(V(311));
  n.lastRenderedReducer = e;
  var i = n.dispatch, a = n.pending, l = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var c = a = a.next;
    do
      l = e(l, c.action), c = c.next;
    while (c !== a);
    zn(l, t.memoizedState) || (Vt = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
  }
  return [l, i];
}
function py() {
}
function my(e, t) {
  var n = Ze, i = wn(), a = t(), l = !zn(i.memoizedState, a);
  if (l && (i.memoizedState = a, Vt = !0), i = i.queue, mh(yy.bind(null, n, i, e), [e]), i.getSnapshot !== t || l || dt !== null && dt.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ya(9, _y.bind(null, n, i, a, t), void 0, null), ht === null)
      throw Error(V(349));
    yi & 30 || gy(n, t, a);
  }
  return a;
}
function gy(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ze.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ze.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function _y(e, t, n, i) {
  t.value = n, t.getSnapshot = i, vy(t) && wy(e);
}
function yy(e, t, n) {
  return n(function() {
    vy(t) && wy(e);
  });
}
function vy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !zn(e, n);
  } catch {
    return !0;
  }
}
function wy(e) {
  var t = hr(e, 1);
  t !== null && An(t, e, 1, -1);
}
function zm(e) {
  var t = Fn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qa, lastRenderedState: e }, t.queue = e, e = e.dispatch = zE.bind(null, Ze, e), [t.memoizedState, e];
}
function Ya(e, t, n, i) {
  return e = { tag: e, create: t, destroy: n, deps: i, next: null }, t = Ze.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ze.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e)), e;
}
function Py() {
  return wn().memoizedState;
}
function pl(e, t, n, i) {
  var a = Fn();
  Ze.flags |= e, a.memoizedState = Ya(1 | t, n, void 0, i === void 0 ? null : i);
}
function Ju(e, t, n, i) {
  var a = wn();
  i = i === void 0 ? null : i;
  var l = void 0;
  if (ot !== null) {
    var c = ot.memoizedState;
    if (l = c.destroy, i !== null && dh(i, c.deps)) {
      a.memoizedState = Ya(t, n, l, i);
      return;
    }
  }
  Ze.flags |= e, a.memoizedState = Ya(1 | t, n, l, i);
}
function Nm(e, t) {
  return pl(8390656, 8, e, t);
}
function mh(e, t) {
  return Ju(2048, 8, e, t);
}
function xy(e, t) {
  return Ju(4, 2, e, t);
}
function Sy(e, t) {
  return Ju(4, 4, e, t);
}
function Ey(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Ly(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ju(4, 4, Ey.bind(null, t, e), n);
}
function gh() {
}
function Ty(e, t) {
  var n = wn();
  t = t === void 0 ? null : t;
  var i = n.memoizedState;
  return i !== null && t !== null && dh(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
}
function Oy(e, t) {
  var n = wn();
  t = t === void 0 ? null : t;
  var i = n.memoizedState;
  return i !== null && t !== null && dh(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Cy(e, t, n) {
  return yi & 21 ? (zn(n, t) || (n = z_(), Ze.lanes |= n, vi |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Vt = !0), e.memoizedState = n);
}
function ME(e, t) {
  var n = be;
  be = n !== 0 && 4 > n ? n : 4, e(!0);
  var i = Qc.transition;
  Qc.transition = {};
  try {
    e(!1), t();
  } finally {
    be = n, Qc.transition = i;
  }
}
function ky() {
  return wn().memoizedState;
}
function AE(e, t, n) {
  var i = Rr(e);
  if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, by(e))
    My(t, n);
  else if (n = fy(e, t, n, i), n !== null) {
    var a = zt();
    An(n, e, i, a), Ay(n, t, i);
  }
}
function zE(e, t, n) {
  var i = Rr(e), a = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (by(e))
    My(t, a);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null))
      try {
        var c = t.lastRenderedState, p = l(c, n);
        if (a.hasEagerState = !0, a.eagerState = p, zn(p, c)) {
          var m = t.interleaved;
          m === null ? (a.next = a, sh(t)) : (a.next = m.next, m.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
    n = fy(e, t, a, i), n !== null && (a = zt(), An(n, e, i, a), Ay(n, t, i));
  }
}
function by(e) {
  var t = e.alternate;
  return e === Ze || t !== null && t === Ze;
}
function My(e, t) {
  ka = Wl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ay(e, t, n) {
  if (n & 4194240) {
    var i = t.lanes;
    i &= e.pendingLanes, n |= i, t.lanes = n, Gd(e, n);
  }
}
var Hl = { readContext: vn, useCallback: Et, useContext: Et, useEffect: Et, useImperativeHandle: Et, useInsertionEffect: Et, useLayoutEffect: Et, useMemo: Et, useReducer: Et, useRef: Et, useState: Et, useDebugValue: Et, useDeferredValue: Et, useTransition: Et, useMutableSource: Et, useSyncExternalStore: Et, useId: Et, unstable_isNewReconciler: !1 }, NE = { readContext: vn, useCallback: function(e, t) {
  return Fn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: vn, useEffect: Nm, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, pl(
    4194308,
    4,
    Ey.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return pl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return pl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Fn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var i = Fn();
  return t = n !== void 0 ? n(t) : t, i.memoizedState = i.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, i.queue = e, e = e.dispatch = AE.bind(null, Ze, e), [i.memoizedState, e];
}, useRef: function(e) {
  var t = Fn();
  return e = { current: e }, t.memoizedState = e;
}, useState: zm, useDebugValue: gh, useDeferredValue: function(e) {
  return Fn().memoizedState = e;
}, useTransition: function() {
  var e = zm(!1), t = e[0];
  return e = ME.bind(null, e[1]), Fn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var i = Ze, a = Fn();
  if (Be) {
    if (n === void 0)
      throw Error(V(407));
    n = n();
  } else {
    if (n = t(), ht === null)
      throw Error(V(349));
    yi & 30 || gy(i, t, n);
  }
  a.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return a.queue = l, Nm(yy.bind(
    null,
    i,
    l,
    e
  ), [e]), i.flags |= 2048, Ya(9, _y.bind(null, i, l, n, t), void 0, null), n;
}, useId: function() {
  var e = Fn(), t = ht.identifierPrefix;
  if (Be) {
    var n = lr, i = sr;
    n = (i & ~(1 << 32 - Mn(i) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ja++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = bE++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, $E = {
  readContext: vn,
  useCallback: Ty,
  useContext: vn,
  useEffect: mh,
  useImperativeHandle: Ly,
  useInsertionEffect: xy,
  useLayoutEffect: Sy,
  useMemo: Oy,
  useReducer: Xc,
  useRef: Py,
  useState: function() {
    return Xc(qa);
  },
  useDebugValue: gh,
  useDeferredValue: function(e) {
    var t = wn();
    return Cy(t, ot.memoizedState, e);
  },
  useTransition: function() {
    var e = Xc(qa)[0], t = wn().memoizedState;
    return [e, t];
  },
  useMutableSource: py,
  useSyncExternalStore: my,
  useId: ky,
  unstable_isNewReconciler: !1
}, IE = { readContext: vn, useCallback: Ty, useContext: vn, useEffect: mh, useImperativeHandle: Ly, useInsertionEffect: xy, useLayoutEffect: Sy, useMemo: Oy, useReducer: ef, useRef: Py, useState: function() {
  return ef(qa);
}, useDebugValue: gh, useDeferredValue: function(e) {
  var t = wn();
  return ot === null ? t.memoizedState = e : Cy(t, ot.memoizedState, e);
}, useTransition: function() {
  var e = ef(qa)[0], t = wn().memoizedState;
  return [e, t];
}, useMutableSource: py, useSyncExternalStore: my, useId: ky, unstable_isNewReconciler: !1 };
function Cn(e, t) {
  if (e && e.defaultProps) {
    t = Ve({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Gf(e, t, n, i) {
  t = e.memoizedState, n = n(i, t), n = n == null ? t : Ve({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var qu = { isMounted: function(e) {
  return (e = e._reactInternals) ? Si(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var i = zt(), a = Rr(e), l = ur(i, a);
  l.payload = t, n != null && (l.callback = n), t = $r(e, l, a), t !== null && (An(t, e, a, i), dl(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var i = zt(), a = Rr(e), l = ur(i, a);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = $r(e, l, a), t !== null && (An(t, e, a, i), dl(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = zt(), i = Rr(e), a = ur(n, i);
  a.tag = 2, t != null && (a.callback = t), t = $r(e, a, i), t !== null && (An(t, e, i, n), dl(t, e, i));
} };
function $m(e, t, n, i, a, l, c) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, l, c) : t.prototype && t.prototype.isPureReactComponent ? !Va(n, i) || !Va(a, l) : !0;
}
function zy(e, t, n) {
  var i = !1, a = Fr, l = t.contextType;
  return typeof l == "object" && l !== null ? l = vn(l) : (a = Wt(t) ? gi : Ct.current, i = t.contextTypes, l = (i = i != null) ? Oo(e, a) : Fr), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = qu, e.stateNode = t, t._reactInternals = e, i && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function Im(e, t, n, i) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && qu.enqueueReplaceState(t, t.state, null);
}
function Kf(e, t, n, i) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, lh(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? a.context = vn(l) : (l = Wt(t) ? gi : Ct.current, a.context = Oo(e, l)), a.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Gf(e, t, l, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && qu.enqueueReplaceState(a, a.state, null), Vl(e, n, a, i), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function Mo(e, t) {
  try {
    var n = "", i = t;
    do
      n += cS(i), i = i.return;
    while (i);
    var a = n;
  } catch (l) {
    a = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function tf(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Jf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var RE = typeof WeakMap == "function" ? WeakMap : Map;
function Ny(e, t, n) {
  n = ur(-1, n), n.tag = 3, n.payload = { element: null };
  var i = t.value;
  return n.callback = function() {
    Kl || (Kl = !0, od = i), Jf(e, t);
  }, n;
}
function $y(e, t, n) {
  n = ur(-1, n), n.tag = 3;
  var i = e.type.getDerivedStateFromError;
  if (typeof i == "function") {
    var a = t.value;
    n.payload = function() {
      return i(a);
    }, n.callback = function() {
      Jf(e, t);
    };
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    Jf(e, t), typeof i != "function" && (Ir === null ? Ir = /* @__PURE__ */ new Set([this]) : Ir.add(this));
    var c = t.stack;
    this.componentDidCatch(t.value, { componentStack: c !== null ? c : "" });
  }), n;
}
function Rm(e, t, n) {
  var i = e.pingCache;
  if (i === null) {
    i = e.pingCache = new RE();
    var a = /* @__PURE__ */ new Set();
    i.set(t, a);
  } else
    a = i.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), i.set(t, a));
  a.has(n) || (a.add(n), e = YE.bind(null, e, t, n), t.then(e, e));
}
function Bm(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Dm(e, t, n, i, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ur(-1, 1), t.tag = 2, $r(n, t, 1))), n.lanes |= 1), e);
}
var BE = mr.ReactCurrentOwner, Vt = !1;
function At(e, t, n, i) {
  t.child = e === null ? cy(t, null, n, i) : ko(t, e.child, n, i);
}
function jm(e, t, n, i, a) {
  n = n.render;
  var l = t.ref;
  return wo(t, a), i = hh(e, t, n, i, l, a), n = ph(), e !== null && !Vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, pr(e, t, a)) : (Be && n && th(t), t.flags |= 1, At(e, t, i, a), t.child);
}
function Fm(e, t, n, i, a) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !Eh(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Iy(e, t, l, i, a)) : (e = yl(n.type, null, i, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & a)) {
    var c = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Va, n(c, i) && e.ref === t.ref)
      return pr(e, t, a);
  }
  return t.flags |= 1, e = Br(l, i), e.ref = t.ref, e.return = t, t.child = e;
}
function Iy(e, t, n, i, a) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Va(l, i) && e.ref === t.ref)
      if (Vt = !1, t.pendingProps = i = l, (e.lanes & a) !== 0)
        e.flags & 131072 && (Vt = !0);
      else
        return t.lanes = e.lanes, pr(e, t, a);
  }
  return qf(e, t, n, i, a);
}
function Ry(e, t, n) {
  var i = t.pendingProps, a = i.children, l = e !== null ? e.memoizedState : null;
  if (i.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ae(uo, Yt), Yt |= n;
    else {
      if (!(n & 1073741824))
        return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ae(uo, Yt), Yt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = l !== null ? l.baseLanes : n, Ae(uo, Yt), Yt |= i;
    }
  else
    l !== null ? (i = l.baseLanes | n, t.memoizedState = null) : i = n, Ae(uo, Yt), Yt |= i;
  return At(e, t, a, n), t.child;
}
function By(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function qf(e, t, n, i, a) {
  var l = Wt(n) ? gi : Ct.current;
  return l = Oo(t, l), wo(t, a), n = hh(e, t, n, i, l, a), i = ph(), e !== null && !Vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, pr(e, t, a)) : (Be && i && th(t), t.flags |= 1, At(e, t, n, a), t.child);
}
function Zm(e, t, n, i, a) {
  if (Wt(n)) {
    var l = !0;
    Bl(t);
  } else
    l = !1;
  if (wo(t, a), t.stateNode === null)
    ml(e, t), zy(t, n, i), Kf(t, n, i, a), i = !0;
  else if (e === null) {
    var c = t.stateNode, p = t.memoizedProps;
    c.props = p;
    var m = c.context, _ = n.contextType;
    typeof _ == "object" && _ !== null ? _ = vn(_) : (_ = Wt(n) ? gi : Ct.current, _ = Oo(t, _));
    var y = n.getDerivedStateFromProps, v = typeof y == "function" || typeof c.getSnapshotBeforeUpdate == "function";
    v || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (p !== i || m !== _) && Im(t, c, i, _), Tr = !1;
    var h = t.memoizedState;
    c.state = h, Vl(t, i, c, a), m = t.memoizedState, p !== i || h !== m || Ut.current || Tr ? (typeof y == "function" && (Gf(t, n, y, i), m = t.memoizedState), (p = Tr || $m(t, n, p, i, h, m, _)) ? (v || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = m), c.props = i, c.state = m, c.context = _, i = p) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
  } else {
    c = t.stateNode, dy(e, t), p = t.memoizedProps, _ = t.type === t.elementType ? p : Cn(t.type, p), c.props = _, v = t.pendingProps, h = c.context, m = n.contextType, typeof m == "object" && m !== null ? m = vn(m) : (m = Wt(n) ? gi : Ct.current, m = Oo(t, m));
    var A = n.getDerivedStateFromProps;
    (y = typeof A == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (p !== v || h !== m) && Im(t, c, i, m), Tr = !1, h = t.memoizedState, c.state = h, Vl(t, i, c, a);
    var b = t.memoizedState;
    p !== v || h !== b || Ut.current || Tr ? (typeof A == "function" && (Gf(t, n, A, i), b = t.memoizedState), (_ = Tr || $m(t, n, _, i, h, b, m) || !1) ? (y || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(i, b, m), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(i, b, m)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = b), c.props = i, c.state = b, c.context = m, i = _) : (typeof c.componentDidUpdate != "function" || p === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), i = !1);
  }
  return Yf(e, t, n, i, l, a);
}
function Yf(e, t, n, i, a, l) {
  By(e, t);
  var c = (t.flags & 128) !== 0;
  if (!i && !c)
    return a && Om(t, n, !1), pr(e, t, l);
  i = t.stateNode, BE.current = t;
  var p = c && typeof n.getDerivedStateFromError != "function" ? null : i.render();
  return t.flags |= 1, e !== null && c ? (t.child = ko(t, e.child, null, l), t.child = ko(t, null, p, l)) : At(e, t, p, l), t.memoizedState = i.state, a && Om(t, n, !0), t.child;
}
function Dy(e) {
  var t = e.stateNode;
  t.pendingContext ? Tm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Tm(e, t.context, !1), uh(e, t.containerInfo);
}
function Vm(e, t, n, i, a) {
  return Co(), rh(a), t.flags |= 256, At(e, t, n, i), t.child;
}
var Qf = { dehydrated: null, treeContext: null, retryLane: 0 };
function Xf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function jy(e, t, n) {
  var i = t.pendingProps, a = je.current, l = !1, c = (t.flags & 128) !== 0, p;
  if ((p = c) || (p = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), p ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), Ae(je, a & 1), e === null)
    return Wf(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (c = i.children, e = i.fallback, l ? (i = t.mode, l = t.child, c = { mode: "hidden", children: c }, !(i & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = c) : l = Xu(c, i, 0, null), e = di(e, i, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Xf(n), t.memoizedState = Qf, e) : _h(t, c));
  if (a = e.memoizedState, a !== null && (p = a.dehydrated, p !== null))
    return DE(e, t, c, i, p, a, n);
  if (l) {
    l = i.fallback, c = t.mode, a = e.child, p = a.sibling;
    var m = { mode: "hidden", children: i.children };
    return !(c & 1) && t.child !== a ? (i = t.child, i.childLanes = 0, i.pendingProps = m, t.deletions = null) : (i = Br(a, m), i.subtreeFlags = a.subtreeFlags & 14680064), p !== null ? l = Br(p, l) : (l = di(l, c, n, null), l.flags |= 2), l.return = t, i.return = t, i.sibling = l, t.child = i, i = l, l = t.child, c = e.child.memoizedState, c = c === null ? Xf(n) : { baseLanes: c.baseLanes | n, cachePool: null, transitions: c.transitions }, l.memoizedState = c, l.childLanes = e.childLanes & ~n, t.memoizedState = Qf, i;
  }
  return l = e.child, e = l.sibling, i = Br(l, { mode: "visible", children: i.children }), !(t.mode & 1) && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i;
}
function _h(e, t) {
  return t = Xu({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function el(e, t, n, i) {
  return i !== null && rh(i), ko(t, e.child, null, n), e = _h(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function DE(e, t, n, i, a, l, c) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, i = tf(Error(V(422))), el(e, t, c, i)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = i.fallback, a = t.mode, i = Xu({ mode: "visible", children: i.children }, a, 0, null), l = di(l, a, c, null), l.flags |= 2, i.return = t, l.return = t, i.sibling = l, t.child = i, t.mode & 1 && ko(t, e.child, null, c), t.child.memoizedState = Xf(c), t.memoizedState = Qf, l);
  if (!(t.mode & 1))
    return el(e, t, c, null);
  if (a.data === "$!") {
    if (i = a.nextSibling && a.nextSibling.dataset, i)
      var p = i.dgst;
    return i = p, l = Error(V(419)), i = tf(l, i, void 0), el(e, t, c, i);
  }
  if (p = (c & e.childLanes) !== 0, Vt || p) {
    if (i = ht, i !== null) {
      switch (c & -c) {
        case 4:
          a = 2;
          break;
        case 16:
          a = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          a = 32;
          break;
        case 536870912:
          a = 268435456;
          break;
        default:
          a = 0;
      }
      a = a & (i.suspendedLanes | c) ? 0 : a, a !== 0 && a !== l.retryLane && (l.retryLane = a, hr(e, a), An(i, e, a, -1));
    }
    return Sh(), i = tf(Error(V(421))), el(e, t, c, i);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = QE.bind(null, e), a._reactRetry = t, null) : (e = l.treeContext, Xt = Nr(a.nextSibling), tn = t, Be = !0, bn = null, e !== null && (mn[gn++] = sr, mn[gn++] = lr, mn[gn++] = _i, sr = e.id, lr = e.overflow, _i = t), t = _h(t, i.children), t.flags |= 4096, t);
}
function Um(e, t, n) {
  e.lanes |= t;
  var i = e.alternate;
  i !== null && (i.lanes |= t), Hf(e.return, t, n);
}
function nf(e, t, n, i, a) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: a } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = i, l.tail = n, l.tailMode = a);
}
function Fy(e, t, n) {
  var i = t.pendingProps, a = i.revealOrder, l = i.tail;
  if (At(e, t, i.children, n), i = je.current, i & 2)
    i = i & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Um(e, n, t);
          else if (e.tag === 19)
            Um(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    i &= 1;
  }
  if (Ae(je, i), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; )
          e = n.alternate, e !== null && Ul(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), nf(t, !1, a, n, l);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Ul(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        nf(t, !0, n, null, l);
        break;
      case "together":
        nf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ml(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function pr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), vi |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(V(153));
  if (t.child !== null) {
    for (e = t.child, n = Br(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Br(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function jE(e, t, n) {
  switch (t.tag) {
    case 3:
      Dy(t), Co();
      break;
    case 5:
      hy(t);
      break;
    case 1:
      Wt(t.type) && Bl(t);
      break;
    case 4:
      uh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var i = t.type._context, a = t.memoizedProps.value;
      Ae(Fl, i._currentValue), i._currentValue = a;
      break;
    case 13:
      if (i = t.memoizedState, i !== null)
        return i.dehydrated !== null ? (Ae(je, je.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? jy(e, t, n) : (Ae(je, je.current & 1), e = pr(e, t, n), e !== null ? e.sibling : null);
      Ae(je, je.current & 1);
      break;
    case 19:
      if (i = (n & t.childLanes) !== 0, e.flags & 128) {
        if (i)
          return Fy(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Ae(je, je.current), i)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ry(e, t, n);
  }
  return pr(e, t, n);
}
var Zy, ed, Vy, Uy;
Zy = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
ed = function() {
};
Vy = function(e, t, n, i) {
  var a = e.memoizedProps;
  if (a !== i) {
    e = t.stateNode, ui(Gn.current);
    var l = null;
    switch (n) {
      case "input":
        a = xf(e, a), i = xf(e, i), l = [];
        break;
      case "select":
        a = Ve({}, a, { value: void 0 }), i = Ve({}, i, { value: void 0 }), l = [];
        break;
      case "textarea":
        a = Lf(e, a), i = Lf(e, i), l = [];
        break;
      default:
        typeof a.onClick != "function" && typeof i.onClick == "function" && (e.onclick = Il);
    }
    Of(n, i);
    var c;
    n = null;
    for (_ in a)
      if (!i.hasOwnProperty(_) && a.hasOwnProperty(_) && a[_] != null)
        if (_ === "style") {
          var p = a[_];
          for (c in p)
            p.hasOwnProperty(c) && (n || (n = {}), n[c] = "");
        } else
          _ !== "dangerouslySetInnerHTML" && _ !== "children" && _ !== "suppressContentEditableWarning" && _ !== "suppressHydrationWarning" && _ !== "autoFocus" && (Ia.hasOwnProperty(_) ? l || (l = []) : (l = l || []).push(_, null));
    for (_ in i) {
      var m = i[_];
      if (p = a != null ? a[_] : void 0, i.hasOwnProperty(_) && m !== p && (m != null || p != null))
        if (_ === "style")
          if (p) {
            for (c in p)
              !p.hasOwnProperty(c) || m && m.hasOwnProperty(c) || (n || (n = {}), n[c] = "");
            for (c in m)
              m.hasOwnProperty(c) && p[c] !== m[c] && (n || (n = {}), n[c] = m[c]);
          } else
            n || (l || (l = []), l.push(
              _,
              n
            )), n = m;
        else
          _ === "dangerouslySetInnerHTML" ? (m = m ? m.__html : void 0, p = p ? p.__html : void 0, m != null && p !== m && (l = l || []).push(_, m)) : _ === "children" ? typeof m != "string" && typeof m != "number" || (l = l || []).push(_, "" + m) : _ !== "suppressContentEditableWarning" && _ !== "suppressHydrationWarning" && (Ia.hasOwnProperty(_) ? (m != null && _ === "onScroll" && $e("scroll", e), l || p === m || (l = [])) : (l = l || []).push(_, m));
    }
    n && (l = l || []).push("style", n);
    var _ = l;
    (t.updateQueue = _) && (t.flags |= 4);
  }
};
Uy = function(e, t, n, i) {
  n !== i && (t.flags |= 4);
};
function ga(e, t) {
  if (!Be)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var i = null; n !== null; )
          n.alternate !== null && (i = n), n = n.sibling;
        i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
    }
}
function Lt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, i = 0;
  if (t)
    for (var a = e.child; a !== null; )
      n |= a.lanes | a.childLanes, i |= a.subtreeFlags & 14680064, i |= a.flags & 14680064, a.return = e, a = a.sibling;
  else
    for (a = e.child; a !== null; )
      n |= a.lanes | a.childLanes, i |= a.subtreeFlags, i |= a.flags, a.return = e, a = a.sibling;
  return e.subtreeFlags |= i, e.childLanes = n, t;
}
function FE(e, t, n) {
  var i = t.pendingProps;
  switch (nh(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Lt(t), null;
    case 1:
      return Wt(t.type) && Rl(), Lt(t), null;
    case 3:
      return i = t.stateNode, bo(), Ie(Ut), Ie(Ct), fh(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Qs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, bn !== null && (ld(bn), bn = null))), ed(e, t), Lt(t), null;
    case 5:
      ch(t);
      var a = ui(Ka.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Vy(e, t, n, i, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!i) {
          if (t.stateNode === null)
            throw Error(V(166));
          return Lt(t), null;
        }
        if (e = ui(Gn.current), Qs(t)) {
          i = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (i[Un] = t, i[Ha] = l, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              $e("cancel", i), $e("close", i);
              break;
            case "iframe":
            case "object":
            case "embed":
              $e("load", i);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Pa.length; a++)
                $e(Pa[a], i);
              break;
            case "source":
              $e("error", i);
              break;
            case "img":
            case "image":
            case "link":
              $e(
                "error",
                i
              ), $e("load", i);
              break;
            case "details":
              $e("toggle", i);
              break;
            case "input":
              Xp(i, l), $e("invalid", i);
              break;
            case "select":
              i._wrapperState = { wasMultiple: !!l.multiple }, $e("invalid", i);
              break;
            case "textarea":
              tm(i, l), $e("invalid", i);
          }
          Of(n, l), a = null;
          for (var c in l)
            if (l.hasOwnProperty(c)) {
              var p = l[c];
              c === "children" ? typeof p == "string" ? i.textContent !== p && (l.suppressHydrationWarning !== !0 && Ys(i.textContent, p, e), a = ["children", p]) : typeof p == "number" && i.textContent !== "" + p && (l.suppressHydrationWarning !== !0 && Ys(
                i.textContent,
                p,
                e
              ), a = ["children", "" + p]) : Ia.hasOwnProperty(c) && p != null && c === "onScroll" && $e("scroll", i);
            }
          switch (n) {
            case "input":
              Vs(i), em(i, l, !0);
              break;
            case "textarea":
              Vs(i), nm(i);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (i.onclick = Il);
          }
          i = a, t.updateQueue = i, i !== null && (t.flags |= 4);
        } else {
          c = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = y_(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = c.createElement(n, { is: i.is }) : (e = c.createElement(n), n === "select" && (c = e, i.multiple ? c.multiple = !0 : i.size && (c.size = i.size))) : e = c.createElementNS(e, n), e[Un] = t, e[Ha] = i, Zy(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (c = Cf(n, i), n) {
              case "dialog":
                $e("cancel", e), $e("close", e), a = i;
                break;
              case "iframe":
              case "object":
              case "embed":
                $e("load", e), a = i;
                break;
              case "video":
              case "audio":
                for (a = 0; a < Pa.length; a++)
                  $e(Pa[a], e);
                a = i;
                break;
              case "source":
                $e("error", e), a = i;
                break;
              case "img":
              case "image":
              case "link":
                $e(
                  "error",
                  e
                ), $e("load", e), a = i;
                break;
              case "details":
                $e("toggle", e), a = i;
                break;
              case "input":
                Xp(e, i), a = xf(e, i), $e("invalid", e);
                break;
              case "option":
                a = i;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!i.multiple }, a = Ve({}, i, { value: void 0 }), $e("invalid", e);
                break;
              case "textarea":
                tm(e, i), a = Lf(e, i), $e("invalid", e);
                break;
              default:
                a = i;
            }
            Of(n, a), p = a;
            for (l in p)
              if (p.hasOwnProperty(l)) {
                var m = p[l];
                l === "style" ? P_(e, m) : l === "dangerouslySetInnerHTML" ? (m = m ? m.__html : void 0, m != null && v_(e, m)) : l === "children" ? typeof m == "string" ? (n !== "textarea" || m !== "") && Ra(e, m) : typeof m == "number" && Ra(e, "" + m) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Ia.hasOwnProperty(l) ? m != null && l === "onScroll" && $e("scroll", e) : m != null && Fd(e, l, m, c));
              }
            switch (n) {
              case "input":
                Vs(e), em(e, i, !1);
                break;
              case "textarea":
                Vs(e), nm(e);
                break;
              case "option":
                i.value != null && e.setAttribute("value", "" + jr(i.value));
                break;
              case "select":
                e.multiple = !!i.multiple, l = i.value, l != null ? go(e, !!i.multiple, l, !1) : i.defaultValue != null && go(
                  e,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                );
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = Il);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
          }
          i && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Lt(t), null;
    case 6:
      if (e && t.stateNode != null)
        Uy(e, t, e.memoizedProps, i);
      else {
        if (typeof i != "string" && t.stateNode === null)
          throw Error(V(166));
        if (n = ui(Ka.current), ui(Gn.current), Qs(t)) {
          if (i = t.stateNode, n = t.memoizedProps, i[Un] = t, (l = i.nodeValue !== n) && (e = tn, e !== null))
            switch (e.tag) {
              case 3:
                Ys(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ys(i.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[Un] = t, t.stateNode = i;
      }
      return Lt(t), null;
    case 13:
      if (Ie(je), i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Be && Xt !== null && t.mode & 1 && !(t.flags & 128))
          ly(), Co(), t.flags |= 98560, l = !1;
        else if (l = Qs(t), i !== null && i.dehydrated !== null) {
          if (e === null) {
            if (!l)
              throw Error(V(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
              throw Error(V(317));
            l[Un] = t;
          } else
            Co(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Lt(t), l = !1;
        } else
          bn !== null && (ld(bn), bn = null), l = !0;
        if (!l)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (i = i !== null, i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192, t.mode & 1 && (e === null || je.current & 1 ? at === 0 && (at = 3) : Sh())), t.updateQueue !== null && (t.flags |= 4), Lt(t), null);
    case 4:
      return bo(), ed(e, t), e === null && Ua(t.stateNode.containerInfo), Lt(t), null;
    case 10:
      return ah(t.type._context), Lt(t), null;
    case 17:
      return Wt(t.type) && Rl(), Lt(t), null;
    case 19:
      if (Ie(je), l = t.memoizedState, l === null)
        return Lt(t), null;
      if (i = (t.flags & 128) !== 0, c = l.rendering, c === null)
        if (i)
          ga(l, !1);
        else {
          if (at !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (c = Ul(e), c !== null) {
                for (t.flags |= 128, ga(l, !1), i = c.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), t.subtreeFlags = 0, i = n, n = t.child; n !== null; )
                  l = n, e = i, l.flags &= 14680066, c = l.alternate, c === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = c.childLanes, l.lanes = c.lanes, l.child = c.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = c.memoizedProps, l.memoizedState = c.memoizedState, l.updateQueue = c.updateQueue, l.type = c.type, e = c.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return Ae(je, je.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null && qe() > Ao && (t.flags |= 128, i = !0, ga(l, !1), t.lanes = 4194304);
        }
      else {
        if (!i)
          if (e = Ul(c), e !== null) {
            if (t.flags |= 128, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ga(l, !0), l.tail === null && l.tailMode === "hidden" && !c.alternate && !Be)
              return Lt(t), null;
          } else
            2 * qe() - l.renderingStartTime > Ao && n !== 1073741824 && (t.flags |= 128, i = !0, ga(l, !1), t.lanes = 4194304);
        l.isBackwards ? (c.sibling = t.child, t.child = c) : (n = l.last, n !== null ? n.sibling = c : t.child = c, l.last = c);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = qe(), t.sibling = null, n = je.current, Ae(je, i ? n & 1 | 2 : n & 1), t) : (Lt(t), null);
    case 22:
    case 23:
      return xh(), i = t.memoizedState !== null, e !== null && e.memoizedState !== null !== i && (t.flags |= 8192), i && t.mode & 1 ? Yt & 1073741824 && (Lt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Lt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function ZE(e, t) {
  switch (nh(t), t.tag) {
    case 1:
      return Wt(t.type) && Rl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return bo(), Ie(Ut), Ie(Ct), fh(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ch(t), null;
    case 13:
      if (Ie(je), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(V(340));
        Co();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Ie(je), null;
    case 4:
      return bo(), null;
    case 10:
      return ah(t.type._context), null;
    case 22:
    case 23:
      return xh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var tl = !1, Ot = !1, VE = typeof WeakSet == "function" ? WeakSet : Set, J = null;
function lo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (i) {
        Je(e, t, i);
      }
    else
      n.current = null;
}
function td(e, t, n) {
  try {
    n();
  } catch (i) {
    Je(e, t, i);
  }
}
var Wm = !1;
function UE(e, t) {
  if (Bf = zl, e = J_(), eh(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var a = i.anchorOffset, l = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var c = 0, p = -1, m = -1, _ = 0, y = 0, v = e, h = null;
          t:
            for (; ; ) {
              for (var A; v !== n || a !== 0 && v.nodeType !== 3 || (p = c + a), v !== l || i !== 0 && v.nodeType !== 3 || (m = c + i), v.nodeType === 3 && (c += v.nodeValue.length), (A = v.firstChild) !== null; )
                h = v, v = A;
              for (; ; ) {
                if (v === e)
                  break t;
                if (h === n && ++_ === a && (p = c), h === l && ++y === i && (m = c), (A = v.nextSibling) !== null)
                  break;
                v = h, h = v.parentNode;
              }
              v = A;
            }
          n = p === -1 || m === -1 ? null : { start: p, end: m };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Df = { focusedElem: e, selectionRange: n }, zl = !1, J = t; J !== null; )
    if (t = J, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, J = e;
    else
      for (; J !== null; ) {
        t = J;
        try {
          var b = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var T = b.memoizedProps, j = b.memoizedState, S = t.stateNode, P = S.getSnapshotBeforeUpdate(t.elementType === t.type ? T : Cn(t.type, T), j);
                  S.__reactInternalSnapshotBeforeUpdate = P;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(V(163));
            }
        } catch ($) {
          Je(t, t.return, $);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, J = e;
          break;
        }
        J = t.return;
      }
  return b = Wm, Wm = !1, b;
}
function ba(e, t, n) {
  var i = t.updateQueue;
  if (i = i !== null ? i.lastEffect : null, i !== null) {
    var a = i = i.next;
    do {
      if ((a.tag & e) === e) {
        var l = a.destroy;
        a.destroy = void 0, l !== void 0 && td(t, n, l);
      }
      a = a.next;
    } while (a !== i);
  }
}
function Yu(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var i = n.create;
        n.destroy = i();
      }
      n = n.next;
    } while (n !== t);
  }
}
function nd(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Wy(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Wy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Un], delete t[Ha], delete t[Zf], delete t[TE], delete t[OE])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Hy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hm(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Hy(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function rd(e, t, n) {
  var i = e.tag;
  if (i === 5 || i === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Il));
  else if (i !== 4 && (e = e.child, e !== null))
    for (rd(e, t, n), e = e.sibling; e !== null; )
      rd(e, t, n), e = e.sibling;
}
function id(e, t, n) {
  var i = e.tag;
  if (i === 5 || i === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (i !== 4 && (e = e.child, e !== null))
    for (id(e, t, n), e = e.sibling; e !== null; )
      id(e, t, n), e = e.sibling;
}
var gt = null, kn = !1;
function Er(e, t, n) {
  for (n = n.child; n !== null; )
    Gy(e, t, n), n = n.sibling;
}
function Gy(e, t, n) {
  if (Hn && typeof Hn.onCommitFiberUnmount == "function")
    try {
      Hn.onCommitFiberUnmount(Vu, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Ot || lo(n, t);
    case 6:
      var i = gt, a = kn;
      gt = null, Er(e, t, n), gt = i, kn = a, gt !== null && (kn ? (e = gt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : gt.removeChild(n.stateNode));
      break;
    case 18:
      gt !== null && (kn ? (e = gt, n = n.stateNode, e.nodeType === 8 ? Jc(e.parentNode, n) : e.nodeType === 1 && Jc(e, n), Fa(e)) : Jc(gt, n.stateNode));
      break;
    case 4:
      i = gt, a = kn, gt = n.stateNode.containerInfo, kn = !0, Er(e, t, n), gt = i, kn = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ot && (i = n.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
        a = i = i.next;
        do {
          var l = a, c = l.destroy;
          l = l.tag, c !== void 0 && (l & 2 || l & 4) && td(n, t, c), a = a.next;
        } while (a !== i);
      }
      Er(e, t, n);
      break;
    case 1:
      if (!Ot && (lo(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function"))
        try {
          i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount();
        } catch (p) {
          Je(n, t, p);
        }
      Er(e, t, n);
      break;
    case 21:
      Er(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ot = (i = Ot) || n.memoizedState !== null, Er(e, t, n), Ot = i) : Er(e, t, n);
      break;
    default:
      Er(e, t, n);
  }
}
function Gm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new VE()), t.forEach(function(i) {
      var a = XE.bind(null, e, i);
      n.has(i) || (n.add(i), i.then(a, a));
    });
  }
}
function On(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      try {
        var l = e, c = t, p = c;
        e:
          for (; p !== null; ) {
            switch (p.tag) {
              case 5:
                gt = p.stateNode, kn = !1;
                break e;
              case 3:
                gt = p.stateNode.containerInfo, kn = !0;
                break e;
              case 4:
                gt = p.stateNode.containerInfo, kn = !0;
                break e;
            }
            p = p.return;
          }
        if (gt === null)
          throw Error(V(160));
        Gy(l, c, a), gt = null, kn = !1;
        var m = a.alternate;
        m !== null && (m.return = null), a.return = null;
      } catch (_) {
        Je(a, t, _);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Ky(t, e), t = t.sibling;
}
function Ky(e, t) {
  var n = e.alternate, i = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (On(t, e), jn(e), i & 4) {
        try {
          ba(3, e, e.return), Yu(3, e);
        } catch (T) {
          Je(e, e.return, T);
        }
        try {
          ba(5, e, e.return);
        } catch (T) {
          Je(e, e.return, T);
        }
      }
      break;
    case 1:
      On(t, e), jn(e), i & 512 && n !== null && lo(n, n.return);
      break;
    case 5:
      if (On(t, e), jn(e), i & 512 && n !== null && lo(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          Ra(a, "");
        } catch (T) {
          Je(e, e.return, T);
        }
      }
      if (i & 4 && (a = e.stateNode, a != null)) {
        var l = e.memoizedProps, c = n !== null ? n.memoizedProps : l, p = e.type, m = e.updateQueue;
        if (e.updateQueue = null, m !== null)
          try {
            p === "input" && l.type === "radio" && l.name != null && g_(a, l), Cf(p, c);
            var _ = Cf(p, l);
            for (c = 0; c < m.length; c += 2) {
              var y = m[c], v = m[c + 1];
              y === "style" ? P_(a, v) : y === "dangerouslySetInnerHTML" ? v_(a, v) : y === "children" ? Ra(a, v) : Fd(a, y, v, _);
            }
            switch (p) {
              case "input":
                Sf(a, l);
                break;
              case "textarea":
                __(a, l);
                break;
              case "select":
                var h = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!l.multiple;
                var A = l.value;
                A != null ? go(a, !!l.multiple, A, !1) : h !== !!l.multiple && (l.defaultValue != null ? go(
                  a,
                  !!l.multiple,
                  l.defaultValue,
                  !0
                ) : go(a, !!l.multiple, l.multiple ? [] : "", !1));
            }
            a[Ha] = l;
          } catch (T) {
            Je(e, e.return, T);
          }
      }
      break;
    case 6:
      if (On(t, e), jn(e), i & 4) {
        if (e.stateNode === null)
          throw Error(V(162));
        a = e.stateNode, l = e.memoizedProps;
        try {
          a.nodeValue = l;
        } catch (T) {
          Je(e, e.return, T);
        }
      }
      break;
    case 3:
      if (On(t, e), jn(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Fa(t.containerInfo);
        } catch (T) {
          Je(e, e.return, T);
        }
      break;
    case 4:
      On(t, e), jn(e);
      break;
    case 13:
      On(t, e), jn(e), a = e.child, a.flags & 8192 && (l = a.memoizedState !== null, a.stateNode.isHidden = l, !l || a.alternate !== null && a.alternate.memoizedState !== null || (wh = qe())), i & 4 && Gm(e);
      break;
    case 22:
      if (y = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ot = (_ = Ot) || y, On(t, e), Ot = _) : On(t, e), jn(e), i & 8192) {
        if (_ = e.memoizedState !== null, (e.stateNode.isHidden = _) && !y && e.mode & 1)
          for (J = e, y = e.child; y !== null; ) {
            for (v = J = y; J !== null; ) {
              switch (h = J, A = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ba(4, h, h.return);
                  break;
                case 1:
                  lo(h, h.return);
                  var b = h.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    i = h, n = h.return;
                    try {
                      t = i, b.props = t.memoizedProps, b.state = t.memoizedState, b.componentWillUnmount();
                    } catch (T) {
                      Je(i, n, T);
                    }
                  }
                  break;
                case 5:
                  lo(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Jm(v);
                    continue;
                  }
              }
              A !== null ? (A.return = h, J = A) : Jm(v);
            }
            y = y.sibling;
          }
        e:
          for (y = null, v = e; ; ) {
            if (v.tag === 5) {
              if (y === null) {
                y = v;
                try {
                  a = v.stateNode, _ ? (l = a.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (p = v.stateNode, m = v.memoizedProps.style, c = m != null && m.hasOwnProperty("display") ? m.display : null, p.style.display = w_("display", c));
                } catch (T) {
                  Je(e, e.return, T);
                }
              }
            } else if (v.tag === 6) {
              if (y === null)
                try {
                  v.stateNode.nodeValue = _ ? "" : v.memoizedProps;
                } catch (T) {
                  Je(e, e.return, T);
                }
            } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === e) && v.child !== null) {
              v.child.return = v, v = v.child;
              continue;
            }
            if (v === e)
              break e;
            for (; v.sibling === null; ) {
              if (v.return === null || v.return === e)
                break e;
              y === v && (y = null), v = v.return;
            }
            y === v && (y = null), v.sibling.return = v.return, v = v.sibling;
          }
      }
      break;
    case 19:
      On(t, e), jn(e), i & 4 && Gm(e);
      break;
    case 21:
      break;
    default:
      On(
        t,
        e
      ), jn(e);
  }
}
function jn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hy(n)) {
            var i = n;
            break e;
          }
          n = n.return;
        }
        throw Error(V(160));
      }
      switch (i.tag) {
        case 5:
          var a = i.stateNode;
          i.flags & 32 && (Ra(a, ""), i.flags &= -33);
          var l = Hm(e);
          id(e, l, a);
          break;
        case 3:
        case 4:
          var c = i.stateNode.containerInfo, p = Hm(e);
          rd(e, p, c);
          break;
        default:
          throw Error(V(161));
      }
    } catch (m) {
      Je(e, e.return, m);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function WE(e, t, n) {
  J = e, Jy(e);
}
function Jy(e, t, n) {
  for (var i = (e.mode & 1) !== 0; J !== null; ) {
    var a = J, l = a.child;
    if (a.tag === 22 && i) {
      var c = a.memoizedState !== null || tl;
      if (!c) {
        var p = a.alternate, m = p !== null && p.memoizedState !== null || Ot;
        p = tl;
        var _ = Ot;
        if (tl = c, (Ot = m) && !_)
          for (J = a; J !== null; )
            c = J, m = c.child, c.tag === 22 && c.memoizedState !== null ? qm(a) : m !== null ? (m.return = c, J = m) : qm(a);
        for (; l !== null; )
          J = l, Jy(l), l = l.sibling;
        J = a, tl = p, Ot = _;
      }
      Km(e);
    } else
      a.subtreeFlags & 8772 && l !== null ? (l.return = a, J = l) : Km(e);
  }
}
function Km(e) {
  for (; J !== null; ) {
    var t = J;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ot || Yu(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !Ot)
                if (n === null)
                  i.componentDidMount();
                else {
                  var a = t.elementType === t.type ? n.memoizedProps : Cn(t.type, n.memoizedProps);
                  i.componentDidUpdate(a, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
                }
              var l = t.updateQueue;
              l !== null && Am(t, l, i);
              break;
            case 3:
              var c = t.updateQueue;
              if (c !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Am(t, c, n);
              }
              break;
            case 5:
              var p = t.stateNode;
              if (n === null && t.flags & 4) {
                n = p;
                var m = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    m.autoFocus && n.focus();
                    break;
                  case "img":
                    m.src && (n.src = m.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var _ = t.alternate;
                if (_ !== null) {
                  var y = _.memoizedState;
                  if (y !== null) {
                    var v = y.dehydrated;
                    v !== null && Fa(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(V(163));
          }
        Ot || t.flags & 512 && nd(t);
      } catch (h) {
        Je(t, t.return, h);
      }
    }
    if (t === e) {
      J = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, J = n;
      break;
    }
    J = t.return;
  }
}
function Jm(e) {
  for (; J !== null; ) {
    var t = J;
    if (t === e) {
      J = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, J = n;
      break;
    }
    J = t.return;
  }
}
function qm(e) {
  for (; J !== null; ) {
    var t = J;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Yu(4, t);
          } catch (m) {
            Je(t, n, m);
          }
          break;
        case 1:
          var i = t.stateNode;
          if (typeof i.componentDidMount == "function") {
            var a = t.return;
            try {
              i.componentDidMount();
            } catch (m) {
              Je(t, a, m);
            }
          }
          var l = t.return;
          try {
            nd(t);
          } catch (m) {
            Je(t, l, m);
          }
          break;
        case 5:
          var c = t.return;
          try {
            nd(t);
          } catch (m) {
            Je(t, c, m);
          }
      }
    } catch (m) {
      Je(t, t.return, m);
    }
    if (t === e) {
      J = null;
      break;
    }
    var p = t.sibling;
    if (p !== null) {
      p.return = t.return, J = p;
      break;
    }
    J = t.return;
  }
}
var HE = Math.ceil, Gl = mr.ReactCurrentDispatcher, yh = mr.ReactCurrentOwner, yn = mr.ReactCurrentBatchConfig, Le = 0, ht = null, tt = null, vt = 0, Yt = 0, uo = Vr(0), at = 0, Qa = null, vi = 0, Qu = 0, vh = 0, Ma = null, Zt = null, wh = 0, Ao = 1 / 0, or = null, Kl = !1, od = null, Ir = null, nl = !1, br = null, Jl = 0, Aa = 0, ad = null, gl = -1, _l = 0;
function zt() {
  return Le & 6 ? qe() : gl !== -1 ? gl : gl = qe();
}
function Rr(e) {
  return e.mode & 1 ? Le & 2 && vt !== 0 ? vt & -vt : kE.transition !== null ? (_l === 0 && (_l = z_()), _l) : (e = be, e !== 0 || (e = window.event, e = e === void 0 ? 16 : j_(e.type)), e) : 1;
}
function An(e, t, n, i) {
  if (50 < Aa)
    throw Aa = 0, ad = null, Error(V(185));
  hs(e, n, i), (!(Le & 2) || e !== ht) && (e === ht && (!(Le & 2) && (Qu |= n), at === 4 && Cr(e, vt)), Ht(e, i), n === 1 && Le === 0 && !(t.mode & 1) && (Ao = qe() + 500, Ku && Ur()));
}
function Ht(e, t) {
  var n = e.callbackNode;
  kS(e, t);
  var i = Al(e, e === ht ? vt : 0);
  if (i === 0)
    n !== null && om(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = i & -i, e.callbackPriority !== t) {
    if (n != null && om(n), t === 1)
      e.tag === 0 ? CE(Ym.bind(null, e)) : oy(Ym.bind(null, e)), EE(function() {
        !(Le & 6) && Ur();
      }), n = null;
    else {
      switch (N_(i)) {
        case 1:
          n = Hd;
          break;
        case 4:
          n = M_;
          break;
        case 16:
          n = Ml;
          break;
        case 536870912:
          n = A_;
          break;
        default:
          n = Ml;
      }
      n = rv(n, qy.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function qy(e, t) {
  if (gl = -1, _l = 0, Le & 6)
    throw Error(V(327));
  var n = e.callbackNode;
  if (Po() && e.callbackNode !== n)
    return null;
  var i = Al(e, e === ht ? vt : 0);
  if (i === 0)
    return null;
  if (i & 30 || i & e.expiredLanes || t)
    t = ql(e, i);
  else {
    t = i;
    var a = Le;
    Le |= 2;
    var l = Qy();
    (ht !== e || vt !== t) && (or = null, Ao = qe() + 500, fi(e, t));
    do
      try {
        JE();
        break;
      } catch (p) {
        Yy(e, p);
      }
    while (1);
    oh(), Gl.current = l, Le = a, tt !== null ? t = 0 : (ht = null, vt = 0, t = at);
  }
  if (t !== 0) {
    if (t === 2 && (a = zf(e), a !== 0 && (i = a, t = sd(e, a))), t === 1)
      throw n = Qa, fi(e, 0), Cr(e, i), Ht(e, qe()), n;
    if (t === 6)
      Cr(e, i);
    else {
      if (a = e.current.alternate, !(i & 30) && !GE(a) && (t = ql(e, i), t === 2 && (l = zf(e), l !== 0 && (i = l, t = sd(e, l))), t === 1))
        throw n = Qa, fi(e, 0), Cr(e, i), Ht(e, qe()), n;
      switch (e.finishedWork = a, e.finishedLanes = i, t) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          oi(e, Zt, or);
          break;
        case 3:
          if (Cr(e, i), (i & 130023424) === i && (t = wh + 500 - qe(), 10 < t)) {
            if (Al(e, 0) !== 0)
              break;
            if (a = e.suspendedLanes, (a & i) !== i) {
              zt(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = Ff(oi.bind(null, e, Zt, or), t);
            break;
          }
          oi(e, Zt, or);
          break;
        case 4:
          if (Cr(e, i), (i & 4194240) === i)
            break;
          for (t = e.eventTimes, a = -1; 0 < i; ) {
            var c = 31 - Mn(i);
            l = 1 << c, c = t[c], c > a && (a = c), i &= ~l;
          }
          if (i = a, i = qe() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * HE(i / 1960)) - i, 10 < i) {
            e.timeoutHandle = Ff(oi.bind(null, e, Zt, or), i);
            break;
          }
          oi(e, Zt, or);
          break;
        case 5:
          oi(e, Zt, or);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return Ht(e, qe()), e.callbackNode === n ? qy.bind(null, e) : null;
}
function sd(e, t) {
  var n = Ma;
  return e.current.memoizedState.isDehydrated && (fi(e, t).flags |= 256), e = ql(e, t), e !== 2 && (t = Zt, Zt = n, t !== null && ld(t)), e;
}
function ld(e) {
  Zt === null ? Zt = e : Zt.push.apply(Zt, e);
}
function GE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var i = 0; i < n.length; i++) {
          var a = n[i], l = a.getSnapshot;
          a = a.value;
          try {
            if (!zn(l(), a))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Cr(e, t) {
  for (t &= ~vh, t &= ~Qu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Mn(t), i = 1 << n;
    e[n] = -1, t &= ~i;
  }
}
function Ym(e) {
  if (Le & 6)
    throw Error(V(327));
  Po();
  var t = Al(e, 0);
  if (!(t & 1))
    return Ht(e, qe()), null;
  var n = ql(e, t);
  if (e.tag !== 0 && n === 2) {
    var i = zf(e);
    i !== 0 && (t = i, n = sd(e, i));
  }
  if (n === 1)
    throw n = Qa, fi(e, 0), Cr(e, t), Ht(e, qe()), n;
  if (n === 6)
    throw Error(V(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, oi(e, Zt, or), Ht(e, qe()), null;
}
function Ph(e, t) {
  var n = Le;
  Le |= 1;
  try {
    return e(t);
  } finally {
    Le = n, Le === 0 && (Ao = qe() + 500, Ku && Ur());
  }
}
function wi(e) {
  br !== null && br.tag === 0 && !(Le & 6) && Po();
  var t = Le;
  Le |= 1;
  var n = yn.transition, i = be;
  try {
    if (yn.transition = null, be = 1, e)
      return e();
  } finally {
    be = i, yn.transition = n, Le = t, !(Le & 6) && Ur();
  }
}
function xh() {
  Yt = uo.current, Ie(uo);
}
function fi(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, SE(n)), tt !== null)
    for (n = tt.return; n !== null; ) {
      var i = n;
      switch (nh(i), i.tag) {
        case 1:
          i = i.type.childContextTypes, i != null && Rl();
          break;
        case 3:
          bo(), Ie(Ut), Ie(Ct), fh();
          break;
        case 5:
          ch(i);
          break;
        case 4:
          bo();
          break;
        case 13:
          Ie(je);
          break;
        case 19:
          Ie(je);
          break;
        case 10:
          ah(i.type._context);
          break;
        case 22:
        case 23:
          xh();
      }
      n = n.return;
    }
  if (ht = e, tt = e = Br(e.current, null), vt = Yt = t, at = 0, Qa = null, vh = Qu = vi = 0, Zt = Ma = null, li !== null) {
    for (t = 0; t < li.length; t++)
      if (n = li[t], i = n.interleaved, i !== null) {
        n.interleaved = null;
        var a = i.next, l = n.pending;
        if (l !== null) {
          var c = l.next;
          l.next = a, i.next = c;
        }
        n.pending = i;
      }
    li = null;
  }
  return e;
}
function Yy(e, t) {
  do {
    var n = tt;
    try {
      if (oh(), hl.current = Hl, Wl) {
        for (var i = Ze.memoizedState; i !== null; ) {
          var a = i.queue;
          a !== null && (a.pending = null), i = i.next;
        }
        Wl = !1;
      }
      if (yi = 0, dt = ot = Ze = null, ka = !1, Ja = 0, yh.current = null, n === null || n.return === null) {
        at = 1, Qa = t, tt = null;
        break;
      }
      e: {
        var l = e, c = n.return, p = n, m = t;
        if (t = vt, p.flags |= 32768, m !== null && typeof m == "object" && typeof m.then == "function") {
          var _ = m, y = p, v = y.tag;
          if (!(y.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var h = y.alternate;
            h ? (y.updateQueue = h.updateQueue, y.memoizedState = h.memoizedState, y.lanes = h.lanes) : (y.updateQueue = null, y.memoizedState = null);
          }
          var A = Bm(c);
          if (A !== null) {
            A.flags &= -257, Dm(A, c, p, l, t), A.mode & 1 && Rm(l, _, t), t = A, m = _;
            var b = t.updateQueue;
            if (b === null) {
              var T = /* @__PURE__ */ new Set();
              T.add(m), t.updateQueue = T;
            } else
              b.add(m);
            break e;
          } else {
            if (!(t & 1)) {
              Rm(l, _, t), Sh();
              break e;
            }
            m = Error(V(426));
          }
        } else if (Be && p.mode & 1) {
          var j = Bm(c);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), Dm(j, c, p, l, t), rh(Mo(m, p));
            break e;
          }
        }
        l = m = Mo(m, p), at !== 4 && (at = 2), Ma === null ? Ma = [l] : Ma.push(l), l = c;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var S = Ny(l, m, t);
              Mm(l, S);
              break e;
            case 1:
              p = m;
              var P = l.type, x = l.stateNode;
              if (!(l.flags & 128) && (typeof P.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Ir === null || !Ir.has(x)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var $ = $y(l, p, t);
                Mm(l, $);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      ev(n);
    } catch (k) {
      t = k, tt === n && n !== null && (tt = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Qy() {
  var e = Gl.current;
  return Gl.current = Hl, e === null ? Hl : e;
}
function Sh() {
  (at === 0 || at === 3 || at === 2) && (at = 4), ht === null || !(vi & 268435455) && !(Qu & 268435455) || Cr(ht, vt);
}
function ql(e, t) {
  var n = Le;
  Le |= 2;
  var i = Qy();
  (ht !== e || vt !== t) && (or = null, fi(e, t));
  do
    try {
      KE();
      break;
    } catch (a) {
      Yy(e, a);
    }
  while (1);
  if (oh(), Le = n, Gl.current = i, tt !== null)
    throw Error(V(261));
  return ht = null, vt = 0, at;
}
function KE() {
  for (; tt !== null; )
    Xy(tt);
}
function JE() {
  for (; tt !== null && !wS(); )
    Xy(tt);
}
function Xy(e) {
  var t = nv(e.alternate, e, Yt);
  e.memoizedProps = e.pendingProps, t === null ? ev(e) : tt = t, yh.current = null;
}
function ev(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = ZE(n, t), n !== null) {
        n.flags &= 32767, tt = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        at = 6, tt = null;
        return;
      }
    } else if (n = FE(n, t, Yt), n !== null) {
      tt = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      tt = t;
      return;
    }
    tt = t = e;
  } while (t !== null);
  at === 0 && (at = 5);
}
function oi(e, t, n) {
  var i = be, a = yn.transition;
  try {
    yn.transition = null, be = 1, qE(e, t, n, i);
  } finally {
    yn.transition = a, be = i;
  }
  return null;
}
function qE(e, t, n, i) {
  do
    Po();
  while (br !== null);
  if (Le & 6)
    throw Error(V(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(V(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (bS(e, l), e === ht && (tt = ht = null, vt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || nl || (nl = !0, rv(Ml, function() {
    return Po(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = yn.transition, yn.transition = null;
    var c = be;
    be = 1;
    var p = Le;
    Le |= 4, yh.current = null, UE(e, n), Ky(n, e), gE(Df), zl = !!Bf, Df = Bf = null, e.current = n, WE(n), PS(), Le = p, be = c, yn.transition = l;
  } else
    e.current = n;
  if (nl && (nl = !1, br = e, Jl = a), l = e.pendingLanes, l === 0 && (Ir = null), ES(n.stateNode), Ht(e, qe()), t !== null)
    for (i = e.onRecoverableError, n = 0; n < t.length; n++)
      a = t[n], i(a.value, { componentStack: a.stack, digest: a.digest });
  if (Kl)
    throw Kl = !1, e = od, od = null, e;
  return Jl & 1 && e.tag !== 0 && Po(), l = e.pendingLanes, l & 1 ? e === ad ? Aa++ : (Aa = 0, ad = e) : Aa = 0, Ur(), null;
}
function Po() {
  if (br !== null) {
    var e = N_(Jl), t = yn.transition, n = be;
    try {
      if (yn.transition = null, be = 16 > e ? 16 : e, br === null)
        var i = !1;
      else {
        if (e = br, br = null, Jl = 0, Le & 6)
          throw Error(V(331));
        var a = Le;
        for (Le |= 4, J = e.current; J !== null; ) {
          var l = J, c = l.child;
          if (J.flags & 16) {
            var p = l.deletions;
            if (p !== null) {
              for (var m = 0; m < p.length; m++) {
                var _ = p[m];
                for (J = _; J !== null; ) {
                  var y = J;
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ba(8, y, l);
                  }
                  var v = y.child;
                  if (v !== null)
                    v.return = y, J = v;
                  else
                    for (; J !== null; ) {
                      y = J;
                      var h = y.sibling, A = y.return;
                      if (Wy(y), y === _) {
                        J = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = A, J = h;
                        break;
                      }
                      J = A;
                    }
                }
              }
              var b = l.alternate;
              if (b !== null) {
                var T = b.child;
                if (T !== null) {
                  b.child = null;
                  do {
                    var j = T.sibling;
                    T.sibling = null, T = j;
                  } while (T !== null);
                }
              }
              J = l;
            }
          }
          if (l.subtreeFlags & 2064 && c !== null)
            c.return = l, J = c;
          else
            e:
              for (; J !== null; ) {
                if (l = J, l.flags & 2048)
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ba(9, l, l.return);
                  }
                var S = l.sibling;
                if (S !== null) {
                  S.return = l.return, J = S;
                  break e;
                }
                J = l.return;
              }
        }
        var P = e.current;
        for (J = P; J !== null; ) {
          c = J;
          var x = c.child;
          if (c.subtreeFlags & 2064 && x !== null)
            x.return = c, J = x;
          else
            e:
              for (c = P; J !== null; ) {
                if (p = J, p.flags & 2048)
                  try {
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Yu(9, p);
                    }
                  } catch (k) {
                    Je(p, p.return, k);
                  }
                if (p === c) {
                  J = null;
                  break e;
                }
                var $ = p.sibling;
                if ($ !== null) {
                  $.return = p.return, J = $;
                  break e;
                }
                J = p.return;
              }
        }
        if (Le = a, Ur(), Hn && typeof Hn.onPostCommitFiberRoot == "function")
          try {
            Hn.onPostCommitFiberRoot(Vu, e);
          } catch {
          }
        i = !0;
      }
      return i;
    } finally {
      be = n, yn.transition = t;
    }
  }
  return !1;
}
function Qm(e, t, n) {
  t = Mo(n, t), t = Ny(e, t, 1), e = $r(e, t, 1), t = zt(), e !== null && (hs(e, 1, t), Ht(e, t));
}
function Je(e, t, n) {
  if (e.tag === 3)
    Qm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Qm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Ir === null || !Ir.has(i))) {
          e = Mo(n, e), e = $y(t, e, 1), t = $r(t, e, 1), e = zt(), t !== null && (hs(t, 1, e), Ht(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function YE(e, t, n) {
  var i = e.pingCache;
  i !== null && i.delete(t), t = zt(), e.pingedLanes |= e.suspendedLanes & n, ht === e && (vt & n) === n && (at === 4 || at === 3 && (vt & 130023424) === vt && 500 > qe() - wh ? fi(e, 0) : vh |= n), Ht(e, t);
}
function tv(e, t) {
  t === 0 && (e.mode & 1 ? (t = Hs, Hs <<= 1, !(Hs & 130023424) && (Hs = 4194304)) : t = 1);
  var n = zt();
  e = hr(e, t), e !== null && (hs(e, t, n), Ht(e, n));
}
function QE(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), tv(e, n);
}
function XE(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var i = e.stateNode, a = e.memoizedState;
      a !== null && (n = a.retryLane);
      break;
    case 19:
      i = e.stateNode;
      break;
    default:
      throw Error(V(314));
  }
  i !== null && i.delete(t), tv(e, n);
}
var nv;
nv = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ut.current)
      Vt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Vt = !1, jE(e, t, n);
      Vt = !!(e.flags & 131072);
    }
  else
    Vt = !1, Be && t.flags & 1048576 && ay(t, jl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var i = t.type;
      ml(e, t), e = t.pendingProps;
      var a = Oo(t, Ct.current);
      wo(t, n), a = hh(null, t, i, e, a, n);
      var l = ph();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Wt(i) ? (l = !0, Bl(t)) : l = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, lh(t), a.updater = qu, t.stateNode = a, a._reactInternals = t, Kf(t, i, e, n), t = Yf(null, t, i, !0, l, n)) : (t.tag = 0, Be && l && th(t), At(null, t, a, n), t = t.child), t;
    case 16:
      i = t.elementType;
      e: {
        switch (ml(e, t), e = t.pendingProps, a = i._init, i = a(i._payload), t.type = i, a = t.tag = tL(i), e = Cn(i, e), a) {
          case 0:
            t = qf(null, t, i, e, n);
            break e;
          case 1:
            t = Zm(null, t, i, e, n);
            break e;
          case 11:
            t = jm(null, t, i, e, n);
            break e;
          case 14:
            t = Fm(null, t, i, Cn(i.type, e), n);
            break e;
        }
        throw Error(V(
          306,
          i,
          ""
        ));
      }
      return t;
    case 0:
      return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Cn(i, a), qf(e, t, i, a, n);
    case 1:
      return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Cn(i, a), Zm(e, t, i, a, n);
    case 3:
      e: {
        if (Dy(t), e === null)
          throw Error(V(387));
        i = t.pendingProps, l = t.memoizedState, a = l.element, dy(e, t), Vl(t, i, null, n);
        var c = t.memoizedState;
        if (i = c.element, l.isDehydrated)
          if (l = { element: i, isDehydrated: !1, cache: c.cache, pendingSuspenseBoundaries: c.pendingSuspenseBoundaries, transitions: c.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
            a = Mo(Error(V(423)), t), t = Vm(e, t, i, n, a);
            break e;
          } else if (i !== a) {
            a = Mo(Error(V(424)), t), t = Vm(e, t, i, n, a);
            break e;
          } else
            for (Xt = Nr(t.stateNode.containerInfo.firstChild), tn = t, Be = !0, bn = null, n = cy(t, null, i, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Co(), i === a) {
            t = pr(e, t, n);
            break e;
          }
          At(e, t, i, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return hy(t), e === null && Wf(t), i = t.type, a = t.pendingProps, l = e !== null ? e.memoizedProps : null, c = a.children, jf(i, a) ? c = null : l !== null && jf(i, l) && (t.flags |= 32), By(e, t), At(e, t, c, n), t.child;
    case 6:
      return e === null && Wf(t), null;
    case 13:
      return jy(e, t, n);
    case 4:
      return uh(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = ko(t, null, i, n) : At(e, t, i, n), t.child;
    case 11:
      return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Cn(i, a), jm(e, t, i, a, n);
    case 7:
      return At(e, t, t.pendingProps, n), t.child;
    case 8:
      return At(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return At(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (i = t.type._context, a = t.pendingProps, l = t.memoizedProps, c = a.value, Ae(Fl, i._currentValue), i._currentValue = c, l !== null)
          if (zn(l.value, c)) {
            if (l.children === a.children && !Ut.current) {
              t = pr(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var p = l.dependencies;
              if (p !== null) {
                c = l.child;
                for (var m = p.firstContext; m !== null; ) {
                  if (m.context === i) {
                    if (l.tag === 1) {
                      m = ur(-1, n & -n), m.tag = 2;
                      var _ = l.updateQueue;
                      if (_ !== null) {
                        _ = _.shared;
                        var y = _.pending;
                        y === null ? m.next = m : (m.next = y.next, y.next = m), _.pending = m;
                      }
                    }
                    l.lanes |= n, m = l.alternate, m !== null && (m.lanes |= n), Hf(
                      l.return,
                      n,
                      t
                    ), p.lanes |= n;
                    break;
                  }
                  m = m.next;
                }
              } else if (l.tag === 10)
                c = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (c = l.return, c === null)
                  throw Error(V(341));
                c.lanes |= n, p = c.alternate, p !== null && (p.lanes |= n), Hf(c, n, t), c = l.sibling;
              } else
                c = l.child;
              if (c !== null)
                c.return = l;
              else
                for (c = l; c !== null; ) {
                  if (c === t) {
                    c = null;
                    break;
                  }
                  if (l = c.sibling, l !== null) {
                    l.return = c.return, c = l;
                    break;
                  }
                  c = c.return;
                }
              l = c;
            }
        At(e, t, a.children, n), t = t.child;
      }
      return t;
    case 9:
      return a = t.type, i = t.pendingProps.children, wo(t, n), a = vn(a), i = i(a), t.flags |= 1, At(e, t, i, n), t.child;
    case 14:
      return i = t.type, a = Cn(i, t.pendingProps), a = Cn(i.type, a), Fm(e, t, i, a, n);
    case 15:
      return Iy(e, t, t.type, t.pendingProps, n);
    case 17:
      return i = t.type, a = t.pendingProps, a = t.elementType === i ? a : Cn(i, a), ml(e, t), t.tag = 1, Wt(i) ? (e = !0, Bl(t)) : e = !1, wo(t, n), zy(t, i, a), Kf(t, i, a, n), Yf(null, t, i, !0, e, n);
    case 19:
      return Fy(e, t, n);
    case 22:
      return Ry(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function rv(e, t) {
  return b_(e, t);
}
function eL(e, t, n, i) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function _n(e, t, n, i) {
  return new eL(e, t, n, i);
}
function Eh(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function tL(e) {
  if (typeof e == "function")
    return Eh(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Vd)
      return 11;
    if (e === Ud)
      return 14;
  }
  return 2;
}
function Br(e, t) {
  var n = e.alternate;
  return n === null ? (n = _n(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function yl(e, t, n, i, a, l) {
  var c = 2;
  if (i = e, typeof e == "function")
    Eh(e) && (c = 1);
  else if (typeof e == "string")
    c = 5;
  else
    e:
      switch (e) {
        case Xi:
          return di(n.children, a, l, t);
        case Zd:
          c = 8, a |= 8;
          break;
        case yf:
          return e = _n(12, n, t, a | 2), e.elementType = yf, e.lanes = l, e;
        case vf:
          return e = _n(13, n, t, a), e.elementType = vf, e.lanes = l, e;
        case wf:
          return e = _n(19, n, t, a), e.elementType = wf, e.lanes = l, e;
        case h_:
          return Xu(n, a, l, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case f_:
                c = 10;
                break e;
              case d_:
                c = 9;
                break e;
              case Vd:
                c = 11;
                break e;
              case Ud:
                c = 14;
                break e;
              case Lr:
                c = 16, i = null;
                break e;
            }
          throw Error(V(130, e == null ? e : typeof e, ""));
      }
  return t = _n(c, n, t, a), t.elementType = e, t.type = i, t.lanes = l, t;
}
function di(e, t, n, i) {
  return e = _n(7, e, i, t), e.lanes = n, e;
}
function Xu(e, t, n, i) {
  return e = _n(22, e, i, t), e.elementType = h_, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function rf(e, t, n) {
  return e = _n(6, e, null, t), e.lanes = n, e;
}
function of(e, t, n) {
  return t = _n(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function nL(e, t, n, i, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Bc(0), this.expirationTimes = Bc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bc(0), this.identifierPrefix = i, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function Lh(e, t, n, i, a, l, c, p, m) {
  return e = new nL(e, t, n, p, m), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = _n(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, lh(l), e;
}
function rL(e, t, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Qi, key: i == null ? null : "" + i, children: e, containerInfo: t, implementation: n };
}
function iv(e) {
  if (!e)
    return Fr;
  e = e._reactInternals;
  e: {
    if (Si(e) !== e || e.tag !== 1)
      throw Error(V(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Wt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(V(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Wt(n))
      return iy(e, n, t);
  }
  return t;
}
function ov(e, t, n, i, a, l, c, p, m) {
  return e = Lh(n, i, !0, e, a, l, c, p, m), e.context = iv(null), n = e.current, i = zt(), a = Rr(n), l = ur(i, a), l.callback = t ?? null, $r(n, l, a), e.current.lanes = a, hs(e, a, i), Ht(e, i), e;
}
function ec(e, t, n, i) {
  var a = t.current, l = zt(), c = Rr(a);
  return n = iv(n), t.context === null ? t.context = n : t.pendingContext = n, t = ur(l, c), t.payload = { element: e }, i = i === void 0 ? null : i, i !== null && (t.callback = i), e = $r(a, t, c), e !== null && (An(e, a, c, l), dl(e, a, c)), c;
}
function Yl(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Xm(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Th(e, t) {
  Xm(e, t), (e = e.alternate) && Xm(e, t);
}
function iL() {
  return null;
}
var av = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Oh(e) {
  this._internalRoot = e;
}
tc.prototype.render = Oh.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(V(409));
  ec(e, t, null, null);
};
tc.prototype.unmount = Oh.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    wi(function() {
      ec(null, e, null, null);
    }), t[dr] = null;
  }
};
function tc(e) {
  this._internalRoot = e;
}
tc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = R_();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Or.length && t !== 0 && t < Or[n].priority; n++)
      ;
    Or.splice(n, 0, e), n === 0 && D_(e);
  }
};
function Ch(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function nc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function eg() {
}
function oL(e, t, n, i, a) {
  if (a) {
    if (typeof i == "function") {
      var l = i;
      i = function() {
        var _ = Yl(c);
        l.call(_);
      };
    }
    var c = ov(t, i, e, 0, null, !1, !1, "", eg);
    return e._reactRootContainer = c, e[dr] = c.current, Ua(e.nodeType === 8 ? e.parentNode : e), wi(), c;
  }
  for (; a = e.lastChild; )
    e.removeChild(a);
  if (typeof i == "function") {
    var p = i;
    i = function() {
      var _ = Yl(m);
      p.call(_);
    };
  }
  var m = Lh(e, 0, !1, null, null, !1, !1, "", eg);
  return e._reactRootContainer = m, e[dr] = m.current, Ua(e.nodeType === 8 ? e.parentNode : e), wi(function() {
    ec(t, m, n, i);
  }), m;
}
function rc(e, t, n, i, a) {
  var l = n._reactRootContainer;
  if (l) {
    var c = l;
    if (typeof a == "function") {
      var p = a;
      a = function() {
        var m = Yl(c);
        p.call(m);
      };
    }
    ec(t, c, e, a);
  } else
    c = oL(n, t, e, a, i);
  return Yl(c);
}
$_ = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wa(t.pendingLanes);
        n !== 0 && (Gd(t, n | 1), Ht(t, qe()), !(Le & 6) && (Ao = qe() + 500, Ur()));
      }
      break;
    case 13:
      wi(function() {
        var i = hr(e, 1);
        if (i !== null) {
          var a = zt();
          An(i, e, 1, a);
        }
      }), Th(e, 1);
  }
};
Kd = function(e) {
  if (e.tag === 13) {
    var t = hr(e, 134217728);
    if (t !== null) {
      var n = zt();
      An(t, e, 134217728, n);
    }
    Th(e, 134217728);
  }
};
I_ = function(e) {
  if (e.tag === 13) {
    var t = Rr(e), n = hr(e, t);
    if (n !== null) {
      var i = zt();
      An(n, e, t, i);
    }
    Th(e, t);
  }
};
R_ = function() {
  return be;
};
B_ = function(e, t) {
  var n = be;
  try {
    return be = e, t();
  } finally {
    be = n;
  }
};
bf = function(e, t, n) {
  switch (t) {
    case "input":
      if (Sf(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var i = n[t];
          if (i !== e && i.form === e.form) {
            var a = Gu(i);
            if (!a)
              throw Error(V(90));
            m_(i), Sf(i, a);
          }
        }
      }
      break;
    case "textarea":
      __(e, n);
      break;
    case "select":
      t = n.value, t != null && go(e, !!n.multiple, t, !1);
  }
};
E_ = Ph;
L_ = wi;
var aL = { usingClientEntryPoint: !1, Events: [ms, ro, Gu, x_, S_, Ph] }, _a = { findFiberByHostInstance: si, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, sL = { bundleType: _a.bundleType, version: _a.version, rendererPackageName: _a.rendererPackageName, rendererConfig: _a.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: mr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = C_(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: _a.findFiberByHostInstance || iL, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var rl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!rl.isDisabled && rl.supportsFiber)
    try {
      Vu = rl.inject(sL), Hn = rl;
    } catch {
    }
}
on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = aL;
on.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ch(t))
    throw Error(V(200));
  return rL(e, t, null, n);
};
on.createRoot = function(e, t) {
  if (!Ch(e))
    throw Error(V(299));
  var n = !1, i = "", a = av;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Lh(e, 1, !1, null, null, n, !1, i, a), e[dr] = t.current, Ua(e.nodeType === 8 ? e.parentNode : e), new Oh(t);
};
on.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(V(188)) : (e = Object.keys(e).join(","), Error(V(268, e)));
  return e = C_(t), e = e === null ? null : e.stateNode, e;
};
on.flushSync = function(e) {
  return wi(e);
};
on.hydrate = function(e, t, n) {
  if (!nc(t))
    throw Error(V(200));
  return rc(null, e, t, !0, n);
};
on.hydrateRoot = function(e, t, n) {
  if (!Ch(e))
    throw Error(V(405));
  var i = n != null && n.hydratedSources || null, a = !1, l = "", c = av;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (c = n.onRecoverableError)), t = ov(t, null, e, 1, n ?? null, a, !1, l, c), e[dr] = t.current, Ua(e), i)
    for (e = 0; e < i.length; e++)
      n = i[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
        n,
        a
      );
  return new tc(t);
};
on.render = function(e, t, n) {
  if (!nc(t))
    throw Error(V(200));
  return rc(null, e, t, !1, n);
};
on.unmountComponentAtNode = function(e) {
  if (!nc(e))
    throw Error(V(40));
  return e._reactRootContainer ? (wi(function() {
    rc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[dr] = null;
    });
  }), !0) : !1;
};
on.unstable_batchedUpdates = Ph;
on.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
  if (!nc(n))
    throw Error(V(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(V(38));
  return rc(e, t, n, !1, i);
};
on.version = "18.3.1-next-f1338f8080-20240426";
function sv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sv);
    } catch (e) {
      console.error(e);
    }
}
sv(), s_.exports = on;
var lL = s_.exports, lv, tg = lL;
lv = tg.createRoot, tg.hydrateRoot;
function pL(e) {
  const t = lv(e);
  return console.log("%c[LocationMap] Starting up...", "color: #6366f1; font-weight: bold"), {
    render(n) {
      console.log("%c[LocationMap] Context:", "color: #6366f1; font-weight: bold", n), t.render(
        /* @__PURE__ */ pe(rS, { theme: n.theme, children: /* @__PURE__ */ pe(
          Tw,
          {
            client: n.client,
            options: n.options,
            entity: n.entity
          }
        ) })
      );
    },
    unmount() {
      t.unmount();
    }
  };
}
export {
  pL as default
};
