import React, { Component } from 'react'

export default class Ex10 extends Component {
  state={
    first: false,
    second: true,
  }
  render() {
    const {first, second} = this.state;
    return (
      <div>
        <main>
            <section>
                <button disabled={first}>
                    First
                </button>
            </section>
            <section>
                <button disabled={second}>
                    Second
                </button>
            </section>
        </main>
      </div>
    );
  }
}
