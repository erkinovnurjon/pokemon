/* eslint-disable react/prop-types */


const OpenModal = ({ isOpen, closeModalHandler, data, id }) => {
  return (
    <div className={`modal fade ${isOpen ? "show" : ""}`} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            {/* <h5 className="modal-title text-4xl" id="exampleModalLabel">Modal Title</h5> */}
            <button type="button" className="btn-close" onClick={closeModalHandler}></button>
          </div>
          <div className="modal-body">
            {data && (
              <>
                <div className="flex justify-between gap-9">
                  <div className="flex justify-center">
                    <img
                      className="w-[250px] my-4 text-center"
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="abilities">
                      {data.abilities.map((poke, index) => (
                        <div className="flex justify-center" key={index}>
                          <h2 className="text-2xl">{poke.ability.name}</h2>
                        </div>
                      ))}
                    </div>
                    <div className="text-center text-lg">
                      {data.stats.map((poke, index) => (
                        <div key={index}>
                          <h3>
                            {poke.stat.name}: {poke.base_stat}
                          </h3>
                          <div className="pokemons w-[250px] rounded h-3 bg-green-400 relative">
                            <div
                              style={{ width: `${Math.min(poke.base_stat, 100)}%` }}
                              className="bg-green-600 h-full"
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModalHandler}>
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                // Saqlash logikasi
                closeModalHandler();
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenModal;
