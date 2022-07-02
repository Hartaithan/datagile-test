import Counter from "./components/Counter";
import Empty from "./components/Empty";
import FillContainer from "./components/FillContainer";
import Grid from "./components/Grid";
import Header from "./components/Header";
import useTypedSelector from "./hooks/useTypedSelector";

const App = () => {
  const counters = useTypedSelector((state) => state.counters);
  return (
    <div className="App">
      <Header />
      <FillContainer>
        {counters.length === 0 && (
          <Empty>Counters have not yet been added</Empty>
        )}
        {counters.length > 0 && (
          <Grid>
            {counters.map((item) => (
              <Counter key={item.id} counter={item} />
            ))}
          </Grid>
        )}
      </FillContainer>
    </div>
  );
};

export default App;
