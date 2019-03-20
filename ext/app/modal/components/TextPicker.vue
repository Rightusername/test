<template>
    <div class="wrap" @click="closeColor" >
        <div class="font-wrap" @blur="test">
            <div class="fonts">
                <select @focus="resetFont" @blur="restoreFont" @input="selectFont" name="" id="">
                    <option :selected="settings.font=='Roboto'" style="font-family: Roboto" value="Roboto">Roboto</option>
                    <option :selected="settings.font=='Open Sans Regular'" style="font-family: 'Open Sans Regular'" value="Open Sans Regular">Open Sans</option>
                    <option :selected="settings.font=='Merriweather Regular'" style="font-family: 'Merriweather Regular'" value="Merriweather Regular">Merriweather</option>
                    <option :selected="settings.font=='Roboto Slab'" style="font-family: Roboto Slab" value="Roboto Slab">Roboto Slab</option>
                    <option :selected="settings.font=='Noto Serif Regular'" style="font-family: Noto Serif Regular" value="Noto Serif Regular">Noto Serif</option>
                    <option :selected="settings.font=='Indie Flower Regular'" style="font-family: 'Indie Flower Regular'" value="Indie Flower Regular">Indie Flower</option>
                    <option :selected="settings.font=='Pacifico'" style="font-family: 'Pacifico'" value="Pacifico">Pacifico</option>
                    <option :selected="settings.font=='Didact Gothic Regular'" style="font-family: 'Didact Gothic Regular'" value="Didact Gothic Regular">Didact Gothic</option>
                    <option :selected="settings.font=='Montserrat Alternates Regular'" style="font-family: 'Montserrat Alternates Regular'" value="Montserrat Alternates Regular">Montserrat Alternates</option>
                    <option :selected="settings.font=='Russo One'" style="font-family: 'Russo One'" value="Russo One">Russo One</option>
                </select>
            </div>
            <div class="color-wrap">
                <div @click="toggleColor" class="color" v-bind:style="{ background: settings.color.hex || settings.color}" v-bind:class="{ open: opencolor }">
                    <div class="drop-menu">
                        <sketch-picker v-model="settings.color" @input="selectColor"></sketch-picker>
                    </div>
                </div>
            </div>
        </div>
        <div class="size-wrap">
            <div class="font-size-selector">
                <input type="number" name="" id="" v-bind:value="settings.size" @input="inputSize" @change="inputSize">
            </div>
            <div class="font-modificators">
                <button @click="selectBold" v-bind:class="{ checked: settings.bold }" class="bold">B</button>
                <button @click="selectItalic" v-bind:class="{ checked: settings.italic }" class="italic">I</button>
                <button @click="selectUnderline" v-bind:class="{ checked: settings.underline }" class="underline">U</button>
            </div>
        </div>
        <div class="align-wrap">
            <input :checked="settings.align=='left'" type="radio" name="align" id="left">
            <label @click="selectAlign('left')" for="left">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 277.927 277.927" style="enable-background:new 0 0 277.927 277.927;" xml:space="preserve">
                    <g>
                        <g>
                            <path style="fill:#231F20;" d="M165.687,154.998H16.034C7.483,154.998,0,147.515,0,138.963c0-8.552,7.483-16.034,16.034-16.034
                                h149.653c8.552,0,16.034,7.483,16.034,16.034C181.721,147.515,174.239,154.998,165.687,154.998z"/>
                            <g>
                                <path style="fill:#231F20;" d="M261.893,58.792H16.034C7.483,58.792,0,51.31,0,42.758s7.483-16.034,16.034-16.034h245.858
                                    c8.552,0,16.034,7.483,16.034,16.034S270.444,58.792,261.893,58.792z"/>
                                <path style="fill:#231F20;" d="M261.893,251.203H16.034C7.483,251.203,0,243.721,0,235.169s7.483-16.034,16.034-16.034h245.858
                                    c8.552,0,16.034,7.483,16.034,16.034S270.444,251.203,261.893,251.203z"/>
                            </g>
                        </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    </svg>

            </label>
            <input :checked="settings.align=='center'" type="radio" name="align" id="center">
            <label @click="selectAlign('center')" for="center">

            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 277.927 277.927" style="enable-background:new 0 0 277.927 277.927;" xml:space="preserve">
                <g>
                    <g>
                        <path style="fill:#231F20;" d="M213.79,154.998H64.137c-8.552,0-16.034-7.483-16.034-16.034c0-8.552,7.483-16.034,16.034-16.034
                            H213.79c8.552,0,16.034,7.483,16.034,16.034C229.824,147.515,222.342,154.998,213.79,154.998z"/>
                        <g>
                            <path style="fill:#231F20;" d="M261.893,58.792H16.034C7.483,58.792,0,51.31,0,42.758s7.483-16.034,16.034-16.034h245.858
                                c8.552,0,16.034,7.483,16.034,16.034S270.444,58.792,261.893,58.792z"/>
                            <path style="fill:#231F20;" d="M261.893,251.203H16.034C7.483,251.203,0,243.721,0,235.169s7.483-16.034,16.034-16.034h245.858
                                c8.552,0,16.034,7.483,16.034,16.034S270.444,251.203,261.893,251.203z"/>
                        </g>
                    </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                </svg>

            </label>
            <input :checked="settings.align=='right'" type="radio" name="align" id="right">
            <label @click="selectAlign('right')" for="right">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 277.927 277.927" style="enable-background:new 0 0 277.927 277.927;" xml:space="preserve">
                <g>
                    <g>
                        <path style="fill:#231F20;" d="M261.893,154.998H112.24c-8.552,0-16.034-7.483-16.034-16.034c0-8.552,7.483-16.034,16.034-16.034
                            h149.653c8.552,0,16.034,7.483,16.034,16.034C277.927,147.515,270.444,154.998,261.893,154.998z"/>
                        <g>
                            <path style="fill:#231F20;" d="M261.893,58.792H16.034C7.483,58.792,0,51.31,0,42.758s7.483-16.034,16.034-16.034h245.858
                                c8.552,0,16.034,7.483,16.034,16.034S270.444,58.792,261.893,58.792z"/>
                            <path style="fill:#231F20;" d="M261.893,251.203H16.034C7.483,251.203,0,243.721,0,235.169s7.483-16.034,16.034-16.034h245.858
                                c8.552,0,16.034,7.483,16.034,16.034S270.444,251.203,261.893,251.203z"/>
                        </g>
                    </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                </svg>
            </label>
            <input :checked="settings.align=='justify'" type="radio" name="align" id="justify">
            <label @click="selectAlign('justify')" for="justify">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 277.927 277.927" style="enable-background:new 0 0 277.927 277.927;" xml:space="preserve">
                <g>
                    <g>
                        <path style="fill:#231F20;" d="M261.893,58.792H16.034C7.483,58.792,0,51.31,0,42.758s7.483-16.034,16.034-16.034h245.858
                            c8.552,0,16.034,7.483,16.034,16.034S270.444,58.792,261.893,58.792z"/>
                        <path style="fill:#231F20;" d="M261.893,154.998H16.034C7.483,154.998,0,147.515,0,138.963c0-8.552,7.483-16.034,16.034-16.034
                            h245.858c8.552,0,16.034,7.483,16.034,16.034C277.927,147.515,270.444,154.998,261.893,154.998z"/>
                        <path style="fill:#231F20;" d="M261.893,251.203H16.034C7.483,251.203,0,243.721,0,235.169s7.483-16.034,16.034-16.034h245.858
                            c8.552,0,16.034,7.483,16.034,16.034S270.444,251.203,261.893,251.203z"/>
                    </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                </svg>

            </label>
        </div>
    </div>
