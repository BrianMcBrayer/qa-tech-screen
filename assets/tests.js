'use strict';

define('qa-tech-screen/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('qa-tech-screen/tests/components/calculator-absolute.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/calculator-absolute.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/calculator-absolute.js should pass jshint.');
  });
});
define('qa-tech-screen/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('qa-tech-screen/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('qa-tech-screen/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'qa-tech-screen/tests/helpers/start-app', 'qa-tech-screen/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _qaTechScreenTestsHelpersStartApp, _qaTechScreenTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _qaTechScreenTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _qaTechScreenTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('qa-tech-screen/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('qa-tech-screen/tests/helpers/resolver', ['exports', 'qa-tech-screen/resolver', 'qa-tech-screen/config/environment'], function (exports, _qaTechScreenResolver, _qaTechScreenConfigEnvironment) {

  var resolver = _qaTechScreenResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _qaTechScreenConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _qaTechScreenConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('qa-tech-screen/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('qa-tech-screen/tests/helpers/start-app', ['exports', 'ember', 'qa-tech-screen/app', 'qa-tech-screen/config/environment'], function (exports, _ember, _qaTechScreenApp, _qaTechScreenConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _qaTechScreenConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _qaTechScreenApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('qa-tech-screen/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('qa-tech-screen/tests/integration/components/calculator-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('calculator', 'Integration | Component | calculator', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'jtm3cSrG',
      'block': '{"statements":[["append",["unknown",["calculator"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '/4F4Vey3',
      'block': '{"statements":[["text","\\n"],["block",["calculator"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('qa-tech-screen/tests/integration/components/calculator-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/calculator-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/calculator-test.js should pass jshint.');
  });
});
define('qa-tech-screen/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('qa-tech-screen/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('qa-tech-screen/tests/services/calculation-engine.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/calculation-engine.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/calculation-engine.js should pass jshint.');
  });
});
define('qa-tech-screen/tests/test-helper', ['exports', 'qa-tech-screen/tests/helpers/resolver', 'ember-qunit'], function (exports, _qaTechScreenTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_qaTechScreenTestsHelpersResolver['default']);
});
define('qa-tech-screen/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('qa-tech-screen/tests/unit/services/calculation-engine-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:calculation-engine', 'Unit | Service | calculation engine', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('qa-tech-screen/tests/unit/services/calculation-engine-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/calculation-engine-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/calculation-engine-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('qa-tech-screen/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
