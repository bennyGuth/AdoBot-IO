angular.module('AdoBot')
  .directive('smsThread', [
    '$uibModal',
    '$filter',
    function($uibModal, $filter) {
      return {
        restrict: 'AE',
        scope: {
          thread: '=',
          messages: '='
        },
        templateUrl: 'sms-thread-entry.html',
        link: function($scope, elem, attrs) {

          $scope.getThreadTitle = function() {
            var msg = $scope.messages[0];
            return (msg.name ? msg.name + ' ' : '') + msg.phone;
          };

          elem.on('click', function() {
            $uibModal.open({
              templateUrl: 'sms-thread.html',
              scope: $scope
            });
          });

        }
      };
    }
  ]);
