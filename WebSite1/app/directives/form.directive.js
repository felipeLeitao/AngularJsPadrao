(

function () {

    //não deixar criar variavel sem o var
    'use strict';

    angular.module('app').directive('formGalera', formGalera);

    function formGalera() {
        return  {
            templateUrl : 'app/views/form.html',
            scope : false,
            restrict : 'E'
        }
    }

}

)();