</template>
<script>
import { Sketch } from 'vue-color';
import { EV } from './events'

export default {
    name: 'TextPicker',
    components: {
      'sketch-picker': Sketch,
    },
    props: {
        settings: null
    },
    data: () => {
        return {
            align_local: 'center',
            color_input: '#ccc',
            opencolor: false,
            ui: {
                font: null
            }
        }
    },
    mounted() {
        this.align_local = this.settings.align;
        EV.on('edit-text-close-colorpicker', () => {
            this.opencolor = false;
        })
    },
    methods: {
        selectColor() {
            this.$emit('change:color', this.settings.color);
        },

        selectFont(e) {
            this.ui.font = e.target.selectedIndex;
            this.$emit('change:font', e.target.options[e.target.selectedIndex].value);
        },

        resetFont(e) {
            this.ui.font = e.target.selectedIndex;
            e.target.selectedIndex = -1;
        },
        restoreFont(e) {
            e.target.selectedIndex = this.ui.font;
        },
        test(e) {
            console.log(e.target.options[e.target.selectedIndex].value)
        },

        selectAlign(align) {
            this.$emit('change:align', align);
        },

        selectBold() {
            this.$emit('change:bold', !this.settings.bold);
        },
        selectItalic() {
            this.$emit('change:italic', !this.settings.italic);
        },
        selectUnderline() {
            this.$emit('change:underline', !this.settings.underline);
        },

        inputSize(e) {
            // console.log(e.target.value);
            this.$emit('change:size', e.target.value);
        },

        toggleColor(e) {
            if(e.target.classList.contains('color-wrap') || e.target.classList.contains('color')){
                if(this.opencolor) {
                    this.opencolor = false;
                } else {
                    setTimeout(() => {
                        this.opencolor = true;
                    }, 1);
                }
                
            }
            
        },
        closeColor(e) {
            let target = e.target;
            for (let i = 0; i < 6; i++) {
                if(target.classList.contains('wrap')) {
                    this.opencolor = false;
                    return;
                }
                target = target.parentNode;
            }
            
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "./../../styles/style";

    
    .wrap{
        .font-wrap{
            height: 27px;
            display: flex;
            .fonts{
                width: 150px;
                height: 100%;
                select{
                    width: 100%;
                    height: 100%;
                    border-radius: 0px !important;
                    outline: none;
                    border: 0px;
                    padding-left: 0px;
                }
            }
            .color-wrap{
                height: 100%;
                padding-left: 10px;
                .color{
                    height: 100%;
                    cursor: pointer;
                    width: 45px;
                    background: red;
                    position: relative;

                    .drop-menu{
                        position: absolute;
                        top: 35px;  /* position the top  edge of the element at the middle of the parent */
                        left: 50%; /* position the left edge of the element at the middle of the parent */
                        transform: translate(-50%, 0%);
                        z-index: 1000;
                        background: #ebeaeb;
                        border-radius: 10px;
                        display: none;
                        padding: 10px;
                    }

                    &.open{
                        .drop-menu{
                            display: block;
                        }
                    }
                }
                
            }
        }

        .size-wrap{
            display: flex;
            align-items: center;
            padding-top: 10px;
            height: 30px;

            // justify-content: center;
            .font-size-selector{
                width: 100px;
                height: 100%;
                input{
                    width: 100%;
                    height: 100%;
                    border: 0px;
                    outline: none;
                    padding-left: 4px;
                    box-sizing: border-box;
                    margin: 0;
                }
            }
            .font-modificators{
                width: 100%;
                height: 100%;
                padding-left: 10px;
                display: flex;
                align-items: center;

                button{
                    background: white;
                    border: 0px solid #cfcfd1;
                    border-left: 0px;
                    height: 100%;
                    flex: 1;
                    cursor: pointer;
                    outline: none;

                    &.checked{
                        background: #1971fb;
                        color: white;
                    }

                    // &:first-child{
                    //     border-left: 1px solid #cfcfd1;
                    // }
                    
                }
                .bold{
                    font-weight: bold;
                }
                .italic{
                    font-style: italic;
                }
                .underline{
                    text-decoration: underline;
                }
            }
        }
        .align-wrap{
            display: flex;
            align-items: center;
            padding-top: 10px;
            height: 30px;
            input{
                display: none;
            }

            input:checked + label{
                background: #1971fb;
                svg{
                    path{
                        fill: white !important;
                    }
                }
            }

            label{
                display: flex;
                align-items: center;
                justify-content: center;
                flex: 1;
                height: 100%;
                cursor: pointer;
                background: white;
                border: 0px solid #cfcfd1;
                border-left: 0px;
                outline: none;

                // &:nth-child(2){
                //     border-left: 1px solid #cfcfd1;
                // }
                svg{
                    height: 13px;
                    width: auto;
                }
            }
        }
    }
</style>


