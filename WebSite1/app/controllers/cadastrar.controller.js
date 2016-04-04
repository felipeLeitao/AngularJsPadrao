(

function () {

    //não deixar criar variavel sem o var
    'use strict';

    angular.module('app').controller('cadastrarController', cadastrarController);

    cadastrarController.$inject = ['$scope', 'amigoService', '$state'];

    function cadastrarController($scope, amigoService, $state) {

        var vm = this;

        vm.amigo = {};

        vm.cadastrar = function () {
            amigoService.cadastrar(vm.amigo).then(sucesso, erro);
        }


        function sucesso(retorno) {
            alert(retorno.data);
            $state.go('layout.listar');
        }

        function erro(retorno) {
            alert(retorno.data);
        }

        



    }
}

)();