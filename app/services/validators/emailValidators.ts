import {Control, ControlGroup} from 'angular2/common';

export class EmailValidators{
    static emailValid(control: Control){
        if(control.value == '')
        return null;

        if( validateEmail(control.value))
        return null;
        else{
            return { emailValidators: true};
        }

        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }

}