import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fa-stack', 'Integration | Component | {{fa-stack}}', {
  integration: true
});

test("A <span> tag with the 'fa-stack' class", function(assert) {
  this.render(hbs`{{fa-stack}}`);

  let $stack = this.$('span');
  assert.equal($stack.length, 1, 'A <span> element is rendered');
  assert.ok($stack.hasClass('fa-stack'), "The <span> element should have the 'fa-stack' class");
});

test(`I can set the size property to 'lg'`, function(assert) {
  this.render(hbs`{{fa-stack size="lg"}}`);
  let $stack = this.$('span');
  assert.ok($stack.hasClass('fa-lg'), "The <span> element should have the 'fa-lg' class");
});

[2, 3, 4, 5].forEach((size) => {
  test(`I can set the size property as a number - size=${size}`, function(assert) {
    this.set('size', size);
    this.render(hbs`{{fa-stack size=size}}`);
    let $stack = this.$('span');
    assert.ok($stack.hasClass(`fa-${size}x`), `The <span> element should have the 'fa-${size}x' class`);
  });

  test(`I can set the size property as a string - size="${size}"`, function(assert) {
    this.set('size', `${size}`);
    this.render(hbs`{{fa-stack size=size}}`);
    let $stack = this.$('span');
    assert.ok($stack.hasClass(`fa-${size}x`), `The <span> element should have the 'fa-${size}x' class`);
  });

  test(`I can set this size property as a string - size="${size}x"`, function(assert) {
    this.set('size', `${size}x`);
    this.render(hbs`{{fa-stack size=size}}`);
    let $stack = this.$('span');
    assert.ok($stack.hasClass(`fa-${size}x`), `The <span> element should have the 'fa-${size}x' class`);
  });
});

test('A block with stack contextual components is yielded', function(assert) {
  this.render(hbs`
    {{#fa-stack as |s|}}
      {{s.stack-2x icon="fa-square-o"}}
      {{s.stack-1x icon="fa-twitter"}}
    {{/fa-stack}}
  `);

  let $icons = this.$('i');
  assert.equal($icons.length, 2);
});
