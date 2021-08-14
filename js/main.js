var app = new Vue({
    el: '#app',
    data: {
        show: false,
        income: '',
        shown: false,
        buttons: [{
            text: 'Платеж',
            selected: true
        }, {
            text: 'Срок',
            selected: false
        }],
        pays: [
            {
                text: '',
                payment: '',
                checked: true,
                year: '1'
            },
            {
                text: '',
                payment: '',
                checked: true,
                year: '2'
            },
            {
                text: '',
                payment: '',
                checked: true,
                year: '3'
            },
            {
                text: '',
                payment: '',
                checked: false,
                year: '4'
            },
        ]
    },
    methods: {
        select(sel) {
            for (let i = 0; i < this.buttons.length; i++) {
                this.buttons[i].selected = false
            }
            sel.selected = true
        },
        showDiv() {
            this.show = true
            let price = this.income
            let cutPrice = price.slice(0)
            for (let i = 0; i < this.pays.length; i++) {
                if (this.pays[i].checked) {
                    this.pays[i].payment = (+cutPrice * 1.56)
                    this.pays[i].payment = parseInt(this.pays[i].payment)
                } else {
                    this.pays[i].payment = (+cutPrice * 0.52)
                    this.pays[i].payment = parseInt(this.pays[i].payment)
                }
            }
        },
        showForm() {
            this.shown = !this.shown
        },
        add() {
            let year = this.pays.length + 1
            let money = parseInt(+this.income * 1.56)
            this.pays.push({
                text: '',
                payment: `${money}`,
                checked: true,
                year: `${year}`
            })
        }
    }
})

