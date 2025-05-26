$(document).ready(function() {
    $('#phoneInput, #contactsPhone').inputmask({
        mask: '+7 (999) 999-99-99',
        placeholder: '_',
        showMaskOnHover: false,
        clearIncomplete: true,
        
        onBeforeMask: function(value, opts) {
            if (value === '') {
                return '+7 (';
            }
            return value;
        },
        
        onincomplete: function() {
            this.value = '';
        }
    });
})