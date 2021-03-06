import './theme/index.css'
import './override.less'

import {
    Button,
    Input,
    Autocomplete,
    Checkbox,
    Form,
    FormItem,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Select,
    Option,
    Message,
    MessageBox,
    Dialog,
    Switch,
    Loading,
    Tree,
    Collapse,
    CollapseItem,
    ColorPicker,
    Popover,
    Radio,
    RadioButton,
    RadioGroup,
    Slider
} from 'element-ui'

const components = {
    Button,
    InputText: Input,
    Autocomplete,
    Checkbox,
    Form,
    FormItem,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Select,
    Option,
    Dialog,
    ISwitch: Switch,
    Loading,
    Tree,
    Collapse,
    CollapseItem,
    ColorPicker,
    Popover,
    Radio,
    RadioButton,
    RadioGroup,
    Slider
}

export default {
    install(Vue) {
        Object.keys(components).forEach(key => {
            Vue.component(key, components[key])
        })

        Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }

        Vue.prototype.$Message = Message
        Vue.prototype.$Prompt = MessageBox.prompt

        Vue.use(Loading.directive)
        Vue.prototype.$Loading = Loading.service
    },
}
